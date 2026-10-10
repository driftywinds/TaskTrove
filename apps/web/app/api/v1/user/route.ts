import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"
import type { User } from "@tasktrove/types/core"
import { createUserId } from "@tasktrove/types/id"
import { DataFileSerializationSchema, getDataFileUsers } from "@tasktrove/types/data-file"
import { UserSerializationSchema } from "@tasktrove/types/serialization"
import {
  AdminUpdateUserRequestSchema,
  CreateUserRequestSchema,
  DeleteUserRequestSchema,
  UpdateUserRequestSchema,
} from "@tasktrove/types/api-requests"
import {
  DeleteUserResponse,
  ErrorResponse,
  GetUsersResponse,
  MutateUserResponse,
  UpdateUserResponse,
} from "@tasktrove/types/api-responses"
import { ApiErrorCode } from "@tasktrove/types/api-errors"
import { DEFAULT_MAX_USERS } from "@tasktrove/constants"
import { validateRequestBody, createErrorResponse } from "@/lib/utils/validation"
import { safeReadDataFile, safeWriteDataFile } from "@/lib/utils/safe-file-operations"
import {
  withApiLogging,
  logBusinessEvent,
  withFileOperationLogging,
  withPerformanceLogging,
  type EnhancedRequest,
} from "@/lib/middleware/api-logger"
import { withMutexProtection } from "@/lib/utils/api-mutex"
import { withAuthentication, getAuthUser, type AuthenticatedUser } from "@/lib/middleware/auth"
import { withApiVersion } from "@/lib/middleware/api-version"
import {
  processAvatarUpdate,
  processPasswordUpdate,
  processApiTokenUpdate,
} from "@/lib/utils/user-update-helpers"
import { clearNullValues } from "@tasktrove/utils"

/**
 * Serializes a user for API responses; fails with a 500 on schema mismatch.
 */
function serializeUserOr500(
  user: User,
): Promise<{ user: User; error?: never } | { user?: never; error: NextResponse<ErrorResponse> }> {
  const result = UserSerializationSchema.safeParse(user)
  if (!result.success) {
    return Promise.resolve({
      error: createErrorResponse(
        "Failed to serialize user data",
        "Serialization failed",
        500,
        ApiErrorCode.DATA_FILE_VALIDATION_ERROR,
      ),
    })
  }
  return Promise.resolve({ user: result.data })
}

/** no-store cache headers shared by all handlers */
const NO_STORE_HEADERS = {
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
} as const

/**
 * GET /api/v1/user
 *
 * Returns the full users array (multi-user) under the `user` key,
 * matching the official Pro image contract.
 */
async function getUsers(
  request: EnhancedRequest,
): Promise<NextResponse<GetUsersResponse | ErrorResponse>> {
  const fileData = await withFileOperationLogging(
    () => safeReadDataFile(),
    "read-data-file",
    request.context,
  )

  if (!fileData) {
    return createErrorResponse(
      "Failed to read data file",
      "File reading or validation failed",
      500,
      ApiErrorCode.DATA_FILE_READ_ERROR,
    )
  }

  const dataSerializationResult = DataFileSerializationSchema.safeParse(fileData)
  if (!dataSerializationResult.success) {
    return createErrorResponse(
      "Failed to serialize data file",
      "Serialization failed",
      500,
      ApiErrorCode.DATA_FILE_VALIDATION_ERROR,
    )
  }

  const serializedData = dataSerializationResult.data

  const users = getDataFileUsers(serializedData)
  if (users.length === 0) {
    return createErrorResponse(
      "Failed to serialize user data",
      "No user found in data file",
      500,
      ApiErrorCode.DATA_FILE_VALIDATION_ERROR,
    )
  }

  for (const user of users) {
    const serializationResult = UserSerializationSchema.safeParse(user)
    if (!serializationResult.success) {
      return createErrorResponse(
        "Failed to serialize user data",
        "Serialization failed",
        500,
        ApiErrorCode.DATA_FILE_VALIDATION_ERROR,
      )
    }
  }

  logBusinessEvent(
    "users_fetched",
    {
      count: users.length,
    },
    request.context,
  )

  const response: GetUsersResponse = {
    user: users,
    meta: {
      count: users.length,
      timestamp: new Date().toISOString(),
      version: serializedData.version || "v0.7.0",
    },
  }

  return NextResponse.json<GetUsersResponse>(response, { headers: NO_STORE_HEADERS })
}

export const GET = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(getUsers, {
        endpoint: "/api/v1/user",
        module: "api-v1-user",
      }),
      { allowApiToken: true },
    ),
  ),
)

/**
 * POST /api/v1/user
 *
 * Creates a new user (admin only).
 * Enforces the user cap (fixed constant — no license logic), case-insensitive
 * username uniqueness, avatar data-URL processing, and password hashing.
 */
async function createUser(
  request: EnhancedRequest,
): Promise<NextResponse<MutateUserResponse | ErrorResponse>> {
  // Authenticated identity resolved by middleware (server-side, never trusted
  // from the client)
  const authUser: AuthenticatedUser | undefined = getAuthUser(request)

  const fileData = await withFileOperationLogging(
    () => safeReadDataFile(),
    "read-data-file",
    request.context,
  )

  if (!fileData) {
    return createErrorResponse(
      "Failed to read data file",
      "File reading failed",
      500,
      ApiErrorCode.DATA_FILE_READ_ERROR,
    )
  }

  const existingUsers = getDataFileUsers(fileData)
  const currentUser =
    authUser !== undefined
      ? existingUsers.find((user) => user.id === authUser.id)
      : existingUsers[0]
  if (!currentUser) {
    return createErrorResponse(
      "User not found",
      "Authenticated user not found in data file",
      404,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }

  if (currentUser.role !== "admin") {
    return createErrorResponse(
      "Permission denied",
      "Only admins can create users",
      403,
      ApiErrorCode.AUTHORIZATION_DENIED,
    )
  }

  // Validate request body
  const validation = await validateRequestBody(request, CreateUserRequestSchema)
  if (!validation.success) {
    return validation.error
  }
  const body = validation.data

  // User cap (fixed; replaces the Pro license-seats lookup)
  const userLimit = Math.max(1, DEFAULT_MAX_USERS)
  if (existingUsers.length >= userLimit) {
    return createErrorResponse(
      "User limit reached",
      `Maximum of ${userLimit} users allowed`,
      400,
      ApiErrorCode.VALIDATION_ERROR,
    )
  }

  // Case-insensitive duplicate username check
  const username = body.username.trim()
  const duplicate = existingUsers.some(
    (user) => user.username.toLowerCase() === username.toLowerCase(),
  )
  if (duplicate) {
    return createErrorResponse(
      "Username already exists",
      `Username "${username}" is already in use`,
      400,
      ApiErrorCode.VALIDATION_ERROR,
    )
  }

  // Process avatar update (data URL -> saved file path)
  const avatarResult = await processAvatarUpdate(body.avatar)
  if (!avatarResult.success) {
    return createErrorResponse(
      avatarResult.error,
      avatarResult.error,
      avatarResult.code || 500,
      avatarResult.code === 400
        ? ApiErrorCode.VALIDATION_ERROR
        : ApiErrorCode.DATA_FILE_WRITE_ERROR,
    )
  }

  // Hash the plaintext password
  const passwordResult = processPasswordUpdate(body.password)
  if (!passwordResult.success) {
    return createErrorResponse(
      passwordResult.error,
      "Password processing failed",
      500,
      ApiErrorCode.INTERNAL_SERVER_ERROR,
    )
  }

  const newUser: User = {
    id: createUserId(uuidv4()),
    username,
    password: passwordResult.hashedPassword || "",
    role: body.role,
    ...(avatarResult.avatarPath !== undefined && avatarResult.avatarPath !== null
      ? { avatar: avatarResult.avatarPath }
      : {}),
  }

  const updatedUsers = [...existingUsers, newUser]
  const updatedFileData = {
    ...fileData,
    user: updatedUsers,
    users: updatedUsers,
  }

  const writeSuccess = await withPerformanceLogging(
    () => safeWriteDataFile({ data: updatedFileData }),
    "write-data-file",
    request.context,
    500,
  )

  if (!writeSuccess) {
    return createErrorResponse(
      "Failed to save data",
      "File writing failed",
      500,
      ApiErrorCode.DATA_FILE_WRITE_ERROR,
    )
  }

  logBusinessEvent(
    "user_created",
    {
      id: newUser.id,
      username: newUser.username,
      role: newUser.role,
    },
    request.context,
  )

  const response: MutateUserResponse = {
    success: true,
    user: newUser,
    message: "User created successfully",
  }

  return NextResponse.json<MutateUserResponse>(response, { headers: NO_STORE_HEADERS })
}

export const POST = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(createUser, {
        endpoint: "/api/v1/user",
        module: "api-v1-user",
      }),
      { allowApiToken: true },
    ),
  ),
)

/**
 * PATCH /api/v1/user
 *
 * Updates a user (self or admin-targeted):
 * - With `id` set: admin modifies another user (or self with admin privileges).
 * - Without `id`: self-update; role changes require admin and are rejected.
 * Preserves base single-user PATCH semantics: avatar processing, password
 * hashing, apiToken null-handling, and id immutability.
 */
async function updateUser(
  request: EnhancedRequest,
): Promise<NextResponse<UpdateUserResponse | MutateUserResponse | ErrorResponse>> {
  // Validate request body
  const validation = await validateRequestBody(request, AdminUpdateUserRequestSchema)
  if (!validation.success) {
    return validation.error
  }
  const body = validation.data

  const authUser: AuthenticatedUser | undefined = getAuthUser(request)

  const fileData = await withFileOperationLogging(
    () => safeReadDataFile(),
    "read-data-file",
    request.context,
  )

  if (!fileData) {
    return createErrorResponse(
      "Failed to read data file",
      "File reading failed",
      500,
      ApiErrorCode.DATA_FILE_READ_ERROR,
    )
  }

  const existingUsers = getDataFileUsers(fileData)
  const currentUser =
    authUser !== undefined
      ? existingUsers.find((user) => user.id === authUser.id)
      : existingUsers[0]
  if (!currentUser) {
    return createErrorResponse(
      "User not found",
      "Authenticated user not found in data file",
      404,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }

  const isAdmin = currentUser.role === "admin"

  // Determine target user
  let targetId: string
  let editedByAdmin: boolean = false
  if (body.id !== undefined) {
    // Admin targeting a (possibly different) user
    if (!isAdmin) {
      return createErrorResponse(
        "Permission denied",
        "Only admins can update users",
        403,
        ApiErrorCode.AUTHORIZATION_DENIED,
      )
    }
    if (body.id === currentUser.id && body.role !== undefined) {
      return createErrorResponse(
        "Admins can't change own role",
        "Cannot change own role",
        400,
        ApiErrorCode.INVALID_REQUEST_BODY,
      )
    }
    targetId = body.id
    editedByAdmin = true
  } else {
    // Self-update; non-admins may not escalate their own role
    if (body.role !== undefined && !isAdmin) {
      return createErrorResponse(
        "Permission denied",
        "Users cannot modify their own role",
        403,
        ApiErrorCode.AUTHORIZATION_DENIED,
      )
    }
    targetId = currentUser.id
  }

  // Process avatar update (data URL -> saved file path); null removes avatar.
  // Base contract used UpdateUserRequestSchema for avatar validation, so keep
  // that schema for the avatar value only.
  const avatarCheck = UpdateUserRequestSchema.shape.avatar.safeParse(body.avatar)
  if (!avatarCheck.success && body.avatar !== undefined) {
    return createErrorResponse(
      "Validation failed",
      "Invalid avatar format",
      400,
      ApiErrorCode.INVALID_REQUEST_BODY,
    )
  }

  const avatarResult = await processAvatarUpdate("avatar" in body ? body.avatar : undefined)
  if (!avatarResult.success) {
    return createErrorResponse(
      avatarResult.error,
      avatarResult.error,
      avatarResult.code || 500,
      avatarResult.code === 400
        ? ApiErrorCode.VALIDATION_ERROR
        : ApiErrorCode.DATA_FILE_WRITE_ERROR,
    )
  }
  const avatarPath = avatarResult.avatarPath

  // Hash the password when one is provided
  const passwordResult = processPasswordUpdate(
    body.password !== undefined && body.password.length > 0 ? body.password : undefined,
  )
  if (!passwordResult.success) {
    return createErrorResponse(
      passwordResult.error,
      "Password processing failed",
      500,
      ApiErrorCode.INTERNAL_SERVER_ERROR,
    )
  }
  if (passwordResult.hashedPassword) {
    body.password = passwordResult.hashedPassword
  }

  // Find target user
  const targetIndex = existingUsers.findIndex((user) => user.id === targetId)
  if (targetIndex === -1) {
    return createErrorResponse(
      "User not found",
      `User with ID ${targetId} not found`,
      404,
      ApiErrorCode.DATA_FILE_VALIDATION_ERROR,
    )
  }
  const existingUser = existingUsers[targetIndex]
  if (!existingUser) {
    return createErrorResponse(
      "User not found",
      `User with ID ${targetId} not found`,
      404,
      ApiErrorCode.DATA_FILE_VALIDATION_ERROR,
    )
  }

  // Merge provided fields; avatar and apiToken handled separately below
  const updatedUser: User = {
    ...existingUser,
    ...Object.fromEntries(
      Object.entries(body).filter(
        ([key]) => key !== "avatar" && key !== "apiToken" && key !== "id",
      ),
    ),
  }

  // id is immutable
  updatedUser.id = existingUser.id

  // Handle avatar update separately (convert null to undefined)
  if ("avatar" in body && avatarPath !== undefined) {
    updatedUser.avatar = avatarPath === null ? undefined : avatarPath
  }

  // Handle apiToken update separately (convert null to undefined)
  const processedApiToken = processApiTokenUpdate(
    body.apiToken,
    "apiToken" in body && body.apiToken !== undefined,
  )
  if (processedApiToken !== undefined) {
    updatedUser.apiToken = processedApiToken === null ? undefined : processedApiToken
  }

  // Preserve required fields when not explicitly provided
  const cleanedUser: User = clearNullValues({
    ...updatedUser,
    password: updatedUser.password || existingUser.password,
  })

  const updatedUsers = [...existingUsers]
  updatedUsers[targetIndex] = cleanedUser

  const updatedFileData = {
    ...fileData,
    user: updatedUsers,
    users: updatedUsers,
  }

  const writeSuccess = await withPerformanceLogging(
    () => safeWriteDataFile({ data: updatedFileData }),
    "write-data-file",
    request.context,
    500,
  )

  if (!writeSuccess) {
    return createErrorResponse(
      "Failed to save data",
      "File writing failed",
      500,
      ApiErrorCode.DATA_FILE_WRITE_ERROR,
    )
  }

  logBusinessEvent(
    "user_updated",
    {
      username: cleanedUser.username,
      userId: cleanedUser.id,
      fieldsUpdated: Object.keys(body),
      editedByAdmin,
    },
    request.context,
  )

  const serializeResult = await serializeUserOr500(cleanedUser)
  if (serializeResult.error) {
    return serializeResult.error
  }
  const serializedUser = serializeResult.user

  const response: UpdateUserResponse = {
    success: true,
    user: serializedUser,
    message: "User updated successfully",
  }

  return NextResponse.json<UpdateUserResponse>(response)
}

export const PATCH = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(updateUser, {
        endpoint: "/api/v1/user",
        module: "api-v1-user",
      }),
      { allowApiToken: true },
    ),
  ),
)

/**
 * DELETE /api/v1/user
 *
 * Deletes a user (admin only, not self). Cascades:
 * - tasks owned by the user -> ownerId cleared to undefined
 * - tasks where the user is assigned -> removed from assignees
 * - task comments with the user's reactions -> reactions filtered
 * - projects where the user is a member -> members filtered
 * - reward events belonging to the user -> removed
 */
async function deleteUser(
  request: EnhancedRequest,
): Promise<NextResponse<DeleteUserResponse | ErrorResponse>> {
  const authUser: AuthenticatedUser | undefined = getAuthUser(request)

  const fileData = await withFileOperationLogging(
    () => safeReadDataFile(),
    "read-data-file",
    request.context,
  )

  if (!fileData) {
    return createErrorResponse(
      "Failed to read data file",
      "File reading failed",
      500,
      ApiErrorCode.DATA_FILE_READ_ERROR,
    )
  }

  const existingUsers = getDataFileUsers(fileData)
  const currentUser =
    authUser !== undefined
      ? existingUsers.find((user) => user.id === authUser.id)
      : existingUsers[0]
  if (!currentUser) {
    return createErrorResponse(
      "User not found",
      "Authenticated user not found in data file",
      404,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }

  if (currentUser.role !== "admin") {
    return createErrorResponse(
      "Permission denied",
      "Only admins can delete users",
      403,
      ApiErrorCode.AUTHORIZATION_DENIED,
    )
  }

  // Validate request body
  const validation = await validateRequestBody(request, DeleteUserRequestSchema)
  if (!validation.success) {
    return validation.error
  }
  const { userId } = validation.data

  const targetUser = existingUsers.find((user) => user.id === userId)
  if (!targetUser) {
    return createErrorResponse(
      "User not found",
      `User with ID ${userId} not found`,
      404,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }
  if (userId === currentUser.id) {
    return createErrorResponse(
      "Admins can't delete self",
      "Admins cannot delete their own account",
      400,
      ApiErrorCode.INVALID_REQUEST_BODY,
    )
  }

  // Last-user protection: data files must keep at least one user
  if (existingUsers.length <= 1) {
    return createErrorResponse(
      "User limit reached",
      "Cannot delete the only remaining user",
      400,
      ApiErrorCode.VALIDATION_ERROR,
    )
  }

  // Cascade cleanup
  let affectedTasks = 0
  let affectedProjects = 0
  let affectedComments = 0
  let affectedRewardEvents = 0

  const tasks = fileData.tasks.map((task) => {
    let changed = false
    let nextTask = task

    // Clear ownership
    if (nextTask.ownerId === userId) {
      nextTask = { ...nextTask, ownerId: undefined }
      changed = true
    }

    // Remove from assignees
    if (nextTask.assignees !== undefined && nextTask.assignees.includes(userId)) {
      nextTask = {
        ...nextTask,
        assignees: nextTask.assignees.filter((assignee) => assignee !== userId),
      }
      changed = true
    }

    // Filter the user's reactions from comments
    const commentsChanged = nextTask.comments.some(
      (comment) =>
        comment.reactions !== undefined &&
        comment.reactions.some((reaction) => reaction.userId === userId),
    )
    if (commentsChanged) {
      const nextComments = nextTask.comments.map((comment) =>
        comment.reactions !== undefined &&
        comment.reactions.some((reaction) => reaction.userId === userId)
          ? {
              ...comment,
              reactions: comment.reactions.filter((reaction) => reaction.userId !== userId),
            }
          : comment,
      )
      nextTask = { ...nextTask, comments: nextComments }
      changed = true
      affectedComments = affectedComments + 1
    }

    if (changed) {
      affectedTasks = affectedTasks + 1
    }
    return nextTask
  })

  const projects = fileData.projects.map((project) => {
    if (project.members !== undefined && project.members.includes(userId)) {
      affectedProjects = affectedProjects + 1
      return {
        ...project,
        members: project.members.filter((member) => member !== userId),
      }
    }
    return project
  })

  const rewardEvents = fileData.rewardEvents.filter((event) => {
    if (event.userId === userId) {
      affectedRewardEvents = affectedRewardEvents + 1
      return false
    }
    return true
  })

  const currencyRewardEvents = fileData.currencyRewardEvents?.filter(
    (event) => event.userId !== userId,
  )

  const remainingUsers = existingUsers.filter((user) => user.id !== userId)

  const updatedFileData = {
    ...fileData,
    tasks,
    projects,
    rewardEvents,
    ...(currencyRewardEvents !== undefined ? { currencyRewardEvents } : {}),
    user: remainingUsers,
    users: remainingUsers,
  }

  const writeSuccess = await withPerformanceLogging(
    () => safeWriteDataFile({ data: updatedFileData }),
    "write-data-file",
    request.context,
    500,
  )

  if (!writeSuccess) {
    return createErrorResponse(
      "Failed to save data",
      "File writing failed",
      500,
      ApiErrorCode.DATA_FILE_WRITE_ERROR,
    )
  }

  logBusinessEvent(
    "user_deleted",
    {
      userId,
      username: targetUser.username,
      affectedTasks,
      affectedProjects,
      affectedComments,
      affectedRewardEvents,
    },
    request.context,
  )

  const response: DeleteUserResponse = {
    success: true,
    deletedUserId: userId,
    message: "User deleted successfully",
  }

  return NextResponse.json<DeleteUserResponse>(response, { headers: NO_STORE_HEADERS })
}

export const DELETE = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(deleteUser, {
        endpoint: "/api/v1/user",
        module: "api-v1-user",
      }),
      { allowApiToken: true },
    ),
  ),
)

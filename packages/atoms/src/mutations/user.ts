/**
 * User mutation atoms
 *
 * Contains mutation atoms for user operations:
 * - Updating own user profile (self-update)
 * - Admin creating a user
 * - Admin deleting a user (with cascade handled server-side)
 *
 * All mutations operate on the users list cached under USERS_QUERY_KEY;
 * the acting user is resolved server-side from the session.
 */

import { type User } from "@tasktrove/types/core";
import {
  type UpdateUserRequest,
  type CreateUserRequest,
  type DeleteUserRequest,
  UserUpdateSerializationSchema,
  CreateUserRequestSchema,
  DeleteUserRequestSchema,
} from "@tasktrove/types/api-requests";
import {
  type UpdateUserResponse,
  type MutateUserResponse,
  type DeleteUserResponse,
  UpdateUserResponseSchema,
  MutateUserResponseSchema,
  DeleteUserResponseSchema,
} from "@tasktrove/types/api-responses";
import {
  type AvatarFilePath,
  createAvatarFilePath,
  API_ROUTES,
} from "@tasktrove/types/constants";
import { DEFAULT_USER } from "@tasktrove/types/defaults";
import {
  USERS_QUERY_KEY,
  TASKS_QUERY_KEY,
  PROJECTS_QUERY_KEY,
  GROUPS_QUERY_KEY,
} from "@tasktrove/constants";
import { clearNullValues } from "@tasktrove/utils";
import { createMutation } from "./factory";

// =============================================================================
// USER MUTATION ATOMS
// =============================================================================

/**
 * User update mutation atom (self or admin-targeted PATCH /api/v1/user)
 *
 * Updates user profile data and optimistically applies changes when the
 * target user id is known (admin edits). Self-updates (no `id` in the
 * payload) are confirmed server-side from the session and refreshed via
 * query invalidation.
 * Handles avatar conversion from base64 to file path.
 */
export const updateUserMutationAtom = createMutation<
  UpdateUserResponse,
  UpdateUserRequest,
  User[]
>({
  method: "PATCH",
  operationName: "Updated user",
  apiEndpoint: API_ROUTES.V1_USER,
  resourceQueryKey: USERS_QUERY_KEY,
  defaultResourceValue: [DEFAULT_USER],
  responseSchema: UpdateUserResponseSchema,
  serializationSchema: UserUpdateSerializationSchema,
  logModule: "user",
  testResponseFactory: (variables: UpdateUserRequest) => {
    // For test mode, merge updates with default user
    // Simulate avatar conversion: base64 -> file path (in real API, this would save the file)
    let simulatedAvatarPath: AvatarFilePath | undefined = DEFAULT_USER.avatar;
    if (variables.avatar !== undefined) {
      if (variables.avatar === null) {
        // User wants to remove avatar
        simulatedAvatarPath = undefined;
      } else {
        // User uploaded new avatar (base64) - simulate saving as file
        simulatedAvatarPath = createAvatarFilePath(
          "assets/avatar/simulated-test-avatar.png",
        );
      }
    }

    const testUser: User = {
      ...DEFAULT_USER,
      ...clearNullValues(variables),
      avatar: simulatedAvatarPath,
    };
    return {
      success: true,
      user: testUser,
      message: "User updated successfully (test mode)",
    };
  },
  optimisticUpdateFn: (
    variables: UpdateUserRequest,
    oldUsers: User[],
  ): User[] => {
    if (variables.id === undefined) {
      // Self-update: the acting user is resolved from the session server-side,
      // so refresh via invalidation rather than guessing the target here.
      return oldUsers;
    }

    const targetId = variables.id;
    return oldUsers.map((user) => {
      if (user.id !== targetId) {
        return user;
      }
      return {
        ...user,
        ...clearNullValues(variables),
        // avatar type is complex (file path), and base64 must never land in
        // the cache - the server handles conversion
        avatar: user.avatar,
        // id is immutable
        id: user.id,
      };
    });
  },
});
updateUserMutationAtom.debugLabel = "updateUserMutationAtom";

/**
 * Create user mutation atom (admin POST /api/v1/user)
 *
 * The new user is refetched from the server on success (invalidation);
 * no optimistic append because the server assigns the id and hash.
 */
export const createUserMutationAtom = createMutation<
  MutateUserResponse,
  CreateUserRequest,
  User[]
>({
  method: "POST",
  operationName: "Created user",
  apiEndpoint: API_ROUTES.V1_USER,
  resourceQueryKey: USERS_QUERY_KEY,
  defaultResourceValue: [],
  responseSchema: MutateUserResponseSchema,
  serializationSchema: CreateUserRequestSchema,
  logModule: "user",
  testResponseFactory: (variables: CreateUserRequest): MutateUserResponse => ({
    success: true,
    user: {
      ...DEFAULT_USER,
      id: DEFAULT_USER.id,
      username: variables.username,
      password: variables.password,
      role: variables.role,
    },
    message: "User created successfully (test mode)",
  }),
  optimisticUpdateFn: (
    _variables: CreateUserRequest,
    oldUsers: User[],
  ): User[] => oldUsers,
});
createUserMutationAtom.debugLabel = "createUserMutationAtom";

/**
 * Delete user mutation atom (admin DELETE /api/v1/user)
 *
 * Optimistically removes the user from the list. Deletion cascades through
 * tasks, comments, projects, and reward events server-side, so those
 * resource caches are invalidated too.
 */
export const deleteUserMutationAtom = createMutation<
  DeleteUserResponse,
  DeleteUserRequest,
  User[]
>({
  method: "DELETE",
  operationName: "Deleted user",
  apiEndpoint: API_ROUTES.V1_USER,
  resourceQueryKey: USERS_QUERY_KEY,
  defaultResourceValue: [],
  responseSchema: DeleteUserResponseSchema,
  serializationSchema: DeleteUserRequestSchema,
  logModule: "user",
  invalidateQueryKeys: [
    USERS_QUERY_KEY,
    TASKS_QUERY_KEY,
    PROJECTS_QUERY_KEY,
    GROUPS_QUERY_KEY,
  ],
  testResponseFactory: (variables: DeleteUserRequest): DeleteUserResponse => ({
    success: true,
    deletedUserId: variables.userId,
    message: "User deleted successfully (test mode)",
  }),
  optimisticUpdateFn: (
    variables: DeleteUserRequest,
    oldUsers: User[],
  ): User[] => oldUsers.filter((user) => user.id !== variables.userId),
});
deleteUserMutationAtom.debugLabel = "deleteUserMutationAtom";

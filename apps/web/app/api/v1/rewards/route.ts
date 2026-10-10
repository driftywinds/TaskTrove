import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"
import { DataFileSerializationSchema } from "@tasktrove/types/data-file"
import { UserIdSchema } from "@tasktrove/types/id"
import { CreateRewardEventRequestSchema } from "@tasktrove/types/api-requests"
import type {
  CreateRewardEventResponse,
  ErrorResponse,
  GetRewardsResponse,
} from "@tasktrove/types/api-responses"
import { ApiErrorCode } from "@tasktrove/types/api-errors"
import type { DataFile } from "@tasktrove/types/data-file"
import type { CurrencyRewardEvent, RewardEvent } from "@tasktrove/types/rewards"
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
import { withAuthentication, getAuthUser } from "@/lib/middleware/auth"
import { withApiVersion } from "@/lib/middleware/api-version"

/** no-store cache headers shared by all handlers */
const NO_STORE_HEADERS = {
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
} as const

/**
 * Points awarded per points-path reward event.
 * Recovered from the Pro bundle: `Uo = 10` (module 33885).
 */
const DEFAULT_REWARD_POINTS = 10

/**
 * GET /api/v1/rewards
 *
 * Returns all reward events (points + currency) with meta.
 * Contract recovered from the official Pro bundle.
 */
async function getRewards(
  request: EnhancedRequest,
): Promise<NextResponse<GetRewardsResponse | ErrorResponse>> {
  const fileData = await withFileOperationLogging(
    () => safeReadDataFile(),
    "read-rewards-data-file",
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

  const serializationResult = DataFileSerializationSchema.safeParse(fileData)
  if (!serializationResult.success) {
    return createErrorResponse(
      "Failed to serialize data file",
      "Serialization failed",
      500,
      ApiErrorCode.DATA_FILE_VALIDATION_ERROR,
    )
  }

  const serializedData = serializationResult.data
  const rewardEvents = serializedData.rewardEvents
  const currencyRewardEvents = serializedData.currencyRewardEvents ?? []

  logBusinessEvent(
    "rewards_fetched",
    {
      eventsCount: rewardEvents.length + currencyRewardEvents.length,
    },
    request.context,
  )

  const response: GetRewardsResponse = {
    rewardEvents,
    currencyRewardEvents,
    meta: {
      count: rewardEvents.length + currencyRewardEvents.length,
      timestamp: new Date().toISOString(),
    },
  }

  return NextResponse.json<GetRewardsResponse>(response, { headers: NO_STORE_HEADERS })
}

export const GET = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(getRewards, {
        endpoint: "/api/v1/rewards",
        module: "api-v1-rewards",
      }),
      { allowApiToken: true },
    ),
  ),
)

/**
 * POST /api/v1/rewards
 *
 * Creates a reward event. Two paths (contract recovered from the Pro bundle):
 * - `currencyId` present → currency reward event (wishlist redemption,
 *   exchange, task reward).
 * - `currencyId` absent → points reward event (fixed points per event).
 *
 * `WISHLIST_REDEEMED` requires `currencyId` + `amount` (schema-enforced).
 */
async function createRewardEvent(
  request: EnhancedRequest,
): Promise<NextResponse<CreateRewardEventResponse | ErrorResponse>> {
  // Validate request body
  const validation = await validateRequestBody(request, CreateRewardEventRequestSchema)
  if (!validation.success) {
    return validation.error
  }
  const body = validation.data

  const fileData = await withFileOperationLogging(
    () => safeReadDataFile(),
    "read-rewards-data-file",
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

  // The acting user is resolved server-side from the session
  const authUser = getAuthUser(request)
  if (!authUser || authUser.id === "") {
    return createErrorResponse(
      "Session not found",
      "Could not determine current user",
      401,
      ApiErrorCode.AUTHENTICATION_REQUIRED,
    )
  }

  const userIdParse = UserIdSchema.safeParse(authUser.id)
  if (!userIdParse.success) {
    return createErrorResponse(
      "Session not found",
      "Could not determine current user",
      401,
      ApiErrorCode.AUTHENTICATION_REQUIRED,
    )
  }
  const userId = userIdParse.data

  // Wishlist redemptions must be currency events (schema enforces it, but
  // guard here too so the error shape matches the recovered contract)
  if (body.type === "WISHLIST_REDEEMED" && !body.currencyId) {
    return createErrorResponse(
      "Invalid wishlist redemption",
      "Wishlist redemptions must include currencyId and amount",
      400,
      ApiErrorCode.VALIDATION_ERROR,
    )
  }

  const existingCurrencyEvents: CurrencyRewardEvent[] = fileData.currencyRewardEvents ?? []
  const existingPointEvents: RewardEvent[] = fileData.rewardEvents

  let updatedFileData: DataFile
  let createdEventId: string

  if (body.currencyId) {
    const newEvent: CurrencyRewardEvent = {
      id: uuidv4(),
      userId,
      entityId: body.entityId,
      type: body.type,
      currencyId: body.currencyId,
      amount: body.amount ?? 0,
      timestamp: new Date(),
    }
    createdEventId = newEvent.id

    updatedFileData = {
      ...fileData,
      currencyRewardEvents: [...existingCurrencyEvents, newEvent],
    }
  } else {
    const newEvent: RewardEvent = {
      id: uuidv4(),
      userId,
      type: body.type,
      entityId: body.entityId,
      points: DEFAULT_REWARD_POINTS,
      timestamp: new Date(),
    }
    createdEventId = newEvent.id

    updatedFileData = {
      ...fileData,
      rewardEvents: [...existingPointEvents, newEvent],
    }
  }

  const writeSuccess = await withPerformanceLogging(
    () => safeWriteDataFile({ data: updatedFileData }),
    "write-reward-event",
    request.context,
    500,
  )

  if (!writeSuccess) {
    return createErrorResponse(
      "Failed to save reward event",
      "File writing failed",
      500,
      ApiErrorCode.DATA_FILE_WRITE_ERROR,
    )
  }

  if (body.currencyId) {
    logBusinessEvent(
      "currency_reward_event_created",
      {
        eventId: createdEventId,
        type: body.type,
        entityId: body.entityId,
        currencyId: body.currencyId,
        amount: body.amount ?? 0,
        totalEvents: updatedFileData.currencyRewardEvents?.length ?? 0,
      },
      request.context,
    )

    const response: CreateRewardEventResponse = {
      success: true,
      eventId: createdEventId,
      message: "Currency reward event created successfully",
    }
    return NextResponse.json<CreateRewardEventResponse>(response)
  }

  logBusinessEvent(
    "reward_event_created",
    {
      eventId: createdEventId,
      type: body.type,
      entityId: body.entityId,
      points: DEFAULT_REWARD_POINTS,
      totalEvents: updatedFileData.rewardEvents.length,
    },
    request.context,
  )

  const response: CreateRewardEventResponse = {
    success: true,
    eventId: createdEventId,
    message: "Reward event created successfully",
  }
  return NextResponse.json<CreateRewardEventResponse>(response)
}

export const POST = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(createRewardEvent, {
        endpoint: "/api/v1/rewards",
        module: "api-v1-rewards",
      }),
      { allowApiToken: true },
    ),
  ),
)

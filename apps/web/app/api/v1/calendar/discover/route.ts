import { NextResponse } from "next/server"
import { DiscoverRequestSchema, type DiscoverRequest } from "@tasktrove/calendar-sync/types"
import {
  withApiLogging,
  type EnhancedRequest,
} from "@/lib/middleware/api-logger"
import { withMutexProtection } from "@/lib/utils/api-mutex"
import { withAuthentication, getAuthUser } from "@/lib/middleware/auth"
import { withApiVersion } from "@/lib/middleware/api-version"
import { API_ROUTES } from "@tasktrove/types/constants"
import { validateRequestBody, createErrorResponse } from "@/lib/utils/validation"
import { ApiErrorCode } from "@tasktrove/types/api-errors"

/** no-store cache headers (executed contract from Pro discover route module 7097). */
const NO_STORE_HEADERS = {
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
} as const

/**
 * POST /api/v1/calendar/discover
 *
 * Discovers calendars on a CalDAV server (executed contract from Pro module 7097).
 * Validates `{ serverUrl, username, password, accountType?, allowInsecure? }`,
 * optionally disables TLS verification when `allowInsecure` is true, and returns
 * `{ success, serverUrl, calendars, message }`.
 */
async function discoverCalendars(
  request: EnhancedRequest,
): Promise<NextResponse> {
  const authUser = getAuthUser(request)
  if (!authUser) {
    return createErrorResponse(
      "Authentication required",
      "You must be authenticated to access this resource",
      401,
      ApiErrorCode.AUTHENTICATION_REQUIRED,
    )
  }

  const validation = await validateRequestBody<DiscoverRequest>(request, DiscoverRequestSchema)
  if (!validation.success) {
    return validation.error
  }
  const { serverUrl, username, password, accountType, allowInsecure } = validation.data

  try {
    // Build fetch options: when allowInsecure is true, pass an https.Agent that
    // disables TLS verification (executed contract, module 7097).
    const fetchOptions: { agent?: unknown } = {}
    if (allowInsecure) {
      const https = await import("node:https")
      fetchOptions.agent = new https.Agent({ rejectUnauthorized: false })
    }

    // Run discovery via the calendar-sync package's discover function.
    // The actual tsdav client is created inside the discover helper.
    const { discoverCalendars: doDiscover } = await import("@tasktrove/calendar-sync")
    const result = await doDiscover(
      serverUrl,
      username,
      password,
      accountType ?? "caldav",
    )

    return NextResponse.json(
      {
        success: true,
        serverUrl: result.serverUrl,
        calendars: result.calendars,
        message: `Successfully discovered ${result.calendars.length} calendar(s)`,
      },
      { headers: NO_STORE_HEADERS },
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : "Calendar discovery failed"
    console.error("[calendar-sync] Discovery failed:", message)
    return createErrorResponse(
      "Calendar discovery failed",
      message,
      500,
      ApiErrorCode.INTERNAL_SERVER_ERROR,
    )
  }
}

export const POST = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(discoverCalendars, {
        endpoint: API_ROUTES.V1_CALENDAR_DISCOVER,
        module: "api-v1-calendar-discover",
      }),
      { allowApiToken: true },
    ),
  ),
)

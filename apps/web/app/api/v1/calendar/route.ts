import { NextResponse } from "next/server"
import { getCalendarSyncState, getCalendarSyncStore, type SyncAccount, type SyncClient, createSyncClient } from "@tasktrove/calendar-sync"
import {
  withApiLogging,
  type EnhancedRequest,
} from "@/lib/middleware/api-logger"
import { withMutexProtection } from "@/lib/utils/api-mutex"
import { withAuthentication } from "@/lib/middleware/auth"
import { withApiVersion } from "@/lib/middleware/api-version"
import { API_ROUTES } from "@tasktrove/types/constants"
import { safeReadDataFile } from "@/lib/utils/safe-file-operations"

/** no-store cache headers (executed contract from Pro route module 65160). */
const NO_STORE_HEADERS = {
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
} as const

/**
 * GET /api/v1/calendar
 *
 * Returns the in-memory calendar sync state (executed `sq()`):
 * { calendars, objects, summary, lastSyncedAt }.
 *
 * The store is process-global and ephemeral — rebuilt by syncs (manual POST or
 * the scheduled calendar-refresh job). Remote CalDAV servers are the source of
 * truth; no calendar data is persisted to the data file.
 */
async function getCalendarState(
  request: EnhancedRequest,
): Promise<NextResponse> {
  const state = getCalendarSyncState()
  return NextResponse.json(state, { headers: NO_STORE_HEADERS })
}

export const GET = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(getCalendarState, {
        endpoint: API_ROUTES.V1_CALENDAR,
        module: "api-v1-calendar",
      }),
      { allowApiToken: true },
    ),
  ),
)

/**
 * POST /api/v1/calendar
 *
 * Runs a full calendar sync now (executed `GX()`): for each enabled connection
 * in settings.data.calendarSync, sync from the remote CalDAV server, update the
 * in-memory store, and return the new state with summary counters.
 *
 * Credentials come from settings.data.calendarSync[] (data file). On failure,
 * logs and returns 500 with the executed error shape.
 */
async function runCalendarSync(
  request: EnhancedRequest,
): Promise<NextResponse> {
  const store = getCalendarSyncStore()

  try {
    const dataFile = await safeReadDataFile()

    if (!dataFile) {
      return NextResponse.json(
        { error: "No calendar connections configured", message: "No calendars available" },
        { status: 400, headers: NO_STORE_HEADERS },
      )
    }

    const connections: Array<{
      id: string
      name: string
      serverUrl: string
      username: string
      password: string
      authMethod?: string
      defaultTimezone?: string
      allowInsecure?: boolean
      enabled?: boolean
    }> = dataFile.settings?.data?.calendarSync ?? []

    const enabledConnections = connections.filter((c) => c.enabled !== false)

    if (enabledConnections.length === 0) {
      return NextResponse.json(
        { error: "No calendar connections configured", message: "No calendars available" },
        { status: 400, headers: NO_STORE_HEADERS },
      )
    }

    for (const connection of enabledConnections) {
      try {
        console.log(
          `[calendar-sync] Syncing calendar "${connection.name}" (${connection.serverUrl})`,
        )

        // Create a real tsdav client for this connection
        const client = await createSyncClient({
          serverUrl: connection.serverUrl,
          username: connection.username,
          password: connection.password,
          authMethod: connection.authMethod,
          allowInsecure: connection.allowInsecure,
        })

        // Build the SyncAccount as expected by the service
        const account: SyncAccount = {
          account: {
            id: connection.id,
            username: connection.username,
            password: connection.password,
            enabled: true,
            source: connection.serverUrl,
          },
          source: connection.serverUrl,
          headers: {},
          client,
          defaultTimezone: connection.defaultTimezone ?? "UTC",
          userId: connection.id,
        }

        // Run the actual sync
        const summary = await store.service.syncFromRemote(account)
        store.lastSummary = summary
        store.lastSyncedAt = new Date().toISOString()

        console.log(
          `[calendar-sync] Sync complete for "${connection.name}": ${JSON.stringify(summary)}`,
        )
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error"
        console.error(
          `[calendar-sync] Sync failed for "${connection.name}":`,
          message,
        )
      }
    }

    const state = getCalendarSyncState()
    return NextResponse.json(state, { headers: NO_STORE_HEADERS })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Calendar sync failed"
    console.error("[calendar-sync] Manual sync failed:", message)
    return NextResponse.json(
      { error: "Calendar sync failed", message },
      { status: 500, headers: NO_STORE_HEADERS },
    )
  }
}

export const POST = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(runCalendarSync, {
        endpoint: API_ROUTES.V1_CALENDAR,
        module: "api-v1-calendar",
      }),
      { allowApiToken: true },
    ),
  ),
)

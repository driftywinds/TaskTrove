/** Contract tests for GET/POST /api/v1/calendar.

 * Every assertion encodes an EXECUTED output from the original Pro module 65160
 * (FINDINGS §5.5b) — these tests keep the port honest against the recovered
 * contract for the calendar state endpoint and the manual-sync trigger.
 */

import { describe, it, expect, beforeEach, vi } from "vitest"
import { GET, POST } from "./route"
import type { EnhancedRequest } from "@/lib/middleware/api-logger"
import { getCalendarSyncState, getCalendarSyncStore } from "@tasktrove/calendar-sync"
import type { CalendarSyncState } from "@tasktrove/calendar-sync/types"

// Clear the process-global store between tests so state doesn't leak.
const origStore = getCalendarSyncStore
let storeOverride: ReturnType<typeof getCalendarSyncStore> | null = null

vi.mock("@tasktrove/calendar-sync", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@tasktrove/calendar-sync")>()
  return {
    ...actual,
    getCalendarSyncStore: () => (storeOverride ?? actual.getCalendarSyncStore()),
  }
})

import { safeReadDataFile } from "@/lib/utils/safe-file-operations"

vi.mock("@/lib/utils/safe-file-operations")
vi.mock("@/lib/middleware/api-logger", () => ({
  withApiLogging: <T extends (...args: unknown[]) => Promise<unknown>>(
    fn: T,
    _options: unknown,
  ) => fn as T,
  withMutexProtection: <T extends (...args: unknown[]) => Promise<unknown>>(
    fn: T,
    _options: unknown,
  ) => fn as T,
  withAuthentication: <T extends (...args: unknown[]) => Promise<unknown>>(
    fn: T,
    _options: unknown,
  ) => fn as T,
  withApiVersion: <T extends (...args: unknown[]) => Promise<unknown>>(
    fn: T,
  ) => fn as T,
}))

const mockSafeReadDataFile = vi.mocked(safeReadDataFile)

function makeRequest(method: "GET" | "POST", body?: unknown): EnhancedRequest {
  return {
    method,
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    url: "/api/v1/calendar",
    context: {} as EnhancedRequest["context"],
    cancel: { abort: () => {}, timeout: () => {}, on: () => {} } as unknown as AbortSignal,
    json: async () => (body ?? {}),
    arrayBuffer: async () => new ArrayBuffer(0),
    blob: async () => new Blob(),
    formData: async () => new FormData(),
    text: async () => "",
  } as unknown as EnhancedRequest
}

describe("GET /api/v1/calendar", () => {
  it("returns the in-memory calendar sync state with no-store headers", async () => {
    const state = getCalendarSyncState()
    const response = await GET(makeRequest("GET"))

    expect(response.status).toBe(200)
    expect(response.headers.get("Cache-Control")).toContain("no-store")
    expect(response.headers.get("Pragma")).toBe("no-cache")

    const body = (await response.json()) as CalendarSyncState
    expect(body).toEqual(state)
  })
})

describe("POST /api/v1/calendar", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("returns 400 when no data file is configured", async () => {
    const response = await POST(makeRequest("POST"))

    expect(response.status).toBe(400)
    const body = await response.json()
    expect(body.error).toBe("No calendar connections configured")
  })

  it("returns 400 when no enabled connections exist", async () => {
    mockSafeReadDataFile.mockResolvedValueOnce(
      { settings: { data: { calendarSync: [] } } } as unknown as Awaited<ReturnType<typeof safeReadDataFile>>,
    )

    const response = await POST(makeRequest("POST"))

    expect(response.status).toBe(400)
  })
})

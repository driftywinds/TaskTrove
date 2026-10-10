/**
 * Tests for /api/v1/rewards (Pro rewards API contract).
 *
 * Covers the recovered Pro contract:
 * - GET returns both reward event lists with meta and no-store headers
 * - POST creates a points event (no currencyId) with the fixed points value
 * - POST creates a currency event (with currencyId + amount)
 * - POST validates WISHLIST_REDEEMED requires currencyId + amount
 * - POST uses the session user id, never a client-sent one
 */

import { describe, it, expect, beforeEach, vi } from "vitest"
import { NextRequest } from "next/server"
import { GET, POST } from "./route"
import { safeReadDataFile, safeWriteDataFile } from "@/lib/utils/safe-file-operations"
import { getAuthUser } from "@/lib/middleware/auth"
import { createUserId } from "@tasktrove/types/id"
import { createCurrencyId } from "@tasktrove/types/rewards"
import { DEFAULT_EMPTY_DATA_FILE } from "@tasktrove/types/defaults"
import type { DataFile } from "@tasktrove/types/data-file"
import type { RewardEvent, CurrencyRewardEvent } from "@tasktrove/types/rewards"

vi.mock("@/lib/utils/safe-file-operations", () => ({
  safeReadDataFile: vi.fn(),
  safeWriteDataFile: vi.fn(),
  safeReadUserFile: vi.fn(),
  safeWriteUserFile: vi.fn(),
}))

// Override the global auth-bypass mock with one that exposes the acting
// identity so session handling can be exercised per test.
vi.mock("@/lib/middleware/auth", () => ({
  withAuthentication: (handler: (...args: unknown[]) => unknown) => handler,
  getAuthUser: vi.fn(),
}))

vi.mock("@/lib/utils/logger", () => ({
  log: {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}))

const mockSafeReadDataFile = vi.mocked(safeReadDataFile)
const mockSafeWriteDataFile = vi.mocked(safeWriteDataFile)
const mockGetAuthUser = vi.mocked(getAuthUser)

const USER_ID = createUserId("11111111-1111-4111-8111-111111111111")
const TASK_ID = "44444444-4444-4444-8444-444444444444"
const CURRENCY_ID = createCurrencyId("00000000-0000-4000-8000-000000000000")

const pointEvent: RewardEvent = {
  id: "55555555-5555-4555-8555-555555555555",
  userId: USER_ID,
  type: "TASK_COMPLETED",
  entityId: TASK_ID,
  points: 10,
  timestamp: new Date("2024-06-01T12:00:00Z"),
}

const currencyEvent: CurrencyRewardEvent = {
  id: "66666666-6666-4666-8666-666666666666",
  userId: USER_ID,
  entityId: TASK_ID,
  type: "WISHLIST_REDEEMED",
  currencyId: CURRENCY_ID,
  amount: 50,
  timestamp: new Date("2024-06-01T12:00:00Z"),
}

function buildDataFile(overrides: Partial<DataFile> = {}): DataFile {
  return {
    ...DEFAULT_EMPTY_DATA_FILE,
    rewardEvents: [],
    currencyRewardEvents: [],
    ...overrides,
  }
}

function rewardsRequest(method: string, body?: unknown): NextRequest {
  return new NextRequest("http://localhost:3000/api/v1/rewards", {
    method,
    ...(body !== undefined
      ? { body: JSON.stringify(body), headers: { "Content-Type": "application/json" } }
      : {}),
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  mockSafeWriteDataFile.mockResolvedValue(true)
  mockGetAuthUser.mockReturnValue({ id: USER_ID, role: "admin" })
})

/** Returns the data payload passed to the most recent safeWriteDataFile call. */
function writtenData(): DataFile {
  const call = mockSafeWriteDataFile.mock.calls[0]?.[0]
  if (call?.data === undefined) {
    throw new Error("expected safeWriteDataFile to be called with data")
  }
  return call.data
}

describe("GET /api/v1/rewards", () => {
  it("returns both reward event lists with meta and no-store headers", async () => {
    mockSafeReadDataFile.mockResolvedValue(
      buildDataFile({ rewardEvents: [pointEvent], currencyRewardEvents: [currencyEvent] }),
    )

    const response = await GET(rewardsRequest("GET"))

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.rewardEvents).toHaveLength(1)
    expect(data.rewardEvents[0].points).toBe(10)
    expect(data.currencyRewardEvents).toHaveLength(1)
    expect(data.currencyRewardEvents[0].amount).toBe(50)
    expect(data.meta.count).toBe(2)
    expect(typeof data.meta.timestamp).toBe("string")
    expect(response.headers.get("Cache-Control")).toContain("no-store")
  })

  it("defaults currencyRewardEvents to an empty array", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile({ rewardEvents: [pointEvent] }))

    const response = await GET(rewardsRequest("GET"))

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.currencyRewardEvents).toEqual([])
    expect(data.meta.count).toBe(1)
  })

  it("returns 500 when the data file cannot be read", async () => {
    mockSafeReadDataFile.mockResolvedValue(undefined)

    const response = await GET(rewardsRequest("GET"))

    expect(response.status).toBe(500)
    const data = await response.json()
    expect(data.code).toBe("DATA_FILE_READ_ERROR")
  })
})

describe("POST /api/v1/rewards", () => {
  it("creates a points event with the fixed points value", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(
      rewardsRequest("POST", { type: "TASK_COMPLETED", entityId: TASK_ID }),
    )

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
    expect(data.eventId).toBeTruthy()
    expect(data.message).toBe("Reward event created successfully")

    expect(mockSafeWriteDataFile).toHaveBeenCalledTimes(1)
    const written = writtenData()
    expect(written.rewardEvents).toHaveLength(1)
    expect(written.rewardEvents[0]?.points).toBe(10)
    expect(written.rewardEvents[0]?.userId).toBe(USER_ID)
    expect(written.rewardEvents[0]?.type).toBe("TASK_COMPLETED")
  })

  it("creates a currency event when currencyId and amount are provided", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(
      rewardsRequest("POST", {
        type: "WISHLIST_REDEEMED",
        entityId: TASK_ID,
        currencyId: CURRENCY_ID,
        amount: 50,
      }),
    )

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
    expect(data.message).toBe("Currency reward event created successfully")

    const written = writtenData()
    expect(written.currencyRewardEvents).toHaveLength(1)
    expect(written.currencyRewardEvents?.[0]?.currencyId).toBe(CURRENCY_ID)
    expect(written.currencyRewardEvents?.[0]?.amount).toBe(50)
    expect(written.currencyRewardEvents?.[0]?.userId).toBe(USER_ID)
  })

  it("rejects WISHLIST_REDEEMED without currencyId", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(
      rewardsRequest("POST", { type: "WISHLIST_REDEEMED", entityId: TASK_ID }),
    )

    expect(response.status).toBe(400)
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("rejects currencyId without amount", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(
      rewardsRequest("POST", {
        type: "TASK_COMPLETED",
        entityId: TASK_ID,
        currencyId: CURRENCY_ID,
      }),
    )

    expect(response.status).toBe(400)
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("rejects an unknown event type", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(
      rewardsRequest("POST", { type: "NOT_A_REAL_TYPE", entityId: TASK_ID }),
    )

    expect(response.status).toBe(400)
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("returns 401 when the session user cannot be resolved", async () => {
    mockGetAuthUser.mockReturnValue(undefined)
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(
      rewardsRequest("POST", { type: "TASK_COMPLETED", entityId: TASK_ID }),
    )

    expect(response.status).toBe(401)
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("returns 500 when the data file cannot be read", async () => {
    mockSafeReadDataFile.mockResolvedValue(undefined)

    const response = await POST(
      rewardsRequest("POST", { type: "TASK_COMPLETED", entityId: TASK_ID }),
    )

    expect(response.status).toBe(500)
  })

  it("returns 500 when the write fails", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())
    mockSafeWriteDataFile.mockResolvedValue(false)

    const response = await POST(
      rewardsRequest("POST", { type: "TASK_COMPLETED", entityId: TASK_ID }),
    )

    expect(response.status).toBe(500)
    const data = await response.json()
    expect(data.code).toBe("DATA_FILE_WRITE_ERROR")
  })
})

import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, waitFor } from "@testing-library/react"
import { getDefaultStore } from "jotai"
import { createUserId } from "@tasktrove/types/id"
import { CurrentUserSync } from "./current-user-sync"
import { currentUserIdAtom } from "@tasktrove/atoms/data/base/atoms"

const mockUseSession = vi.fn()

vi.mock("next-auth/react", () => ({
  useSession: () => mockUseSession(),
}))

const store = getDefaultStore()

describe("CurrentUserSync", () => {
  beforeEach(() => {
    mockUseSession.mockReset()
    store.set(currentUserIdAtom, null)
  })

  it("sets the current user id from the session", async () => {
    mockUseSession.mockReturnValue({
      data: { user: { id: "11111111-1111-4111-8111-111111111111" } },
    })

    render(<CurrentUserSync />)

    await waitFor(() => {
      expect(store.get(currentUserIdAtom)).toBe("11111111-1111-4111-8111-111111111111")
    })
  })

  it("clears the current user id when there is no session", async () => {
    store.set(currentUserIdAtom, createUserId("22222222-2222-4222-8222-222222222222"))
    mockUseSession.mockReturnValue({ data: null })

    render(<CurrentUserSync />)

    await waitFor(() => {
      expect(store.get(currentUserIdAtom)).toBeNull()
    })
  })

  it("ignores a session id that is not a valid user id", async () => {
    mockUseSession.mockReturnValue({
      data: { user: { id: "not-a-uuid" } },
    })

    render(<CurrentUserSync />)

    await waitFor(() => {
      expect(store.get(currentUserIdAtom)).toBeNull()
    })
  })
})

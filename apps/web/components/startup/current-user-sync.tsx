"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useSetAtom } from "jotai"
import { currentUserIdAtom } from "@tasktrove/atoms/data/base/atoms"
import { UserIdSchema } from "@tasktrove/types/id"

/**
 * Bridges the NextAuth session into the atom store.
 *
 * The data layer resolves the "current user" from `currentUserIdAtom`, so
 * multi-user features (profile edits, assignees, "(You)" markers) follow the
 * logged-in session user instead of the first user in the data file.
 *
 * Mounted once inside SessionProvider + JotaiProvider (client-app.tsx).
 * When auth is disabled (no AUTH_SECRET) the session is empty, the atom stays
 * null, and the first data-file user acts as the current user (single-user
 * self-hosted default).
 */
export function CurrentUserSync() {
  const { data: session } = useSession()
  const setCurrentUserId = useSetAtom(currentUserIdAtom)

  const sessionId = session?.user?.id

  useEffect(() => {
    if (sessionId === undefined || sessionId === "") {
      setCurrentUserId(null)
      return
    }
    const parsed = UserIdSchema.safeParse(sessionId)
    setCurrentUserId(parsed.success ? parsed.data : null)
  }, [sessionId, setCurrentUserId])

  return null
}

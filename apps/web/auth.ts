import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import { verifyPassword } from "@tasktrove/utils"
import { getDataFileUsers } from "@tasktrove/types/data-file"
import type { User, UserRole } from "@tasktrove/types/core"
import { safeReadUserFile } from "@/lib/utils/safe-file-operations"

/**
 * Read the users list from the data file for login purposes.
 * Uses UserFileSchema (validates only the user field) to avoid full DataFile
 * validation during authentication.
 */
async function readUsersForAuth(): Promise<User[]> {
  try {
    const userData = await safeReadUserFile()
    if (!userData) {
      return []
    }
    return getDataFileUsers(userData)
  } catch (error) {
    console.error("Failed to read user data:", error)
    return []
  }
}

/**
 * Shared user-to-account mapping for all credential-based providers.
 * The returned `id` is the real user id from the data file (multi-user safe),
 * and `name` carries the username so JWT/session callbacks stay symmetric.
 */
function toAuthUser(user: User): { id: string; name: string; role: UserRole } {
  return { id: user.id, name: user.username, role: user.role }
}

const credentialsSchema = z.object({
  username: z.string().trim().optional(),
  password: z.string().min(1, "Password is required"),
})

const headerAuthSchema = z.object({
  remoteUser: z.string().trim().min(1),
})

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      id: "credentials",
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        try {
          const { username, password } = credentialsSchema.parse(credentials)

          const users = await readUsersForAuth()
          if (users.length === 0) {
            return null
          }

          let candidate: User
          if (username !== undefined && username !== "") {
            // Multi-user login: match by case-insensitive username
            const match = users.find(
              (user) => user.username.toLowerCase() === username.toLowerCase(),
            )
            if (!match) {
              return null
            }
            candidate = match
          } else {
            // Legacy single-user login without username: only valid when the
            // data file has exactly one user (preserves base behavior)
            const single = users.length === 1 ? users[0] : undefined
            if (!single) {
              return null
            }
            candidate = single
          }

          // verifyPassword returns true when both password and stored hash are
          // undefined (accounts with no password set are valid targets)
          if (verifyPassword(password, candidate.password)) {
            return toAuthUser(candidate)
          }

          return null
        } catch {
          return null
        }
      },
    }),
    /**
     * SSO header authentication (Pro feature).
     *
     * The reverse proxy in front of TaskTrove authenticates the user and sets
     * a trusted identity header (e.g. `Remote-User`); the proxy must strip
     * these headers from client traffic. The sign-in page passes the header
     * value as `remoteUser` and this provider maps it to an existing user.
     *
     * SSO identities must be provisioned by an admin beforehand; unknown
     * remote users are rejected.
     */
    Credentials({
      id: "header-auth",
      name: "header-auth",
      credentials: {
        remoteUser: {
          label: "Remote User",
          type: "text",
        },
      },
      async authorize(credentials) {
        try {
          const { remoteUser } = headerAuthSchema.parse(credentials)

          const users = await readUsersForAuth()
          const match = users.find(
            (user) => user.username.toLowerCase() === remoteUser.toLowerCase(),
          )
          if (!match) {
            console.error("[Header Auth] Unknown remote user:", remoteUser)
            return null
          }

          return toAuthUser(match)
        } catch {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- user is undefined on subsequent JWT callback invocations
      if (user && typeof user.id === "string" && user.id !== "") {
        token.id = user.id
        token.name = user.name
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (typeof token.id === "string") {
        session.user.id = token.id
      }
      if (token.role === "admin" || token.role === "user") {
        session.user.role = token.role
      }
      return session
    },
  },
  // when AUTH_SECRET is not set, disable auth
  secret: process.env.AUTH_SECRET || "auth-disabled",
})

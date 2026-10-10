/**
 * Authentication Middleware
 *
 * Provides authentication protection for API routes using NextAuth session-based auth
 * or Bearer token authentication.
 * Ensures only authenticated users can access protected resources.
 * Respects the AUTH_SECRET environment variable - if not set, authentication is bypassed.
 */

import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { ErrorResponse } from "@tasktrove/types/api-responses"
import { ApiErrorCode } from "@tasktrove/types/api-errors"
import type { UserRole } from "@tasktrove/types/core"
import type { EnhancedRequest } from "./api-logger"
import { safeReadDataFile } from "@/lib/utils/safe-file-operations"
import { getDataFileUsers } from "@tasktrove/types/data-file"
import { isAuthEnabled } from "@/lib/utils/env"

/**
 * Authenticated identity resolved by the auth middleware.
 * `id` identifies the acting user in the data file and `role` drives
 * server-side admin checks (never trust client-sent role claims).
 */
export interface AuthenticatedUser {
  id: string
  role: UserRole
}

/**
 * Checks if the provided bearer token matches any user's API token
 * @param token - Bearer token from Authorization header
 * @returns the matching user, or undefined when the token is invalid
 */
async function findUserByApiToken(token: string): Promise<AuthenticatedUser | undefined> {
  try {
    const dataFile = await safeReadDataFile()
    if (!dataFile) return undefined

    const users = getDataFileUsers(dataFile)
    const match = users.find((user) => user.apiToken !== undefined && token === user.apiToken)
    if (!match) return undefined
    return { id: match.id, role: match.role }
  } catch {
    return undefined
  }
}

/**
 * Resolves the acting user from the data file by id.
 * Re-reading the role from the data file on every request keeps privilege
 * changes (e.g. role revoked mid-session) effective immediately.
 */
async function findUserByIdWithRole(id: string): Promise<AuthenticatedUser | undefined> {
  try {
    const dataFile = await safeReadDataFile()
    if (!dataFile) return undefined

    const users = getDataFileUsers(dataFile)
    const match = users.find((user) => user.id === id)
    if (!match) return undefined
    return { id: match.id, role: match.role }
  } catch {
    return undefined
  }
}

/**
 * Returns the authenticated identity attached by `withAuthentication`.
 * Routes use this for role-based (admin) authorization checks.
 */
export function getAuthUser(request: EnhancedRequest): AuthenticatedUser | undefined {
  return request.context?.authUser
}

/**
 * Wraps an API route handler with authentication protection.
 * Supports two authentication methods:
 * 1. NextAuth session-based authentication (cookies)
 * 2. Bearer token authentication (Authorization header) - only for /api/v1 routes
 *
 * If AUTH_SECRET is not set, authentication is bypassed (development mode).
 *
 * @param handler - The API route handler to protect
 * @param options - Configuration options
 * @param options.allowApiToken - Whether to allow bearer token auth (default: false, true for v1 routes)
 * @returns A wrapped handler that enforces authentication
 *
 * @example
 * ```typescript
 * // Public API endpoint (v1) - allows bearer token
 * export const GET = withAuthentication(
 *   withApiLogging(handler, { endpoint: "/api/v1/tasks" }),
 *   { allowApiToken: true }
 * )
 *
 * // Private endpoint - session only
 * export const GET = withAuthentication(
 *   withApiLogging(handler, { endpoint: "/api/settings" })
 * )
 * ```
 */
export function withAuthentication<T>(
  handler: (request: EnhancedRequest) => Promise<NextResponse<T | ErrorResponse>>,
  options: { allowApiToken?: boolean } = {},
): (request: EnhancedRequest) => Promise<NextResponse<T | ErrorResponse>> {
  return async (request: EnhancedRequest) => {
    // Check if authentication is enabled via AUTH_SECRET environment variable
    // This matches the behavior in proxy.ts
    // If authentication is disabled (no AUTH_SECRET), bypass auth check.
    // The acting identity falls back to the first data-file user, which is the
    // single-user self-hosted scenario (role defaults to "admin").
    if (!isAuthEnabled()) {
      request.context = Object.assign({}, request.context, {
        authUser: await resolveAuthDisabledUser(),
      })
      return handler(request)
    }

    // Check for bearer token authentication first (only if allowed)
    if (options.allowApiToken) {
      const authHeader = request.headers.get("Authorization")
      if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.slice(7) // Remove "Bearer " prefix
        const tokenUser = await findUserByApiToken(token)
        if (tokenUser) {
          // Token is valid, attach acting identity and proceed with handler
          request.context = Object.assign({}, request.context, { authUser: tokenUser })
          return handler(request)
        }
        // Invalid token - fall through to return auth error
      }
    }

    // Fall back to session-based authentication
    const session = await auth()

    // Check if session exists and has a valid user
    if (!session || !session.user || typeof session.user.id !== "string") {
      const errorResponse: ErrorResponse = {
        code: ApiErrorCode.AUTHENTICATION_REQUIRED,
        error: "Authentication required",
        message: "You must be authenticated to access this resource",
      }
      return NextResponse.json<ErrorResponse>(errorResponse, { status: 401 })
    }

    // Resolve the acting user (id + role) from the data file so privilege
    // changes take effect without re-login
    const authUser = await findUserByIdWithRole(session.user.id)
    if (!authUser) {
      const errorResponse: ErrorResponse = {
        code: ApiErrorCode.AUTHENTICATION_REQUIRED,
        error: "Authentication required",
        message: "You must be authenticated to access this resource",
      }
      return NextResponse.json<ErrorResponse>(errorResponse, { status: 401 })
    }

    request.context = Object.assign({}, request.context, { authUser })

    // Session is valid, proceed with handler
    return handler(request)
  }
}

/**
 * Builds the acting identity used when authentication is disabled.
 * The first user in the data file acts with their stored role; if the file
 * cannot be read, an admin identity is assumed (single-user default schema).
 */
async function resolveAuthDisabledUser(): Promise<AuthenticatedUser> {
  try {
    const dataFile = await safeReadDataFile()
    if (dataFile) {
      const [firstUser] = getDataFileUsers(dataFile)
      if (firstUser) {
        return { id: firstUser.id, role: firstUser.role }
      }
    }
  } catch {
    // fall through to admin default
  }
  return { id: "", role: "admin" }
}

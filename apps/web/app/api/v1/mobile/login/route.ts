import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { MobileLoginRequestSchema } from "@tasktrove/types/api-requests"
import type { MobileLoginResponse, ErrorResponse } from "@tasktrove/types/api-responses"
import { ApiErrorCode } from "@tasktrove/types/api-errors"
import { getDataFileUsers } from "@tasktrove/types/data-file"
import { verifyPassword } from "@tasktrove/utils"
import { encode } from "next-auth/jwt"
import { safeReadDataFile } from "@/lib/utils/safe-file-operations"

/**
 * POST /api/v1/mobile/login
 *
 * Mobile app session login (Pro contract recovered from the bundle):
 * - 500 when AUTH_SECRET is not configured
 * - 400 when the body is not a valid { username, password } object
 * - 401 when credentials do not match any user
 * - 200 with a 7-day JWT and the user identity on success
 *
 * Response shape: `{ token, user: { id, username } }`
 * Token payload: `{ id, sub, username }` signed with AUTH_SECRET (HS512).
 */

/** 7 days in seconds (Pro maxAge constant) */
const MOBILE_SESSION_MAX_AGE_SECONDS = 604800

/**
 * Salt used for the mobile token (cookie-less JWT). Kept distinct from the
 * session cookie salt to avoid cross-usage; the signature security comes from
 * AUTH_SECRET.
 */
const MOBILE_LOGIN_SALT = "tasktrove-mobile-login"

function errorResponse(
  code: ApiErrorCode,
  error: string,
  message: string,
  status: number,
): NextResponse<ErrorResponse> {
  return NextResponse.json<ErrorResponse>({ code, error, message }, { status })
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<MobileLoginResponse | ErrorResponse>> {
  const secret = process.env.AUTH_SECRET
  if (!secret) {
    return errorResponse(
      ApiErrorCode.AUTHENTICATION_REQUIRED,
      "Auth secret missing",
      "Auth secret is required to generate session tokens",
      500,
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    body = null
  }

  const parsed = MobileLoginRequestSchema.safeParse(body)
  if (!parsed.success) {
    return errorResponse(
      ApiErrorCode.INVALID_REQUEST_BODY,
      "Invalid request",
      "Username and password are required",
      400,
    )
  }

  const { username, password } = parsed.data

  const dataFile = await safeReadDataFile()
  if (!dataFile) {
    return errorResponse(
      ApiErrorCode.DATA_FILE_READ_ERROR,
      "Data file error",
      "Failed to read data file",
      500,
    )
  }

  const users = getDataFileUsers(dataFile)
  const user = users.find(
    (candidate) => candidate.username.toLowerCase() === username.toLowerCase(),
  )

  if (!user || !verifyPassword(password, user.password)) {
    return errorResponse(
      ApiErrorCode.AUTHENTICATION_FAILED,
      "Invalid credentials",
      "Username or password is incorrect",
      401,
    )
  }

  const token = await encode({
    secret,
    token: {
      id: user.id,
      sub: user.id,
      username: user.username,
    },
    maxAge: MOBILE_SESSION_MAX_AGE_SECONDS,
    salt: MOBILE_LOGIN_SALT,
  })

  const response: MobileLoginResponse = {
    token,
    user: {
      id: user.id,
      username: user.username,
    },
  }

  return NextResponse.json<MobileLoginResponse>(response, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  })
}

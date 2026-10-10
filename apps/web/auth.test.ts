import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { createUserId } from "@tasktrove/types/id"
import { DEFAULT_UUID } from "@tasktrove/constants"

type CapturedCallbacks = {
  jwt?: (params: {
    token: Record<string, unknown>
    user?: { id?: string }
  }) => Promise<Record<string, unknown> | null>
  session?: (params: {
    session: { user: { id?: string } }
    token: { id?: unknown }
  }) => Promise<{ user: { id?: string } } | null>
}

type CapturedAuthConfig = {
  trustHost?: boolean
  pages?: { signIn?: string }
  session?: { strategy?: string }
  secret?: string
  callbacks?: CapturedCallbacks
}

type CapturedCredentialsProvider = {
  id?: string
  authorize: (credentials: unknown) => Promise<unknown>
}

let capturedOptions: CapturedAuthConfig | undefined
let capturedProviders: CapturedCredentialsProvider[] = []

const handlers = {
  GET: vi.fn(),
  POST: vi.fn(),
}
const signIn = vi.fn()
const signOut = vi.fn()
const auth = vi.fn()

const nextAuthMock = vi.fn((options: CapturedAuthConfig) => {
  capturedOptions = options
  return { handlers, signIn, signOut, auth }
})

vi.mock("next-auth", () => ({
  default: nextAuthMock,
}))

vi.mock("next-auth/providers/credentials", () => ({
  default: (config: CapturedCredentialsProvider) => {
    capturedProviders.push(config)
    return {
      id: config.id ?? "credentials",
      type: "credentials",
      ...config,
    }
  },
}))

vi.mock("@tasktrove/utils", () => ({
  verifyPassword: vi.fn(),
}))

vi.mock("@/lib/utils/safe-file-operations", () => ({
  safeReadUserFile: vi.fn(),
}))

// Unmock the auth module to test the real NextAuth configuration.
vi.unmock("@/auth")

const getAuthorize = (providerId = "credentials") => {
  const provider = capturedProviders.find((entry) => entry.id === providerId)
  if (!provider) {
    throw new Error(`Expected ${providerId} credentials provider to be configured`)
  }
  return provider.authorize
}

const getCallbacks = () => {
  if (!capturedOptions?.callbacks) {
    throw new Error("Expected NextAuth callbacks to be configured")
  }
  return capturedOptions.callbacks
}

const loadAuthModule = async (authSecret?: string) => {
  if (authSecret === undefined) {
    delete process.env.AUTH_SECRET
  } else {
    process.env.AUTH_SECRET = authSecret
  }

  vi.resetModules()
  const authModule = await import("./auth")
  const { verifyPassword } = await import("@tasktrove/utils")
  const { safeReadUserFile } = await import("@/lib/utils/safe-file-operations")

  return {
    authModule,
    verifyPassword: vi.mocked(verifyPassword),
    safeReadUserFile: vi.mocked(safeReadUserFile),
  }
}

describe("auth module", () => {
  let originalAuthSecret: string | undefined

  beforeEach(() => {
    vi.clearAllMocks()
    capturedOptions = undefined
    capturedProviders = []
    originalAuthSecret = process.env.AUTH_SECRET
  })

  afterEach(() => {
    if (originalAuthSecret !== undefined) {
      process.env.AUTH_SECRET = originalAuthSecret
    } else {
      delete process.env.AUTH_SECRET
    }
  })

  it("exposes NextAuth handlers and config", async () => {
    const { authModule } = await loadAuthModule("test-secret")

    expect(nextAuthMock).toHaveBeenCalledTimes(1)
    expect(capturedOptions).toBeDefined()

    expect(capturedOptions?.trustHost).toBe(true)
    expect(capturedOptions?.pages).toEqual({ signIn: "/signin" })
    expect(capturedOptions?.session).toEqual({ strategy: "jwt" })
    expect(capturedOptions?.secret).toBe("test-secret")

    expect(authModule.handlers).toBe(handlers)
    expect(authModule.signIn).toBe(signIn)
    expect(authModule.signOut).toBe(signOut)
    expect(authModule.auth).toBe(auth)
  })

  it("falls back to auth-disabled when AUTH_SECRET is missing", async () => {
    await loadAuthModule(undefined)

    expect(capturedOptions?.secret).toBe("auth-disabled")
  })

  it("authorizes with valid password and returns the real user identity", async () => {
    const { verifyPassword, safeReadUserFile } = await loadAuthModule("test-secret")

    safeReadUserFile.mockResolvedValue({
      user: {
        id: createUserId(DEFAULT_UUID),
        username: "Test User",
        password: "hashed",
        role: "admin",
      },
    })
    verifyPassword.mockReturnValue(true)

    const authorize = getAuthorize()
    const result = await authorize({ password: "correct" })

    expect(verifyPassword).toHaveBeenCalledWith("correct", "hashed")
    expect(result).toEqual({ id: DEFAULT_UUID, name: "Test User", role: "admin" })
  })

  it("returns the data-file user id (not a static id) for base auth", async () => {
    const { verifyPassword, safeReadUserFile } = await loadAuthModule("test-secret")

    safeReadUserFile.mockResolvedValue({
      user: {
        id: createUserId("f47ac10b-58cc-4372-a567-0e02b2c3d479"),
        username: "Another User",
        password: "hashed",
        role: "user",
      },
    })
    verifyPassword.mockReturnValue(true)

    const authorize = getAuthorize()
    const result = await authorize({ password: "correct" })

    expect(result).toEqual({
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      name: "Another User",
      role: "user",
    })
  })

  it("multi-user login matches by case-insensitive username", async () => {
    const { verifyPassword, safeReadUserFile } = await loadAuthModule("test-secret")

    safeReadUserFile.mockResolvedValue({
      user: [
        {
          id: createUserId("11111111-1111-4111-8111-111111111111"),
          username: "alice",
          password: "hashed-alice",
          role: "admin",
        },
        {
          id: createUserId("22222222-2222-4222-8222-222222222222"),
          username: "bob",
          password: "hashed-bob",
          role: "user",
        },
      ],
    })
    verifyPassword.mockImplementation(
      (password: string | undefined, hash: string | undefined) =>
        hash === `hashed-${String(password)}`,
    )

    const authorize = getAuthorize()

    const alice = await authorize({ username: "ALICE", password: "alice" })
    expect(alice).toEqual({
      id: "11111111-1111-4111-8111-111111111111",
      name: "alice",
      role: "admin",
    })
    expect(verifyPassword).toHaveBeenCalledWith("alice", "hashed-alice")

    const bob = await authorize({ username: "bob", password: "bob" })
    expect(bob).toEqual({
      id: "22222222-2222-4222-8222-222222222222",
      name: "bob",
      role: "user",
    })

    const wrongPassword = await authorize({ username: "bob", password: "nope" })
    expect(wrongPassword).toBeNull()

    const unknownUser = await authorize({ username: "carol", password: "x" })
    expect(unknownUser).toBeNull()
  })

  it("requires a username when the data file has multiple users", async () => {
    const { verifyPassword, safeReadUserFile } = await loadAuthModule("test-secret")

    safeReadUserFile.mockResolvedValue({
      user: [
        {
          id: createUserId("11111111-1111-4111-8111-111111111111"),
          username: "alice",
          password: "hashed",
          role: "admin",
        },
        {
          id: createUserId("22222222-2222-4222-8222-222222222222"),
          username: "bob",
          password: "hashed",
          role: "user",
        },
      ],
    })
    verifyPassword.mockReturnValue(true)

    const authorize = getAuthorize()
    const result = await authorize({ password: "correct" })

    expect(result).toBeNull()
    expect(verifyPassword).not.toHaveBeenCalled()
  })

  it("header-auth provider signs in a provisioned remote user", async () => {
    const { verifyPassword, safeReadUserFile } = await loadAuthModule("test-secret")

    safeReadUserFile.mockResolvedValue({
      user: [
        {
          id: createUserId("33333333-3333-4333-8333-333333333333"),
          username: "sso-user",
          password: "",
          role: "admin",
        },
      ],
    })
    verifyPassword.mockReturnValue(true)

    const authorizeHeaderAuth = getAuthorize("header-auth")

    const known = await authorizeHeaderAuth({ remoteUser: "sso-user" })
    expect(known).toEqual({
      id: "33333333-3333-4333-8333-333333333333",
      name: "sso-user",
      role: "admin",
    })

    const unknown = await authorizeHeaderAuth({ remoteUser: "intruder" })
    expect(unknown).toBeNull()
  })

  it("rejects when password is invalid", async () => {
    const { verifyPassword, safeReadUserFile } = await loadAuthModule("test-secret")

    safeReadUserFile.mockResolvedValue({
      user: {
        id: createUserId(DEFAULT_UUID),
        username: "Test User",
        password: "hashed",
        role: "admin",
      },
    })
    verifyPassword.mockReturnValue(false)

    const authorize = getAuthorize()
    const result = await authorize({ password: "wrong" })

    expect(result).toBeNull()
  })

  it("rejects when user data is unavailable", async () => {
    const { verifyPassword, safeReadUserFile } = await loadAuthModule("test-secret")

    safeReadUserFile.mockResolvedValue(undefined)

    const authorize = getAuthorize()
    const result = await authorize({ password: "any" })

    expect(result).toBeNull()
    expect(verifyPassword).not.toHaveBeenCalled()
  })

  it("rejects when credentials are invalid", async () => {
    const { safeReadUserFile } = await loadAuthModule("test-secret")

    const authorize = getAuthorize()
    const result = await authorize(undefined)

    expect(result).toBeNull()
    expect(safeReadUserFile).not.toHaveBeenCalled()
  })

  it("handles jwt callback when user is missing", async () => {
    await loadAuthModule("test-secret")

    const callbacks = getCallbacks()
    if (!callbacks.jwt) {
      throw new Error("Expected jwt callback to be configured")
    }

    const token: Record<string, unknown> = {}
    await callbacks.jwt({ token, user: undefined })

    expect(token).not.toHaveProperty("id")
  })

  it("sets token id and session user id on login", async () => {
    await loadAuthModule("test-secret")

    const callbacks = getCallbacks()
    if (!callbacks.jwt || !callbacks.session) {
      throw new Error("Expected jwt and session callbacks to be configured")
    }

    const token: Record<string, unknown> = {}
    await callbacks.jwt({ token, user: { id: "1" } })

    const session: { user: { id?: string } } = { user: {} }
    await callbacks.session({ session, token: { id: "1" } })

    expect(token.id).toBe("1")
    expect(session.user.id).toBe("1")
  })

  it("does not set session id when token id is not a string", async () => {
    await loadAuthModule("test-secret")

    const callbacks = getCallbacks()
    if (!callbacks.session) {
      throw new Error("Expected session callback to be configured")
    }

    const session: { user: { id?: string } } = { user: {} }
    await callbacks.session({ session, token: { id: 123 } })

    expect(session.user.id).toBeUndefined()
  })
})

import type { UserRole } from "@tasktrove/types/core"
import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user?: DefaultSession["user"] & {
      id?: string
      role?: UserRole
    }
  }

  interface User {
    role?: UserRole
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    role?: UserRole
  }
}

export {}

import { describe, it, expect } from "vitest"
import { render, screen } from "@/test-utils"
import { RoleBadge } from "./role-badge"
import type { User } from "@tasktrove/types/core"
import { createUserId } from "@tasktrove/types/id"

const USER_ID = createUserId("11111111-1111-4111-8111-111111111111")

describe("RoleBadge (recovered Pro contract)", () => {
  it("renders an outline Admin badge for admins", () => {
    const admin: User = { id: USER_ID, username: "admin", password: "x", role: "admin" }
    render(<RoleBadge user={admin} />)

    expect(screen.getByText("Admin")).toBeInTheDocument()
  })

  it("renders nothing for regular users", () => {
    const user: User = { id: USER_ID, username: "user", password: "x", role: "user" }
    const { container } = render(<RoleBadge user={user} />)

    expect(container).toBeEmptyDOMElement()
  })
})

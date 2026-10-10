import { Badge } from "@/components/ui/badge"
import type { User } from "@tasktrove/types/core"

interface RoleBadgeProps {
  user: User
}

/**
 * Admin role badge shown next to the username in the nav user menu (Pro
 * `RoleBadge`, recovered contract): an outline "Admin" badge for admins;
 * regular users render nothing.
 */
export function RoleBadge({ user }: RoleBadgeProps) {
  if (user.role !== "admin") {
    return null
  }

  return (
    <Badge variant="outline" className="ml-2 py-0">
      Admin
    </Badge>
  )
}

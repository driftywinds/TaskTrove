"use client"

import { useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { Check, Globe, UserCheck, UserPlus, X } from "lucide-react"
import { usersAtom, userAtom } from "@tasktrove/atoms/data/base/atoms"
import {
  addProjectMemberAtom,
  makeProjectPublicAtom,
  removeProjectMemberAtom,
  transferProjectOwnershipAtom,
} from "@tasktrove/atoms/core/projects"
import { isProjectOwner } from "@tasktrove/utils/project-permissions"
import type { Project, User } from "@tasktrove/types/core"
import { UserIdSchema } from "@tasktrove/types/id"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UserAvatar } from "@/components/ui/custom/user-avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useTranslation } from "@tasktrove/i18n"

interface ProjectMembersDialogProps {
  project: Project
  open: boolean
  onOpenChange: (open: boolean) => void
}

/**
 * Project members management (Pro `ProjectMembersDialog`, recovered contract).
 *
 * - Owner is `members[0]`; a project without members is public.
 * - Any member (or everyone, when public) can add members.
 * - Any member sees the Actions column; only the owner can transfer
 *   ownership; members can remove non-owners, anyone can leave (except the
 *   owner).
 * - The owner gets the "Make public" panel; public projects show the notice.
 */
export function ProjectMembersDialog({ project, open, onOpenChange }: ProjectMembersDialogProps) {
  const { t } = useTranslation("task")
  const users = useAtomValue(usersAtom)
  const currentUser = useAtomValue(userAtom)
  const addMember = useSetAtom(addProjectMemberAtom)
  const removeMember = useSetAtom(removeProjectMemberAtom)
  const transferOwnership = useSetAtom(transferProjectOwnershipAtom)
  const makeProjectPublic = useSetAtom(makeProjectPublicAtom)

  const [selectedUserId, setSelectedUserId] = useState<User["id"] | null>(null)
  const [isAdding, setIsAdding] = useState(false)

  const members = project.members ?? []
  const isMember = members.includes(currentUser.id)
  const isOwner = isProjectOwner(project, currentUser.id)
  const canAdd = members.length === 0 || isMember

  const resolvedMembers = members
    .map((memberId) => users.find((user) => user.id === memberId))
    .filter((user): user is NonNullable<typeof user> => Boolean(user))
  const addableUsers = users.filter((user) => !members.includes(user.id))

  const handleAdd = async () => {
    if (!selectedUserId) return
    setIsAdding(true)
    try {
      await addMember({ projectId: project.id, userId: selectedUserId })
      setSelectedUserId(null)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{t("project.members.title", "Members")}</DialogTitle>
          <DialogDescription className="sr-only">
            {t("project.members.description", "Manage who can view and edit this project.")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Add member row */}
          {canAdd && addableUsers.length > 0 && (
            <div className="flex gap-2">
              <Select
                value={selectedUserId ?? ""}
                onValueChange={(value) => {
                  const parsed = UserIdSchema.safeParse(value)
                  if (parsed.success) setSelectedUserId(parsed.data)
                }}
              >
                <SelectTrigger className="flex-1">
                  <SelectValue
                    placeholder={t("project.members.addPlaceholder", "Select user to add...")}
                  />
                </SelectTrigger>
                <SelectContent>
                  {addableUsers.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      <div className="flex items-center gap-2">
                        <UserAvatar
                          username={user.username}
                          avatar={user.avatar}
                          size="sm"
                          showInitials={true}
                        />
                        <span>{user.username}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                onClick={() => void handleAdd()}
                disabled={!selectedUserId || isAdding}
                size="sm"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                {t("project.members.addMember", "Add Member")}
              </Button>
            </div>
          )}

          {/* Members table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("project.members.user", "User")}</TableHead>
                  <TableHead>{t("project.members.username", "Username")}</TableHead>
                  <TableHead>{t("project.members.role", "Role")}</TableHead>
                  {isMember && (
                    <TableHead className="text-right">
                      {t("project.members.actions", "Actions")}
                    </TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {resolvedMembers.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={isMember ? 4 : 3}
                      className="text-center py-8 text-muted-foreground"
                    >
                      {t("project.members.empty", "No members in this project")}
                    </TableCell>
                  </TableRow>
                ) : (
                  resolvedMembers.map((member, index) => {
                    const ownerRow = index === 0
                    const self = member.id === currentUser.id
                    return (
                      <TableRow key={member.id}>
                        <TableCell>
                          <UserAvatar
                            username={member.username}
                            avatar={member.avatar}
                            size="md"
                            showInitials={true}
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {member.username}
                          {self && (
                            <span className="ml-2 text-xs text-muted-foreground">
                              {t("project.members.you", "(You)")}
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          {ownerRow ? (
                            <Badge variant="default" className="gap-1">
                              <Check className="h-3 w-3" />
                              {t("project.members.owner", "Owner")}
                            </Badge>
                          ) : (
                            <Badge variant="outline">{t("project.members.member", "Member")}</Badge>
                          )}
                        </TableCell>
                        {isMember && (
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              {!ownerRow && isOwner && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    void transferOwnership({
                                      projectId: project.id,
                                      userId: member.id,
                                    })
                                  }
                                  title={t("project.members.makeOwner", "Make owner")}
                                >
                                  <UserCheck className="h-4 w-4" />
                                </Button>
                              )}
                              {!ownerRow && (isOwner || self) && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    void removeMember({
                                      projectId: project.id,
                                      userId: member.id,
                                    })
                                  }
                                  title={
                                    self
                                      ? t("project.members.leaveProject", "Leave project")
                                      : t("project.members.removeMember", "Remove member")
                                  }
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        )}
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </div>

          {/* Public / make-public panel */}
          {members.length === 0 ? (
            <div className="rounded-lg border border-dashed p-4 bg-muted/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span>
                  {t(
                    "project.members.publicNotice",
                    "This project is public. Add members to make it private.",
                  )}
                </span>
              </div>
            </div>
          ) : (
            isOwner && (
              <div className="rounded-lg border border-dashed p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {t("project.members.makePublicTitle", "Make project public")}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t(
                        "project.members.makePublicDescription",
                        "Remove all members and make this project accessible to everyone. Anyone can view, but only members can edit.",
                      )}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      void makeProjectPublic({
                        projectId: project.id,
                        userId: currentUser.id,
                      })
                    }
                    className="ml-4"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {t("project.members.makePublic", "Make Public")}
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

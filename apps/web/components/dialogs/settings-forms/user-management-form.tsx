"use client"

import { useMemo, useState } from "react"
import type { FormEvent } from "react"
import { useAtomValue } from "jotai"
import { Pencil, Plus, ShieldCheck, Trash2, Users } from "lucide-react"
import { useTranslation } from "@tasktrove/i18n"
import { projectsAtom, tasksAtom, userAtom, usersAtom } from "@tasktrove/atoms/data/base/atoms"
import {
  createUserMutationAtom,
  deleteUserMutationAtom,
  updateUserMutationAtom,
} from "@tasktrove/atoms/mutations/user"
import { DEFAULT_MAX_USERS } from "@tasktrove/constants"
import type { UpdateUserRequest } from "@tasktrove/types/api-requests"
import type { User, UserRole } from "@tasktrove/types/core"
import { SettingsCard } from "@/components/ui/custom/settings-card"
import { UserAvatar } from "@/components/ui/custom/user-avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

type TFunction = ReturnType<typeof useTranslation>["t"]

type UserDialogState =
  | { mode: "add" }
  | { mode: "edit"; user: User }
  | { mode: "delete"; user: User }
  | null

interface UserFormValues {
  username: string
  password: string
  role: UserRole
}

function RoleBadge({ role, t }: { role: UserRole; t: TFunction }) {
  return (
    <Badge variant={role === "admin" ? "default" : "secondary"}>
      {role === "admin" && <ShieldCheck className="mr-1 size-3" />}
      {t(`usersManagement.roles.${role}`, role === "admin" ? "Admin" : "User")}
    </Badge>
  )
}

function RoleSelect({
  value,
  onChange,
  id,
}: {
  value: UserRole
  onChange: (role: UserRole) => void
  id: string
}) {
  const handleValueChange = (next: string) => {
    if (next === "admin" || next === "user") {
      onChange(next)
    }
  }

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger id={id} className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  )
}

type UserFormDialogProps =
  | {
      mode: "add"
      currentUser: User
      onCreate: (values: UserFormValues) => Promise<void>
      onClose: () => void
      t: TFunction
    }
  | {
      mode: "edit"
      user: User
      currentUser: User
      onUpdate: (target: User, values: UserFormValues) => Promise<void>
      onClose: () => void
      t: TFunction
    }

function UserFormDialog(props: UserFormDialogProps) {
  const { mode, currentUser, onClose, t } = props
  const isEdit = mode === "edit"
  const user = isEdit ? props.user : undefined
  // The acting user's own role can only be changed by another admin
  const isSelf = isEdit && props.user.id === currentUser.id

  const [username, setUsername] = useState(isEdit && user ? user.username : "")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<UserRole>(isEdit && user ? user.role : "user")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedUsername = username.trim()
    if (trimmedUsername.length === 0) {
      setError(t("usersManagement.errors.usernameRequired", "Username is required"))
      return
    }
    if (!isEdit && password.length === 0) {
      setError(t("usersManagement.errors.passwordRequired", "Password is required"))
      return
    }

    setError(null)
    setSubmitting(true)
    try {
      const values: UserFormValues = { username: trimmedUsername, password, role }
      if (props.mode === "edit") {
        await props.onUpdate(props.user, values)
      } else {
        await props.onCreate(values)
      }
    } catch {
      // Errors are surfaced by the mutation factory's toast; keep the dialog
      // open so the input can be corrected.
      setSubmitting(false)
    }
  }

  return (
    <Dialog open onOpenChange={(open) => (!open ? onClose() : undefined)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEdit
              ? t("usersManagement.editDialog.title", "Edit user")
              : t("usersManagement.addDialog.title", "Add user")}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? t(
                  "usersManagement.editDialog.description",
                  "Update the username, password, or role for this user.",
                )
              : t(
                  "usersManagement.addDialog.description",
                  "Create a new user account for this TaskTrove instance.",
                )}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="user-management-username">
              {t("usersManagement.fields.username", "Username")}
            </Label>
            <Input
              id="user-management-username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder={t("usersManagement.fields.usernamePlaceholder", "Enter username")}
              autoComplete="off"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="user-management-password">
              {t("usersManagement.fields.password", "Password")}
            </Label>
            <Input
              id="user-management-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={
                isEdit
                  ? t(
                      "usersManagement.fields.passwordKeepPlaceholder",
                      "Leave blank to keep current password",
                    )
                  : t("usersManagement.fields.passwordPlaceholder", "Enter password")
              }
              autoComplete="new-password"
            />
          </div>

          {!isSelf && (
            <div className="space-y-2">
              <Label htmlFor="user-management-role">
                {t("usersManagement.fields.role", "Role")}
              </Label>
              <RoleSelect id="user-management-role" value={role} onChange={setRole} />
              <p className="text-xs text-muted-foreground">
                {t("usersManagement.fields.roleHint", "Admins can manage users and permissions")}
              </p>
            </div>
          )}

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              {t("usersManagement.actions.cancel", "Cancel")}
            </Button>
            <Button type="submit" disabled={submitting}>
              {isEdit
                ? t("usersManagement.actions.save", "Save changes")
                : t("usersManagement.actions.create", "Create user")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function DeleteUserDialog({
  user,
  onConfirm,
  onClose,
  t,
}: {
  user: User
  onConfirm: (target: User) => Promise<void>
  onClose: () => void
  t: TFunction
}) {
  const [submitting, setSubmitting] = useState(false)

  const handleConfirm = async () => {
    setSubmitting(true)
    try {
      await onConfirm(user)
    } catch {
      // Errors are surfaced by the mutation factory's toast
      setSubmitting(false)
    }
  }

  return (
    <Dialog open onOpenChange={(open) => (!open ? onClose() : undefined)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("usersManagement.deleteDialog.title", "Delete user")}</DialogTitle>
          <DialogDescription>
            {t(
              "usersManagement.deleteDialog.description",
              "Tasks, comments, and assignments belonging to this user will be cleaned up. This cannot be undone.",
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-2">
          <UserAvatar username={user.username} avatar={user.avatar} size="sm" />
          <span className="text-sm font-medium">{user.username}</span>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            {t("usersManagement.actions.cancel", "Cancel")}
          </Button>
          <Button variant="destructive" onClick={handleConfirm} disabled={submitting}>
            {t("usersManagement.actions.deleteConfirm", "Delete user")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

/**
 * Settings → Users (Pro multi-user management)
 *
 * Lists every user with role, task, and project counts; admins can add,
 * edit, and delete users via the /api/v1/user mutations. Non-admins get a
 * read-only view. Self-service profile edits (username, password, avatar)
 * live in the General settings profile section and the user profile dialog.
 */
export function UserManagementForm() {
  const { t } = useTranslation("settings")
  const users = useAtomValue(usersAtom)
  const currentUser = useAtomValue(userAtom)
  const tasks = useAtomValue(tasksAtom)
  const projects = useAtomValue(projectsAtom)
  const createUser = useAtomValue(createUserMutationAtom)
  const updateUser = useAtomValue(updateUserMutationAtom)
  const deleteUser = useAtomValue(deleteUserMutationAtom)

  const [dialog, setDialog] = useState<UserDialogState>(null)

  const isAdmin = currentUser.role === "admin"
  const atLimit = users.length >= DEFAULT_MAX_USERS

  const taskCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const task of tasks) {
      const involved = new Set<string>()
      if (task.ownerId) {
        involved.add(task.ownerId)
      }
      for (const assignee of task.assignees ?? []) {
        involved.add(assignee)
      }
      for (const id of involved) {
        counts.set(id, (counts.get(id) ?? 0) + 1)
      }
    }
    return counts
  }, [tasks])

  const projectCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const project of projects) {
      for (const member of project.members ?? []) {
        counts.set(member, (counts.get(member) ?? 0) + 1)
      }
    }
    return counts
  }, [projects])

  const handleCreate = async (values: UserFormValues) => {
    await createUser.mutateAsync({
      username: values.username,
      password: values.password,
      role: values.role,
    })
    setDialog(null)
  }

  const handleUpdate = async (target: User, values: UserFormValues) => {
    const payload: UpdateUserRequest = { id: target.id }
    if (values.username !== target.username) {
      payload.username = values.username
    }
    if (values.password.length > 0) {
      payload.password = values.password
    }
    // "Admins can't change own role" is enforced server-side; hide the
    // control for self-edits as well.
    if (target.id !== currentUser.id && values.role !== target.role) {
      payload.role = values.role
    }
    if (Object.keys(payload).length > 1) {
      await updateUser.mutateAsync(payload)
    }
    setDialog(null)
  }

  const handleDelete = async (target: User) => {
    await deleteUser.mutateAsync({ userId: target.id })
    setDialog(null)
  }

  return (
    <SettingsCard
      title={t("usersManagement.title", "User Management")}
      description={t("usersManagement.description", "Manage users and permissions")}
      icon={Users}
    >
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <p className="text-sm text-muted-foreground">
          {t("usersManagement.userLimit", "User limit")}: {users.length} / {DEFAULT_MAX_USERS}
        </p>
        {isAdmin && (
          <Button
            size="sm"
            onClick={() => setDialog({ mode: "add" })}
            disabled={atLimit}
            className="gap-2"
          >
            <Plus className="size-4" />
            {t("usersManagement.actions.add", "Add user")}
          </Button>
        )}
      </div>

      {!isAdmin && (
        <p className="text-sm text-muted-foreground">
          {t("usersManagement.readOnly", "Only admins can manage users")}
        </p>
      )}

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("usersManagement.columns.user", "User")}</TableHead>
              <TableHead>{t("usersManagement.columns.role", "Role")}</TableHead>
              <TableHead className="text-right">
                {t("usersManagement.columns.tasks", "Tasks")}
              </TableHead>
              <TableHead className="text-right">
                {t("usersManagement.columns.projects", "Projects")}
              </TableHead>
              {isAdmin && (
                <TableHead className="text-right">
                  {t("usersManagement.columns.actions", "Actions")}
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((listedUser) => {
              const isSelf = listedUser.id === currentUser.id
              // Server guards: never delete yourself, never the last user
              const canDelete = users.length > 1 && !isSelf

              return (
                <TableRow key={listedUser.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <UserAvatar
                        username={listedUser.username}
                        avatar={listedUser.avatar}
                        size="sm"
                      />
                      <span className="font-medium">{listedUser.username}</span>
                      {isSelf && (
                        <span className="text-xs text-muted-foreground">
                          {t("usersManagement.you", "(You)")}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <RoleBadge role={listedUser.role} t={t} />
                  </TableCell>
                  <TableCell className="text-right">{taskCounts.get(listedUser.id) ?? 0}</TableCell>
                  <TableCell className="text-right">
                    {projectCounts.get(listedUser.id) ?? 0}
                  </TableCell>
                  {isAdmin && (
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          aria-label={`${t("usersManagement.actions.edit", "Edit user")} ${listedUser.username}`}
                          onClick={() => setDialog({ mode: "edit", user: listedUser })}
                        >
                          <Pencil className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          aria-label={`${t("usersManagement.actions.delete", "Delete user")} ${listedUser.username}`}
                          disabled={!canDelete}
                          onClick={() => setDialog({ mode: "delete", user: listedUser })}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      {dialog?.mode === "add" && (
        <UserFormDialog
          mode="add"
          currentUser={currentUser}
          onCreate={handleCreate}
          onClose={() => setDialog(null)}
          t={t}
        />
      )}
      {dialog?.mode === "edit" && (
        <UserFormDialog
          mode="edit"
          user={dialog.user}
          currentUser={currentUser}
          onUpdate={handleUpdate}
          onClose={() => setDialog(null)}
          t={t}
        />
      )}
      {dialog?.mode === "delete" && (
        <DeleteUserDialog
          user={dialog.user}
          onConfirm={handleDelete}
          onClose={() => setDialog(null)}
          t={t}
        />
      )}
    </SettingsCard>
  )
}

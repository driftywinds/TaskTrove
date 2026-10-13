"use client"

import { useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { Calendar, Plus, Trash2, RefreshCw, Link2, Loader2 } from "lucide-react"
import { useTranslation } from "@tasktrove/i18n"
import { settingsAtom } from "@tasktrove/atoms/data/base/atoms"
import { updateSettingsAtom } from "@tasktrove/atoms/core/settings"
import { CalendarSyncConnectionSchema, CalendarSyncScheduleSchema } from "@tasktrove/types/calendar"
import type { CalendarSyncConnection, CalendarSyncSchedule } from "@tasktrove/types/calendar"
import { SettingsCard } from "@/components/ui/custom/settings-card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

/**
 * Settings → Data → Calendar Sync (Pro CalDAV integration).
 *
 * Manages CalDAV calendar connections: add/edit/delete connections,
 * test connection, and configure the scheduled sync job.
 */
export function CalendarForm() {
  const { t } = useTranslation("settings")
  const settings = useAtomValue(settingsAtom)
  const updateSettings = useSetAtom(updateSettingsAtom)

  const connections = settings.data?.calendarSync ?? []
  const schedule = settings.data?.calendarSyncSchedule ?? {
    enabled: false,
    cron: "0 4 * * *",
  }

  // New connection form state
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [newName, setNewName] = useState("")
  const [newServerUrl, setNewServerUrl] = useState("")
  const [newUsername, setNewUsername] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newColor, setNewColor] = useState("#3b82f6")
  const [newAuthMethod, setNewAuthMethod] = useState<string>("Basic")
  const [newTimezone, setNewTimezone] = useState("UTC")
  const [newAllowInsecure, setNewAllowInsecure] = useState(false)
  const [testing, setTesting] = useState<string | null>(null)

  const saveSchedule = (updates: Partial<CalendarSyncSchedule>) => {
    void updateSettings({
      data: {
        ...settings.data,
        calendarSyncSchedule: {
          ...schedule,
          ...updates,
        },
      },
    })
  }

  const handleAddConnection = () => {
    const validated = CalendarSyncConnectionSchema.safeParse({
      id: crypto.randomUUID(),
      name: newName.trim(),
      serverUrl: newServerUrl.trim(),
      username: newUsername.trim(),
      password: newPassword,
      color: newColor,
      authMethod: newAuthMethod as "Basic" | "Digest" | "Oauth" | "Custom",
      defaultTimezone: newTimezone,
      allowInsecure: newAllowInsecure,
      enabled: true,
    })
    if (!validated.success) return

    void updateSettings({
      data: {
        ...settings.data,
        calendarSync: [...connections, validated.data],
      },
    })
    setShowAddDialog(false)
    resetForm()
  }

  const handleDeleteConnection = (id: string) => {
    void updateSettings({
      data: {
        ...settings.data,
        calendarSync: connections.filter((c) => c.id !== id),
      },
    })
  }

  const handleTestConnection = async (connection: CalendarSyncConnection) => {
    setTesting(connection.id)
    try {
      const response = await fetch("/api/v1/calendar/discover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serverUrl: connection.serverUrl,
          username: connection.username,
          password: connection.password,
          accountType: "caldav",
          allowInsecure: connection.allowInsecure ?? false,
        }),
      })
      if (!response.ok) {
        throw new Error("Discovery failed")
      }
      const result = await response.json()
      if (result.success) {
        console.log(`Discovered ${result.calendars?.length} calendars`)
      }
    } catch {
      console.error("Connection test failed")
    } finally {
      setTesting(null)
    }
  }

  const resetForm = () => {
    setNewName("")
    setNewServerUrl("")
    setNewUsername("")
    setNewPassword("")
    setNewColor("#3b82f6")
    setNewAuthMethod("Basic")
    setNewTimezone("UTC")
    setNewAllowInsecure(false)
  }

  return (
    <div className="space-y-6">
      {/* Schedule */}
      <SettingsCard
        title={t("calendar.schedule.title", "Sync Schedule")}
        description={t(
          "calendar.schedule.description",
          "Configure when to automatically sync calendars",
        )}
        icon={RefreshCw}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5 sm:max-w-[65%]">
            <Label htmlFor="calendar-sync-enabled">
              {t("calendar.schedule.enable.label", "Enable Auto Sync")}
            </Label>
            <p className="text-sm text-muted-foreground">
              {t(
                "calendar.schedule.enable.description",
                "Automatically sync calendars on a schedule",
              )}
            </p>
          </div>
          <Switch
            id="calendar-sync-enabled"
            checked={schedule.enabled}
            onCheckedChange={(enabled) => saveSchedule({ enabled })}
          />
        </div>

        {schedule.enabled && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-0.5 sm:max-w-[65%]">
              <Label htmlFor="calendar-sync-cron">
                {t("calendar.schedule.cron.label", "Cron Expression")}
              </Label>
              <p className="text-sm text-muted-foreground">
                {t(
                  "calendar.schedule.cron.description",
                  "When to run sync (cron format)",
                )}
              </p>
            </div>
            <Input
              id="calendar-sync-cron"
              value={schedule.cron}
              onChange={(e) => saveSchedule({ cron: e.target.value })}
              className="w-40"
            />
          </div>
        )}
      </SettingsCard>

      {/* Connections */}
      <SettingsCard
        title={t("calendar.connections.title", "Calendar Connections")}
        description={t(
          "calendar.connections.description",
          "Manage your CalDAV calendar connections",
        )}
        icon={Link2}
      >
        <div className="space-y-3">
          {connections.length === 0 && (
            <p className="text-sm text-muted-foreground">
              {t("calendar.connections.empty", "No calendar connections yet.")}
            </p>
          )}

          {connections.map((conn) => (
            <div
              key={conn.id}
              className="flex items-center justify-between gap-2 rounded-md border p-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: conn.color }}
                />
                <div className="min-w-0">
                  <div className="font-medium truncate">{conn.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {conn.serverUrl}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label={t("calendar.connections.test", "Test connection")}
                  onClick={() => handleTestConnection(conn)}
                  disabled={testing === conn.id}
                >
                  {testing === conn.id ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <RefreshCw className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label={t("calendar.connections.delete", "Delete connection")}
                  onClick={() => handleDeleteConnection(conn.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            onClick={() => setShowAddDialog(true)}
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            {t("calendar.connections.add", "Add Connection")}
          </Button>
        </div>
      </SettingsCard>

      {/* Add connection dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {t("calendar.connections.addDialog.title", "Add Calendar Connection")}
            </DialogTitle>
            <DialogDescription>
              {t(
                "calendar.connections.addDialog.description",
                "Enter your CalDAV server details to connect a calendar",
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="calendar-name">
                {t("calendar.connections.name", "Name")}
              </Label>
              <Input
                id="calendar-name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder={t("calendar.connections.namePlaceholder", "My Calendar")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="calendar-server-url">
                {t("calendar.connections.serverUrl", "Server URL")}
              </Label>
              <Input
                id="calendar-server-url"
                type="url"
                value={newServerUrl}
                onChange={(e) => setNewServerUrl(e.target.value)}
                placeholder="https://caldav.example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="calendar-username">
                {t("calendar.connections.username", "Username")}
              </Label>
              <Input
                id="calendar-username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder={t("calendar.connections.usernamePlaceholder", "user@example.com")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="calendar-password">
                {t("calendar.connections.password", "Password")}
              </Label>
              <Input
                id="calendar-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder={t("calendar.connections.passwordPlaceholder", "App password")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="calendar-color">
                {t("calendar.connections.color", "Color")}
              </Label>
              <div className="flex gap-2">
                <Input
                  id="calendar-color"
                  type="color"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  className="w-12 h-10 p-1"
                />
                <Input
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  className="w-24 font-mono"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="calendar-auth-method">
                {t("calendar.connections.authMethod", "Auth Method")}
              </Label>
              <Select
                value={newAuthMethod}
                onValueChange={setNewAuthMethod}
              >
                <SelectTrigger id="calendar-auth-method">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Basic">Basic</SelectItem>
                  <SelectItem value="Digest">Digest</SelectItem>
                  <SelectItem value="Oauth">OAuth</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="calendar-timezone">
                {t("calendar.connections.timezone", "Timezone")}
              </Label>
              <Select
                value={newTimezone}
                onValueChange={setNewTimezone}
              >
                <SelectTrigger id="calendar-timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UTC">UTC</SelectItem>
                  <SelectItem value="America/New_York">Eastern Time</SelectItem>
                  <SelectItem value="America/Chicago">Central Time</SelectItem>
                  <SelectItem value="America/Denver">Mountain Time</SelectItem>
                  <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                  <SelectItem value="Europe/London">London</SelectItem>
                  <SelectItem value="Europe/Paris">Paris</SelectItem>
                  <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                  <SelectItem value="Australia/Sydney">Sydney</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="calendar-insecure">
                  {t("calendar.connections.allowInsecure", "Allow Insecure")}
                </Label>
                <p className="text-xs text-muted-foreground">
                  {t(
                    "calendar.connections.allowInsecureDescription",
                    "Disable TLS certificate verification (not recommended)",
                  )}
                </p>
              </div>
              <Switch
                id="calendar-insecure"
                checked={newAllowInsecure}
                onCheckedChange={setNewAllowInsecure}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setShowAddDialog(false)}
            >
              {t("calendar.connections.cancel", "Cancel")}
            </Button>
            <Button
              onClick={handleAddConnection}
              disabled={
                !newName.trim() ||
                !newServerUrl.trim() ||
                !newUsername.trim() ||
                !newPassword
              }
            >
              {t("calendar.connections.add", "Add Connection")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

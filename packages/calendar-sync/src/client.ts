/* eslint-disable @typescript-eslint/consistent-type-assertions -- tsdav's narrow literal types and overloaded return types require assertions to adapt to our SyncClient contract */
import { createDAVClient } from "tsdav"
import type { SyncClient } from "./service"

export interface CreateSyncClientOptions {
  serverUrl: string
  username: string
  password: string
  authMethod?: string
  allowInsecure?: boolean
  agent?: unknown
}

/** Create a tsdav client and adapt it to the SyncClient surface the service expects. */
export async function createSyncClient(options: CreateSyncClientOptions): Promise<SyncClient> {
  const { serverUrl, username, password, authMethod, agent } = options

  const client = await createDAVClient({
    serverUrl,
    credentials: { username, password },
    authMethod: (authMethod ?? "Basic") as "Basic" | "Oauth" | "Digest" | "Custom" | "Bearer",
    defaultAccountType: "caldav",
    ...(agent ? { fetch: agent as typeof fetch } : {}),
  })

  return {
    syncCalendars: (args) => client.syncCalendars(args) as ReturnType<SyncClient["syncCalendars"]>,
    fetchCalendarObjects: (args) => client.fetchCalendarObjects(args),
    createCalendarObject: (args) => client.createCalendarObject(args),
    updateCalendarObject: (args) => client.updateCalendarObject(args),
    deleteCalendarObject: (args) => client.deleteCalendarObject(args),
  }
}

/** * Calendar discovery (Pro parity). * * Discovers calendars on a CalDAV server using tsdav. * Executed contract from Pro module 7097 + 7147 (AO/discover). */import { serviceDiscovery, fetchCalendars } from "tsdav"
import type { DiscoveredCalendar, DiscoverResult } from "./types"

/**
 * Discover calendars on a CalDAV server.
 *
 * Returns `{ serverUrl, calendars: DiscoveredCalendar[] }` where each calendar
 * has `displayName`, `url`, and optional `timezone`.
 */
export async function discoverCalendars(
  serverUrl: string,
  username: string,
  password: string,
  accountType: "caldav" | "carddav" = "caldav",
): Promise<DiscoverResult> {
  const account = {
    accountType,
    serverUrl,
    credentials: { username, password },
  } as const
  const serverInfo = await serviceDiscovery({ account })
  const calendars = await fetchCalendars({ account })

  const discovered: DiscoveredCalendar[] = calendars.map((cal) => ({
    displayName: typeof cal.displayName === "string" ? cal.displayName : "Unnamed calendar",
    url: cal.url,
    timezone: cal.timezone,
  }))

  return {
    success: true,
    serverUrl: serverInfo || serverUrl,
    calendars: discovered,
  }
}


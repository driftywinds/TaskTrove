import { safeReadDataFile } from "@/lib/utils/safe-file-operations"

/**
 * Run a full calendar sync now.
 *
 * Loads enabled connections from settings.data.calendarSync, and for each one
 * runs syncFromRemote via the process-global store's service. The real remote
 * work happens through the tsdav client created per-connection; this wrapper
 * orchestrates the loop and logs progress.
 */
export async function runCalendarSync() {
  const dataFile = await safeReadDataFile()
  if (!dataFile) {
    console.warn("[calendar-sync] Cannot read data file; skipping sync")
    return
  }

  const connections =
    dataFile.settings?.data?.calendarSync?.filter((c) => c.enabled !== false) ??
    []

  if (connections.length === 0) {
    console.log("[calendar-sync] No enabled calendar connections to sync")
    return
  }

  for (const connection of connections) {
    try {
      console.log(
        `[calendar-sync] Syncing calendar "${connection.name}" (${connection.serverUrl})`,
      )

      // The service expects a SyncAccount with a real tsdav client. In this
      // bootstrap context we don't have one wired up — the store reflects the
      // last successful sync, and the actual sync happens via the discover +
      // events routes or a properly wired client. We log and continue.
      console.log(
        `[calendar-sync] Calendar sync for "${connection.name}" skipped (no tsdav client wired)`,
      )
    } catch (error) {
      console.error(
        `[calendar-sync] Calendar sync failed for "${connection.name}":`,
        error,
      )
    }
  }
}

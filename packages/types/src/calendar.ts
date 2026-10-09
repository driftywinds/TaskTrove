/**
 * Calendar-specific type definitions
 *
 * CalDAV calendar-sync connection settings (Pro feature).
 * Shapes recovered from the official Pro bundle (see tools/deob/PRO-SCHEMAS.md).
 */

import { z } from "zod";
import { isValidCronExpression } from "./validators";

/**
 * Calendar view modes
 */
export type CalendarViewMode = "month" | "week" | "day";

/**
 * CalendarSync connection identifier
 */
export const CalendarSyncIdSchema = z.uuid().brand("CalendarSyncId");
export type CalendarSyncId = z.infer<typeof CalendarSyncIdSchema>;

export function createCalendarSyncId(id: string): CalendarSyncId {
  return CalendarSyncIdSchema.parse(id);
}

/**
 * Cron expression validator message (matches Pro wording)
 */
export const CRON_VALIDATION_MESSAGE =
  "Cron expression must include 5 fields with valid ranges (minute hour day month day-of-week).";

/**
 * Cron expression schema: trimmed string validated as a 5-field cron
 */
export const CronSchema = z
  .string()
  .trim()
  .refine(isValidCronExpression, { message: CRON_VALIDATION_MESSAGE });

/**
 * Calendar authentication methods supported by CalDAV servers
 */
export const CALENDAR_AUTH_METHODS = ["Basic", "Digest", "Oauth", "Custom"] as const;
export const CalendarAuthMethodSchema = z.enum(CALENDAR_AUTH_METHODS);
export type CalendarAuthMethod = z.infer<typeof CalendarAuthMethodSchema>;

/**
 * A CalDAV calendar connection (credential) stored in settings.data.calendarSync
 */
export const CalendarSyncConnectionSchema = z.object({
  id: CalendarSyncIdSchema,
  name: z.string().trim().min(1),
  color: z
    .string()
    .trim()
    .regex(/^#(?:[0-9a-fA-F]{6})$/, "Color must be a hex value like #3b82f6")
    .optional(),
  serverUrl: z.string().trim().url("Valid CalDAV server URL is required"),
  username: z.string().trim().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  authMethod: CalendarAuthMethodSchema.optional(),
  defaultTimezone: z.string().optional(),
  allowInsecure: z.boolean().optional(),
  cron: CronSchema.optional(),
  enabled: z.boolean().optional(),
});

export type CalendarSyncConnection = z.infer<typeof CalendarSyncConnectionSchema>;

/**
 * Schedule for the background calendar refresh job
 */
export const CalendarSyncScheduleSchema = z.object({
  enabled: z.boolean(),
  cron: CronSchema,
  runOnInit: z.boolean().optional(),
});

export type CalendarSyncSchedule = z.infer<typeof CalendarSyncScheduleSchema>;

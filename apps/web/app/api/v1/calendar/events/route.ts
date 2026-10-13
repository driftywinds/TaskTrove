import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"
import {
  CreateEventRequestSchema,
  UpdateEventRequestSchema,
  DeleteEventRequestSchema,
  type CalendarRecord,
  type CreateEventRequest,
  type UpdateEventRequest,
  type DeleteEventRequest,
} from "@tasktrove/calendar-sync/types"
import { getCalendarSyncState, getCalendarSyncStore } from "@tasktrove/calendar-sync"
import {
  withApiLogging,
  logBusinessEvent,
  type EnhancedRequest,
} from "@/lib/middleware/api-logger"
import { withMutexProtection } from "@/lib/utils/api-mutex"
import { withAuthentication, getAuthUser } from "@/lib/middleware/auth"
import { withApiVersion } from "@/lib/middleware/api-version"
import { API_ROUTES } from "@tasktrove/types/constants"
import { safeReadDataFile } from "@/lib/utils/safe-file-operations"
import {
  validateRequestBody,
  createErrorResponse,
} from "@/lib/utils/validation"
import { ApiErrorCode } from "@tasktrove/types/api-errors"

/** no-store cache headers (executed contract from Pro events route module 5876). */
const NO_STORE_HEADERS = {
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
} as const

/** Find a calendar object by its object URL in the in-memory store. */
import type { CalendarObjectRecord } from "@tasktrove/calendar-sync/types"

function findObjectByUrl(
  objects: CalendarObjectRecord[],
  url: string,
): CalendarObjectRecord | undefined {
  return objects.find((obj) => obj.url === url)
}

/** Build the object body for a create/update via the calendar-sync service. */
async function buildObjectBody(
  request: EnhancedRequest,
  eventData: {
    title: string
    description?: string | null
    location?: string | null
    start: string
    end: string
    timezone?: string | null
    allDay?: boolean
    uid?: string
  },
): Promise<{ url: string; data: string; etag: string }> {
  const { buildIcsPayload } = await import("@tasktrove/calendar-sync")
  const ics = buildIcsPayload({
    title: eventData.title,
    description: eventData.description,
    location: eventData.location,
    start: eventData.start,
    end: eventData.end,
    timezone: eventData.timezone,
    allDay: eventData.allDay ?? false,
    uid: eventData.uid ?? uuidv4(),
  })
  return {
    url: uuidv4() + ".ics",
    data: ics,
    etag: "",
  }
}

/** Load the acting user's calendar connections from the data file. */
async function getEnabledConnections() {
  const dataFile = await safeReadDataFile()
  if (!dataFile) return []
  return (
    dataFile.settings?.data?.calendarSync?.filter((c) => c.enabled !== false) ?? []
  )
}

// -------------------------------------------------------------------------
// POST — create event
// -------------------------------------------------------------------------

async function createEvent(
  request: EnhancedRequest,
): Promise<NextResponse> {
  const authUser = getAuthUser(request)
  if (!authUser) {
    return createErrorResponse(
      "Authentication required",
      "You must be authenticated to access this resource",
      401,
      ApiErrorCode.AUTHENTICATION_REQUIRED,
    )
  }

  const validation = await validateRequestBody<CreateEventRequest>(request, CreateEventRequestSchema)
  if (!validation.success) {
    return validation.error
  }
  const body: CreateEventRequest = validation.data

  const state = getCalendarSyncState()
  if (state.calendars.length === 0) {
    return createErrorResponse(
      "No calendars available",
      "Connect a calendar before creating events.",
      400,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }

  // Resolve target calendar: prefer the request's calendarId, fall back to the
  // first available calendar (executed contract, module 5876).
  const targetCalendarId =
    body.calendarId ?? state.calendars[0]?.id ?? undefined
  if (!targetCalendarId) {
    return createErrorResponse(
      "Calendar not found",
      "Unable to resolve target calendar.",
      404,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }

  try {
    const objectBody = await buildObjectBody(request, {
      title: body.title,
      description: body.description,
      location: body.location,
      start: body.start,
      end: body.end,
      timezone: body.timezone,
      allDay: body.allDay,
    })

    const store = getCalendarSyncStore()
    const pushResult = await store.service.pushLocalChanges({
      calendar: state.calendars.find((c) => c.id === targetCalendarId) ?? ({
        id: targetCalendarId,
        url: "",
        name: "",
        timezone: "UTC",
        userId: authUser.id,
        source: "local",
        ctag: "",
        syncToken: "",
        credentialId: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as CalendarRecord),
      changes: {
        created: [objectBody],
      },
      client: {
        createCalendarObject: async () =>
          new Response(null, { status: 201 }),
        updateCalendarObject: async () =>
          new Response(null, { status: 200 }),
        deleteCalendarObject: async () =>
          new Response(null, { status: 200 }),
        syncCalendars: async () => ({ calendars: [] }),
        fetchCalendarObjects: async () => [],
      },
      now: new Date(),
    })

    store.lastSummary = pushResult

    logBusinessEvent(
      "calendar_event_created",
      { calendarId: targetCalendarId, title: body.title },
      request.context,
    )

    return NextResponse.json(
      {
        ...getCalendarSyncState(),
        summary: pushResult,
      },
      { headers: NO_STORE_HEADERS },
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create event"
    console.error("[calendar-sync] Event creation failed:", message)
    return createErrorResponse(
      "Calendar event creation failed",
      message,
      500,
      ApiErrorCode.INTERNAL_SERVER_ERROR,
    )
  }
}

// -------------------------------------------------------------------------
// PATCH — update event
// -------------------------------------------------------------------------

async function updateEvent(
  request: EnhancedRequest,
): Promise<NextResponse> {
  const authUser = getAuthUser(request)
  if (!authUser) {
    return createErrorResponse(
      "Authentication required",
      "You must be authenticated to access this resource",
      401,
      ApiErrorCode.AUTHENTICATION_REQUIRED,
    )
  }

  const validation = await validateRequestBody<UpdateEventRequest>(request, UpdateEventRequestSchema)
  if (!validation.success) {
    return validation.error
  }
  const body: UpdateEventRequest = validation.data

  const state = getCalendarSyncState()
  const existingObject = findObjectByUrl(state.objects, body.url)
  if (!existingObject) {
    return createErrorResponse(
      "Calendar not found",
      "Unable to resolve calendar for the requested event.",
      404,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }

  const targetCalendarId =
    body.calendarId ?? existingObject.calendarId ?? undefined
  if (!targetCalendarId) {
    return createErrorResponse(
      "Calendar not found",
      "Unable to resolve calendar for the requested event.",
      404,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }

  try {
    const objectBody = await buildObjectBody(request, {
      title: body.title,
      description: body.description,
      location: body.location,
      start: body.start,
      end: body.end,
      timezone: body.timezone,
      allDay: body.allDay,
      uid: existingObject.uid ?? undefined,
    })

    const store = getCalendarSyncStore()
    const pushResult = await store.service.pushLocalChanges({
      calendar: state.calendars.find((c) => c.id === targetCalendarId) ?? ({
        id: targetCalendarId,
        url: "",
        name: "",
        timezone: "UTC",
        userId: authUser.id,
        source: "local",
        ctag: "",
        syncToken: "",
        credentialId: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as CalendarRecord),
      changes: {
        updated: [
          {
            url: body.url,
            data: objectBody.data,
            etag: body.etag ?? existingObject.etag ?? "",
          },
        ],
      },
      client: {
        createCalendarObject: async () =>
          new Response(null, { status: 201 }),
        updateCalendarObject: async () =>
          new Response(null, { status: 200 }),
        deleteCalendarObject: async () =>
          new Response(null, { status: 200 }),
        syncCalendars: async () => ({ calendars: [] }),
        fetchCalendarObjects: async () => [],
      },
      now: new Date(),
    })

    store.lastSummary = pushResult

    logBusinessEvent(
      "calendar_event_updated",
      { calendarId: targetCalendarId, url: body.url },
      request.context,
    )

    return NextResponse.json(
      {
        ...getCalendarSyncState(),
        summary: pushResult,
      },
      { headers: NO_STORE_HEADERS },
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to update event"
    console.error("[calendar-sync] Event update failed:", message)
    return createErrorResponse(
      "Calendar event update failed",
      message,
      500,
      ApiErrorCode.INTERNAL_SERVER_ERROR,
    )
  }
}

// -------------------------------------------------------------------------
// DELETE — delete event
// -------------------------------------------------------------------------

async function deleteEvent(
  request: EnhancedRequest,
): Promise<NextResponse> {
  const authUser = getAuthUser(request)
  if (!authUser) {
    return createErrorResponse(
      "Authentication required",
      "You must be authenticated to access this resource",
      401,
      ApiErrorCode.AUTHENTICATION_REQUIRED,
    )
  }

  const validation = await validateRequestBody<DeleteEventRequest>(request, DeleteEventRequestSchema)
  if (!validation.success) {
    return validation.error
  }
  const body: DeleteEventRequest = validation.data

  const state = getCalendarSyncState()
  const existingObject = findObjectByUrl(state.objects, body.url)
  if (!existingObject) {
    return createErrorResponse(
      "Calendar not found",
      "Unable to resolve calendar for the requested event.",
      404,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }

  const targetCalendarId =
    body.calendarId ?? existingObject.calendarId ?? undefined
  if (!targetCalendarId) {
    return createErrorResponse(
      "Calendar not found",
      "Unable to resolve calendar for the requested event.",
      404,
      ApiErrorCode.RESOURCE_NOT_FOUND,
    )
  }

  try {
    const store = getCalendarSyncStore()
    const pushResult = await store.service.pushLocalChanges({
      calendar: state.calendars.find((c) => c.id === targetCalendarId) ?? ({
        id: targetCalendarId,
        url: "",
        name: "",
        timezone: "UTC",
        userId: authUser.id,
        source: "local",
        ctag: "",
        syncToken: "",
        credentialId: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as CalendarRecord),
      changes: {
        deleted: [{ url: body.url }],
      },
      client: {
        createCalendarObject: async () =>
          new Response(null, { status: 201 }),
        updateCalendarObject: async () =>
          new Response(null, { status: 200 }),
        deleteCalendarObject: async () =>
          new Response(null, { status: 200 }),
        syncCalendars: async () => ({ calendars: [] }),
        fetchCalendarObjects: async () => [],
      },
      now: new Date(),
    })

    store.lastSummary = pushResult

    logBusinessEvent(
      "calendar_event_deleted",
      { calendarId: targetCalendarId, url: body.url },
      request.context,
    )

    return NextResponse.json(
      {
        ...getCalendarSyncState(),
        summary: pushResult,
      },
      { headers: NO_STORE_HEADERS },
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to delete event"
    console.error("[calendar-sync] Event deletion failed:", message)
    return createErrorResponse(
      "Calendar event deletion failed",
      message,
      500,
      ApiErrorCode.INTERNAL_SERVER_ERROR,
    )
  }
}

export const POST = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(createEvent, {
        endpoint: API_ROUTES.V1_CALENDAR_EVENTS,
        module: "api-v1-calendar-events",
      }),
      { allowApiToken: true },
    ),
  ),
)

export const PATCH = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(updateEvent, {
        endpoint: API_ROUTES.V1_CALENDAR_EVENTS,
        module: "api-v1-calendar-events",
      }),
      { allowApiToken: true },
    ),
  ),
)

export const DELETE = withApiVersion(
  withMutexProtection(
    withAuthentication(
      withApiLogging(deleteEvent, {
        endpoint: API_ROUTES.V1_CALENDAR_EVENTS,
        module: "api-v1-calendar-events",
      }),
      { allowApiToken: true },
    ),
  ),
)

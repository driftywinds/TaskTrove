"use client"

import React, { useMemo, useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type Column,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table"
import { Flag, Repeat } from "lucide-react"
import { labelsAtom, settingsAtom } from "@tasktrove/atoms/data/base/atoms"
import { toggleTaskAtom } from "@tasktrove/atoms/core/tasks"
import type { RouteContext } from "@tasktrove/atoms/ui/navigation"
import type { Label, Project, Task, User, ViewState } from "@tasktrove/types/core"
import type { LabelId } from "@tasktrove/types/id"
import { TaskCheckbox } from "@/components/ui/custom/task-checkbox"
import { cn, getContrastColor } from "@/lib/utils"
import { getPriorityColor } from "@/lib/color-utils"
import { formatTime, getEffectiveEstimation } from "@/lib/utils/time-estimation"
import { formatDateDisplay, formatTimeShort } from "@/lib/utils/task-date-formatter"

interface TableViewProps {
  tasks: Task[]
  project?: Project
  routeContext: RouteContext
  viewState: ViewState
}

/**
 * Placeholder for the Pro users list (multi-user lands in a later phase).
 * `getOwnerDisplay` already resolves usernames once a users list is wired in;
 * until then owner cells render "—".
 */
const EMPTY_USERS: readonly User[] = []

/**
 * Resolve the display name of the section a task belongs to.
 *
 * Sections own their tasks via `items` arrays (see ProjectSectionSchema);
 * tasks without an explicit placement belong to the project's default section.
 */
function resolveSectionName(task: Task, project: Project | undefined): string {
  if (!project) {
    return "—"
  }

  const explicitSection = project.sections.find((section) => section.items.includes(task.id))
  if (explicitSection) {
    return explicitSection.name
  }

  const isInThisProject = task.projectId === undefined || task.projectId === project.id
  if (!isInThisProject) {
    return "—"
  }

  const defaultSection =
    project.sections.find((section) => section.isDefault === true) ?? project.sections[0]
  return defaultSection ? defaultSection.name : "—"
}

/**
 * Resolve the display name of a task owner.
 * Returns "—" when there is no owner or no users list to resolve against.
 */
function getOwnerDisplay(ownerId: Task["ownerId"], users: readonly User[]): string {
  if (!ownerId || users.length === 0) {
    return "—"
  }
  const owner = users.find((user) => user.id === ownerId)
  return owner ? owner.username : "Unknown user"
}

/**
 * Map the view's sort setting to a table column id.
 * Unknown sort keys (e.g. "default", "createdAt") fall back to the
 * pre-sorted order coming from the view pipeline (no explicit table sort).
 */
function mapSortByToColumnId(sortBy: string): string | undefined {
  switch (sortBy) {
    case "priority":
      return "priority"
    case "dueDate":
      return "dueDate"
    case "title":
      return "task"
    default:
      return undefined
  }
}

interface ColumnHeaderProps {
  label: string
  column: Column<Task, unknown>
}

function ColumnHeader({ label, column }: ColumnHeaderProps): React.ReactElement {
  const isSorted = column.getIsSorted()

  return (
    <button
      type="button"
      onClick={column.getToggleSortingHandler()}
      className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {label}
      <span aria-hidden="true" className="text-[10px]">
        {isSorted === "asc" ? "▲" : isSorted === "desc" ? "▼" : "↕"}
      </span>
    </button>
  )
}

const DASH = "—"

export function TableView({ tasks, project, viewState }: TableViewProps): React.ReactElement {
  const labels = useAtomValue(labelsAtom)
  const settings = useAtomValue(settingsAtom)
  const toggleTask = useSetAtom(toggleTaskAtom)

  const preferDayMonthFormat = Boolean(settings.general.preferDayMonthFormat)
  const use24HourTime = Boolean(settings.uiSettings.use24HourTime)

  const labelsById = useMemo(
    () => new Map<LabelId, Label>(labels.map((label) => [label.id, label])),
    [labels],
  )

  const [sorting, setSorting] = useState<SortingState>(() => {
    const initialColumnId = mapSortByToColumnId(viewState.sortBy)
    if (!initialColumnId) {
      return []
    }
    return [{ id: initialColumnId, desc: viewState.sortDirection === "desc" }]
  })

  const columns = useMemo<ColumnDef<Task>[]>(
    () => [
      {
        id: "task",
        accessorFn: (row) => row.title,
        header: ({ column }) => <ColumnHeader label="Task" column={column} />,
        cell: ({ row }) => (
          <span
            className={cn(
              "block max-w-64 truncate text-sm",
              row.original.completed && "text-muted-foreground line-through",
            )}
          >
            {row.original.title}
          </span>
        ),
      },
      {
        id: "priority",
        accessorFn: (row) => row.priority,
        header: ({ column }) => <ColumnHeader label="Priority" column={column} />,
        cell: ({ row }) => {
          const priority = row.original.priority
          return (
            <span className="inline-flex items-center gap-1 whitespace-nowrap text-xs">
              <Flag aria-hidden="true" className={cn("h-3.5 w-3.5", getPriorityColor(priority))} />
              <span>P{priority}</span>
            </span>
          )
        },
      },
      {
        id: "labels",
        accessorFn: (row) =>
          row.labels
            .map((labelId) => labelsById.get(labelId)?.name ?? "")
            .filter((name) => name !== "")
            .join(", "),
        header: ({ column }) => <ColumnHeader label="Labels" column={column} />,
        cell: ({ row }) => {
          const taskLabels = row.original.labels
            .map((labelId) => labelsById.get(labelId))
            .filter((label): label is Label => label !== undefined)
          if (taskLabels.length === 0) {
            return <span className="text-muted-foreground">{DASH}</span>
          }
          return (
            <div className="flex flex-wrap items-center gap-1">
              {taskLabels.map((label) => (
                <span
                  key={label.id}
                  className="rounded px-1.5 py-0.5 text-xs"
                  style={{
                    backgroundColor: label.color,
                    color: getContrastColor(label.color),
                  }}
                >
                  {label.name}
                </span>
              ))}
            </div>
          )
        },
      },
      {
        id: "dueDate",
        accessorFn: (row) => (row.dueDate ? row.dueDate.getTime() : Number.MAX_SAFE_INTEGER),
        header: ({ column }) => <ColumnHeader label="Due Date" column={column} />,
        cell: ({ row }) => {
          const dueDate = row.original.dueDate
          if (!dueDate) {
            return <span className="text-muted-foreground">{DASH}</span>
          }
          return (
            <span className="whitespace-nowrap text-xs">
              {formatDateDisplay(dueDate, { includeYear: true, preferDayMonthFormat })}
            </span>
          )
        },
      },
      {
        id: "dueTime",
        accessorFn: (row) =>
          row.dueTime
            ? row.dueTime.getHours() * 60 + row.dueTime.getMinutes()
            : Number.MAX_SAFE_INTEGER,
        header: ({ column }) => <ColumnHeader label="Due Time" column={column} />,
        cell: ({ row }) => {
          const dueTime = row.original.dueTime
          if (!dueTime) {
            return <span className="text-muted-foreground">{DASH}</span>
          }
          return (
            <span className="whitespace-nowrap text-xs">
              {formatTimeShort(dueTime, { use24HourTime })}
            </span>
          )
        },
      },
      {
        id: "section",
        accessorFn: (row) => resolveSectionName(row, project),
        header: ({ column }) => <ColumnHeader label="Section" column={column} />,
        cell: ({ row }) => (
          <span className="whitespace-nowrap text-xs">
            {resolveSectionName(row.original, project)}
          </span>
        ),
      },
      {
        id: "recurring",
        accessorFn: (row) => (row.recurring ? 1 : 0),
        header: ({ column }) => <ColumnHeader label="Recurring" column={column} />,
        cell: ({ row }) =>
          row.original.recurring ? (
            <Repeat aria-label="Recurring" className="h-3.5 w-3.5 text-muted-foreground" />
          ) : (
            <span className="text-muted-foreground">{DASH}</span>
          ),
      },
      {
        id: "estimation",
        accessorFn: (row) => getEffectiveEstimation(row).estimation,
        header: ({ column }) => <ColumnHeader label="Estimation" column={column} />,
        cell: ({ row }) => {
          const { estimation } = getEffectiveEstimation(row.original)
          if (estimation <= 0) {
            return <span className="text-muted-foreground">{DASH}</span>
          }
          return <span className="whitespace-nowrap text-xs">{formatTime(estimation)}</span>
        },
      },
      {
        id: "status",
        accessorFn: (row) => (row.completed ? 1 : 0),
        header: ({ column }) => <ColumnHeader label="Status" column={column} />,
        cell: ({ row }) => (
          <TaskCheckbox
            checked={row.original.completed}
            onCheckedChange={() => toggleTask(row.original.id)}
            priority={row.original.priority}
            aria-label={`Toggle ${row.original.title}`}
          />
        ),
      },
      {
        id: "owner",
        accessorFn: (row) => getOwnerDisplay(row.ownerId, EMPTY_USERS),
        header: ({ column }) => <ColumnHeader label="Owner" column={column} />,
        cell: ({ row }) => (
          <span className="whitespace-nowrap text-xs">
            {getOwnerDisplay(row.original.ownerId, EMPTY_USERS)}
          </span>
        ),
      },
    ],
    [labelsById, project, preferDayMonthFormat, use24HourTime, toggleTask],
  )

  const table = useReactTable({
    data: tasks,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  if (tasks.length === 0) {
    return (
      <div className="flex h-full min-h-32 w-full items-center justify-center p-8">
        <p className="text-sm text-muted-foreground">No tasks to display</p>
      </div>
    )
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead className="sticky top-0 z-10 bg-background">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => {
                const isSorted = header.column.getIsSorted()
                const ariaSort: React.AriaAttributes["aria-sort"] =
                  isSorted === "asc" ? "ascending" : isSorted === "desc" ? "descending" : "none"
                return (
                  <th
                    key={header.id}
                    scope="col"
                    aria-sort={ariaSort}
                    className="px-2 py-1 text-left font-medium"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b transition-colors hover:bg-accent/50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-2 py-1.5 align-middle">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

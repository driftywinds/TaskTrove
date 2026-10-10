/* eslint-disable @typescript-eslint/consistent-type-assertions -- constructs a minimal ViewState for the mapping test */
import { describe, it, expect } from "vitest";
import {
  filterTasksByAssignee,
  filterTasksByOwner,
  viewStateToFilterConfig,
  filterTasks,
} from "./filters";
import { createUserId, createTaskId } from "@tasktrove/types/id";
import type { Task } from "@tasktrove/types/core";
import type { ViewState } from "@tasktrove/types/core";

const USER_A = createUserId("11111111-1111-4111-8111-111111111111");
const USER_B = createUserId("22222222-2222-4222-8222-222222222222");

function task(overrides: Partial<Task>): Task {
  return {
    id: createTaskId("44444444-4444-4444-8444-444444444444"),
    title: "Test",
    completed: false,
    priority: 1,
    labels: [],
    subtasks: [],
    comments: [],
    createdAt: new Date("2024-06-01T12:00:00Z"),
    recurringMode: "dueDate",
    ...overrides,
  };
}

describe("filterTasksByAssignee", () => {
  it("matches tasks assigned to any of the given users", () => {
    const tasks = [
      task({ assignees: [USER_A] }),
      task({ assignees: [USER_B] }),
      task({ assignees: [] }),
    ];

    expect(filterTasksByAssignee(tasks, [USER_A])).toHaveLength(1);
    expect(filterTasksByAssignee(tasks, [USER_A, USER_B])).toHaveLength(2);
  });

  it("returns all tasks when the assignee list is empty", () => {
    const tasks = [task({ assignees: [USER_A] })];
    expect(filterTasksByAssignee(tasks, [])).toHaveLength(1);
  });
});

describe("filterTasksByOwner", () => {
  it("matches tasks owned by any of the given users", () => {
    const tasks = [
      task({ ownerId: USER_A }),
      task({ ownerId: USER_B }),
      task({}),
    ];

    expect(filterTasksByOwner(tasks, [USER_A])).toHaveLength(1);
    expect(filterTasksByOwner(tasks, [USER_A, USER_B])).toHaveLength(2);
  });

  it("returns all tasks when the owner list is empty", () => {
    const tasks = [task({ ownerId: USER_A })];
    expect(filterTasksByOwner(tasks, [])).toHaveLength(1);
  });
});

describe("viewStateToFilterConfig (assignee/owner)", () => {
  it("maps activeFilters.assignedTo/ownedBy into the filter config", () => {
    const viewState = {
      activeFilters: { assignedTo: [USER_A], ownedBy: [USER_B] },
    } as unknown as ViewState;

    const config = viewStateToFilterConfig(viewState);
    expect(config.assignedTo).toEqual([USER_A]);
    expect(config.ownedBy).toEqual([USER_B]);
  });
});

describe("filterTasks (assignee/owner)", () => {
  it("applies assignedTo and ownedBy as narrowing (AND) filters", () => {
    const tasks = [
      task({ assignees: [USER_A], ownerId: USER_B }), // matches both -> kept
      task({ assignees: [USER_A] }), // assignedTo only -> dropped by ownedBy
      task({ ownerId: USER_B }), // ownedBy only -> dropped by assignedTo
      task({}), // neither -> dropped
    ];

    // Filter dimensions narrow (AND), consistent with project/label/priority
    const result = filterTasks(tasks, {
      assignedTo: [USER_A],
      ownedBy: [USER_B],
    });
    expect(result).toHaveLength(1);
    expect(result[0]?.assignees).toEqual([USER_A]);
  });

  it("applies a single assignee filter as a union of assignments", () => {
    const tasks = [
      task({ assignees: [USER_A] }),
      task({ assignees: [USER_B] }),
      task({ assignees: [] }),
    ];

    expect(filterTasks(tasks, { assignedTo: [USER_A, USER_B] })).toHaveLength(
      2,
    );
  });
});

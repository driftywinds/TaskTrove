/**
 * Assigned-to-Me / Assigned-to-Others Views Test Suite
 *
 * Verifies the recovered Pro contracts for the two people views:
 * - assignedToMeTasksAtom:   tasks.filter(t => t.assignees?.includes(currentUser.id))
 * - assignedToOthersTasksAtom: t.ownerId === currentUser.id &&
 *                              t.assignees?.length > 0 &&
 *                              !t.assignees.includes(currentUser.id)
 * plus routing of `/assigned-to-me` and `/assigned-to-others` through
 * baseFilteredTasksAtom and the sidebar counts.
 *
 * The semantics were decoded from module 25748 of the official Pro image
 * (server + client builds independently confirmed).
 */

import { describe, it, expect, beforeEach, vi } from "vitest";
import { createStore } from "jotai";
import { QueryClient } from "@tanstack/react-query";
import {
  assignedToMeTasksAtom,
  assignedToOthersTasksAtom,
  baseFilteredTasksAtom,
} from "../data/tasks/filters";
import { queryClientAtom } from "../data/base/query";
import { currentUserIdAtom } from "../data/base/atoms";
import { pathnameAtom } from "../ui/navigation";
import { taskCountForViewAtom } from "../ui/task-counts";
import { TASKS_QUERY_KEY, USERS_QUERY_KEY } from "@tasktrove/constants";
import { DEFAULT_USER } from "@tasktrove/types/defaults";
import { createUserId } from "@tasktrove/types/id";
import { INBOX_PROJECT_ID } from "@tasktrove/types/constants";
import {
  TEST_TASK_ID_1,
  TEST_TASK_ID_2,
  TEST_TASK_ID_3,
  TEST_TASK_ID_4,
} from "../utils/test-helpers";
import type { Task, User } from "@tasktrove/types/core";

// Mock fetch globally
global.fetch = vi.fn();

const ME = createUserId("11111111-1111-4111-8111-111111111111");
const OTHER = createUserId("22222222-2222-4222-8222-222222222222");

const users: User[] = [
  { ...DEFAULT_USER, id: ME, username: "me", role: "admin" },
  { ...DEFAULT_USER, id: OTHER, username: "other", role: "user" },
];

function createTestTask(overrides: Partial<Task> = {}): Task {
  return {
    id: TEST_TASK_ID_1,
    title: "Test Task",
    description: "",
    completed: false,
    priority: 4,
    createdAt: new Date("2024-01-10T10:00:00.000Z"),
    labels: [],
    subtasks: [],
    comments: [],
    projectId: INBOX_PROJECT_ID,
    recurringMode: "dueDate",
    ...overrides,
  };
}

describe("assignedToMeTasksAtom / assignedToOthersTasksAtom", () => {
  let store: ReturnType<typeof createStore>;
  let queryClient: QueryClient;

  beforeEach(() => {
    store = createStore();
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });
    store.set(queryClientAtom, queryClient);
    vi.stubEnv("NODE_ENV", "development");
    vi.clearAllMocks();

    queryClient.setQueryData(USERS_QUERY_KEY, users);
    // currentUserIdAtom stays null -> userAtom falls back to the first user (ME)
  });

  it("assigned-to-me only includes tasks assigned to the current user", () => {
    queryClient.setQueryData(TASKS_QUERY_KEY, [
      createTestTask({ id: TEST_TASK_ID_1, assignees: [ME] }),
      createTestTask({ id: TEST_TASK_ID_2, assignees: [OTHER] }),
      createTestTask({ id: TEST_TASK_ID_3, assignees: [ME, OTHER] }),
      createTestTask({ id: TEST_TASK_ID_4, assignees: [] }),
    ]);

    const result = store.get(assignedToMeTasksAtom);
    expect(result).toHaveLength(2);
    expect(result.map((task) => task.id)).toEqual([
      TEST_TASK_ID_1,
      TEST_TASK_ID_3,
    ]);
  });

  it("assigned-to-me ignores tasks without an assignees list", () => {
    const withoutAssignees = createTestTask();
    queryClient.setQueryData(TASKS_QUERY_KEY, [withoutAssignees]);
    expect(withoutAssignees.assignees).toBeUndefined();
    expect(store.get(assignedToMeTasksAtom)).toHaveLength(0);
  });

  it("assigned-to-me follows the session user", () => {
    queryClient.setQueryData(TASKS_QUERY_KEY, [
      createTestTask({ id: TEST_TASK_ID_1, assignees: [OTHER] }),
    ]);
    store.set(currentUserIdAtom, OTHER);

    const result = store.get(assignedToMeTasksAtom);
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe(TEST_TASK_ID_1);
  });

  it("assigned-to-others includes owned tasks delegated to someone else", () => {
    queryClient.setQueryData(TASKS_QUERY_KEY, [
      // owned by me, delegated to other -> match
      createTestTask({
        id: TEST_TASK_ID_1,
        ownerId: ME,
        assignees: [OTHER],
      }),
      // owned by me but I am also an assignee -> no match
      createTestTask({
        id: TEST_TASK_ID_2,
        ownerId: ME,
        assignees: [ME, OTHER],
      }),
      // owned by me, no assignees -> no match
      createTestTask({ id: TEST_TASK_ID_3, ownerId: ME, assignees: [] }),
      // delegated but not owned by me -> no match
      createTestTask({
        id: TEST_TASK_ID_4,
        ownerId: OTHER,
        assignees: [ME],
      }),
    ]);

    const result = store.get(assignedToOthersTasksAtom);
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe(TEST_TASK_ID_1);
  });

  it("assigned-to-others excludes unowned tasks (recovered Pro semantics)", () => {
    queryClient.setQueryData(TASKS_QUERY_KEY, [
      createTestTask({ assignees: [OTHER] }),
    ]);
    expect(store.get(assignedToOthersTasksAtom)).toHaveLength(0);
  });
});

describe("baseFilteredTasksAtom routing for people views", () => {
  let store: ReturnType<typeof createStore>;
  let queryClient: QueryClient;

  beforeEach(() => {
    store = createStore();
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });
    store.set(queryClientAtom, queryClient);
    vi.stubEnv("NODE_ENV", "development");
    vi.clearAllMocks();
    queryClient.setQueryData(USERS_QUERY_KEY, users);
  });

  it("routes /assigned-to-me to assignedToMeTasksAtom", () => {
    queryClient.setQueryData(TASKS_QUERY_KEY, [
      createTestTask({ id: TEST_TASK_ID_1, assignees: [ME] }),
      createTestTask({ id: TEST_TASK_ID_2, assignees: [OTHER] }),
    ]);
    store.set(pathnameAtom, "/assigned-to-me");

    const result = store.get(baseFilteredTasksAtom);
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe(TEST_TASK_ID_1);
  });

  it("routes /assigned-to-others to assignedToOthersTasksAtom", () => {
    queryClient.setQueryData(TASKS_QUERY_KEY, [
      createTestTask({
        id: TEST_TASK_ID_1,
        ownerId: ME,
        assignees: [OTHER],
      }),
      createTestTask({ id: TEST_TASK_ID_2, assignees: [OTHER] }),
    ]);
    store.set(pathnameAtom, "/assigned-to-others");

    const result = store.get(baseFilteredTasksAtom);
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe(TEST_TASK_ID_1);
  });

  it("keeps other standard views working", () => {
    queryClient.setQueryData(TASKS_QUERY_KEY, [
      createTestTask({ id: TEST_TASK_ID_1 }),
      createTestTask({ id: TEST_TASK_ID_2, completed: true }),
    ]);
    store.set(pathnameAtom, "/all");

    expect(store.get(baseFilteredTasksAtom)).toHaveLength(2);
  });
});

describe("sidebar counts for people views", () => {
  let store: ReturnType<typeof createStore>;
  let queryClient: QueryClient;

  beforeEach(() => {
    store = createStore();
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });
    store.set(queryClientAtom, queryClient);
    vi.stubEnv("NODE_ENV", "development");
    vi.clearAllMocks();
    queryClient.setQueryData(USERS_QUERY_KEY, users);
  });

  it("counts incomplete, non-archived tasks per people view", () => {
    queryClient.setQueryData(TASKS_QUERY_KEY, [
      createTestTask({ id: TEST_TASK_ID_1, assignees: [ME] }),
      createTestTask({ id: TEST_TASK_ID_2, assignees: [ME], completed: true }),
      createTestTask({ id: TEST_TASK_ID_3, assignees: [ME], archived: true }),
      createTestTask({
        id: TEST_TASK_ID_4,
        ownerId: ME,
        assignees: [OTHER],
      }),
    ]);

    expect(store.get(taskCountForViewAtom("assigned-to-me"))).toBe(1);
    expect(store.get(taskCountForViewAtom("assigned-to-others"))).toBe(1);
  });
});

/**
 * New-task ownership tests
 *
 * Verifies the recovered Pro contract for `addTaskAtom` (module 25748):
 *   ownerId = provided ?? (settings.general.newTaskOwnership ?? "currentUser") === "currentUser"
 *     ? currentUser.id
 *     : undefined
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { atom, createStore } from "jotai";
import type { CreateTaskRequest } from "@tasktrove/types/api-requests";
import { createUserId } from "@tasktrove/types/id";

const CURRENT_USER_ID = createUserId("11111111-1111-4111-8111-111111111111");
const OTHER_USER_ID = createUserId("22222222-2222-4222-8222-222222222222");

const capturedPayloads: CreateTaskRequest[] = [];

// Mutable settings holder for the data/base/atoms module mock. The mock atom
// reads from it lazily, so tests can swap the general settings per case.
let mockSettings: { general: Record<string, unknown> } = { general: {} };

vi.mock("@tasktrove/atoms/utils/atom-helpers", () => ({
  namedAtom: <AtomType extends { debugLabel?: string }>(
    name: string,
    value: AtomType,
  ) => {
    value.debugLabel = name;
    return value;
  },
  createAtomWithStorage: vi.fn(() => atom(null)),
  handleAtomError: vi.fn(),
  toast: vi.fn(),
  log: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
  },
}));

vi.mock("@tasktrove/atoms/core/history", () => ({
  recordOperationAtom: atom(null, vi.fn()),
}));

vi.mock("@tasktrove/atoms/data/tasks/ordering", () => ({
  addTaskToSection: vi.fn(),
  removeTaskFromSection: vi.fn(),
  moveTaskWithinSection: vi.fn(),
  getOrderedTasksForProject: vi.fn(),
  getOrderedTasksForSection: vi.fn(),
}));

vi.mock("@tasktrove/atoms/core/notifications", () => ({
  notificationAtoms: {
    actions: {
      scheduleTask: atom(null, vi.fn()),
      cancelTask: atom(null, vi.fn()),
    },
  },
}));

vi.mock("@tasktrove/atoms/mutations/projects", () => ({
  updateProjectsMutationAtom: atom({ mutateAsync: vi.fn(async () => ({})) }),
}));

vi.mock("@tasktrove/atoms/mutations/rewards", () => ({
  awardTaskCompletedPointsAtom: atom(null, vi.fn()),
}));

vi.mock("@tasktrove/atoms/mutations/tasks", () => ({
  createTaskMutationAtom: atom({
    mutateAsync: vi.fn(async (payload: CreateTaskRequest) => {
      capturedPayloads.push(payload);
      return { taskIds: ["10000000-0000-4000-8000-000000000001"] };
    }),
  }),
  deleteTaskMutationAtom: atom({ mutateAsync: vi.fn(async () => ({})) }),
  updateTasksMutationAtom: atom({ mutateAsync: vi.fn(async () => ({})) }),
}));

vi.mock("@tasktrove/atoms/ui/audio", () => ({
  playSoundAtom: atom(null, vi.fn()),
}));

vi.mock("@tasktrove/atoms/data/base/atoms", () => {
  const settingsAtom = atom(() => mockSettings);
  settingsAtom.debugLabel = "settingsAtom";
  const userAtom = atom({
    id: "11111111-1111-4111-8111-111111111111",
  });
  userAtom.debugLabel = "userAtom";
  return {
    tasksAtom: atom([]),
    taskByIdAtom: atom(new Map()),
    projectsAtom: atom([]),
    userAtom,
    settingsAtom,
  };
});

import { addTaskAtom } from "../core/tasks";

describe("addTaskAtom new-task ownership", () => {
  let store: ReturnType<typeof createStore>;

  beforeEach(() => {
    capturedPayloads.length = 0;
    vi.clearAllMocks();
    store = createStore();
    mockSettings = { general: {} };
  });

  async function addTask(payload: Partial<CreateTaskRequest> = {}) {
    await store.set(addTaskAtom, { title: "New task", ...payload });
    return capturedPayloads[capturedPayloads.length - 1];
  }

  it("defaults the owner to the current user (newTaskOwnership unset)", async () => {
    const payload = await addTask();
    expect(payload?.ownerId).toBe(CURRENT_USER_ID);
  });

  it("assigns the current user when newTaskOwnership is 'currentUser'", async () => {
    mockSettings = { general: { newTaskOwnership: "currentUser" } };
    const payload = await addTask();
    expect(payload?.ownerId).toBe(CURRENT_USER_ID);
  });

  it("leaves the task unowned when newTaskOwnership is 'unassigned'", async () => {
    mockSettings = { general: { newTaskOwnership: "unassigned" } };
    const payload = await addTask();
    expect(payload?.ownerId).toBeUndefined();
  });

  it("keeps an explicitly provided ownerId regardless of settings", async () => {
    mockSettings = { general: { newTaskOwnership: "unassigned" } };
    const payload = await addTask({ ownerId: OTHER_USER_ID });
    expect(payload?.ownerId).toBe(OTHER_USER_ID);
  });
});

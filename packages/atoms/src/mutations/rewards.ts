/**
 * Rewards mutation atoms
 *
 * Contains mutation atoms for reward operations:
 * - Creating reward events (points + currency paths)
 *
 * Also provides the completion bridge atom that awards points when a task is
 * completed (Pro gamification), honoring the rewards-enabled toggle and the
 * daily point cap from productivity settings.
 */

import { atom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import { isToday } from "date-fns";
import type { CreateRewardEventRequest } from "@tasktrove/types/api-requests";
import type { CreateRewardEventResponse } from "@tasktrove/types/api-responses";
import { CreateRewardEventRequestSchema } from "@tasktrove/types/api-requests";
import { CreateRewardEventResponseSchema } from "@tasktrove/types/api-responses";
import { API_ROUTES } from "@tasktrove/types/constants";
import type {
  CurrencyRewardEvent,
  RewardEvent,
} from "@tasktrove/types/rewards";
import { REWARDS_QUERY_KEY, DEFAULT_REWARD_POINTS } from "@tasktrove/constants";
import { createMutation } from "./factory";
import type { RewardsResource } from "@tasktrove/atoms/data/base/query";
import {
  settingsAtom,
  currentUserIdAtom,
  rewardsAtom,
} from "@tasktrove/atoms/data/base/atoms";

// =============================================================================
// REWARD EVENT MUTATION ATOMS
// =============================================================================

/**
 * Create reward event mutation atom (POST /api/v1/rewards)
 *
 * Two paths handled by the server:
 * - points: no `currencyId` (fixed points per event)
 * - currency: `currencyId` + `amount` (wishlist, exchange, task reward)
 *
 * Optimistically appends the event; success invalidates the rewards cache so
 * the server-assigned id/timestamp replace the optimistic entry.
 */
export const createRewardEventMutationAtom = createMutation<
  CreateRewardEventResponse,
  CreateRewardEventRequest,
  RewardsResource,
  RewardEvent | CurrencyRewardEvent
>({
  method: "POST",
  operationName: "Created reward event",
  apiEndpoint: API_ROUTES.V1_REWARDS,
  resourceQueryKey: REWARDS_QUERY_KEY,
  defaultResourceValue: { rewardEvents: [], currencyRewardEvents: [] },
  responseSchema: CreateRewardEventResponseSchema,
  serializationSchema: CreateRewardEventRequestSchema,
  logModule: "rewards",
  testResponseFactory: (
    variables: CreateRewardEventRequest,
  ): CreateRewardEventResponse => ({
    success: true,
    eventId: uuidv4(),
    message: variables.currencyId
      ? "Currency reward event created successfully (test mode)"
      : "Reward event created successfully (test mode)",
  }),
  optimisticUpdateFn: (
    _variables: CreateRewardEventRequest,
    oldResource: RewardsResource,
    optimisticEvent?: RewardEvent | CurrencyRewardEvent,
  ): RewardsResource => {
    if (!optimisticEvent) {
      return oldResource;
    }
    if ("currencyId" in optimisticEvent) {
      return {
        ...oldResource,
        currencyRewardEvents: [
          ...oldResource.currencyRewardEvents,
          optimisticEvent,
        ],
      };
    }
    return {
      ...oldResource,
      rewardEvents: [...oldResource.rewardEvents, optimisticEvent],
    };
  },
});
createRewardEventMutationAtom.debugLabel = "createRewardEventMutationAtom";

// =============================================================================
// COMPLETION BRIDGE (PRO GAMIFICATION)
// =============================================================================

/**
 * Awards points for a completed task, if the productivity settings enable
 * rewards and the daily point cap has not been reached.
 *
 * This is a fire-and-forget action: reward failures never block task
 * completion. Wire it from `toggleTaskAtom` after a successful completion.
 */
export const awardTaskCompletedPointsAtom = atom(
  null,
  async (get, set, taskId: string) => {
    try {
      const settings = get(settingsAtom);
      const productivity = settings.productivity;
      if (!productivity?.rewardsEnabled) {
        return;
      }

      const currentUserId = get(currentUserIdAtom);
      if (!currentUserId) {
        return;
      }

      // Daily cap: skip awarding when the cap (points > 0) is reached
      const cap = productivity.dailyRewardPointCap ?? 0;
      if (cap > 0) {
        const rewards = get(rewardsAtom);
        const todayPoints = rewards.rewardEvents
          .filter(
            (event) =>
              event.userId === currentUserId && isToday(event.timestamp),
          )
          .reduce((sum, event) => sum + event.points, 0);
        if (todayPoints + DEFAULT_REWARD_POINTS > cap) {
          return;
        }
      }

      const createRewardEvent = get(createRewardEventMutationAtom);
      await createRewardEvent.mutateAsync({
        type: "TASK_COMPLETED",
        entityId: taskId,
      });
    } catch {
      // Rewards are best-effort; never block task completion.
    }
  },
);
awardTaskCompletedPointsAtom.debugLabel = "awardTaskCompletedPointsAtom";

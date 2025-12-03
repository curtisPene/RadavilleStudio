import { AnimationIds, type AnimationId } from "@/types/AnimationIds";
import { StateIds, type StateId } from "@/types/StateIds";

export const navStateMap: Record<StateId, AnimationId[]> = {
  [StateIds.NAV_OPEN]: [AnimationIds.NAV_OPEN],
  [StateIds.NAV_SETTLED]: [AnimationIds.NAV_SETTLED],
};

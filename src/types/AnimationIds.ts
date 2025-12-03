export const AnimationIds = {
  NAV_OPEN: "nav:open",
} as const;

export type AnimationId = (typeof AnimationIds)[keyof typeof AnimationIds];

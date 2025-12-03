export const AnimationIds = {
  NAV_OPEN: "nav:open",
  NAV_SETTLED: "nav:settled",
} as const;

export type AnimationId = (typeof AnimationIds)[keyof typeof AnimationIds];

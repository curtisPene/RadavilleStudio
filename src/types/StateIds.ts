export const StateIds = {
  NAV_OPEN: "navOpen",
  NAV_SETTLED: "navSettled",
} as const;

export type StateId = (typeof StateIds)[keyof typeof StateIds];

export const StateIds = {
  NAV_OPEN: "navOpen",
} as const;

export type StateId = (typeof StateIds)[keyof typeof StateIds];

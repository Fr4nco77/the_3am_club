export const PROVIDERS = ["telegram"] as const;
export type Provider = (typeof PROVIDERS)[number];

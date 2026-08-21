export const PROVIDERS = ["telegram"] as const;
export type Provider = (typeof PROVIDERS)[number];

// Asigna el proveedor activo o deja "" para modo local
export const currentProvider: Provider | "" = ""

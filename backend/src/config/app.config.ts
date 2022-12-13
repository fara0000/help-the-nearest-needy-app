export const serverPort = process.env.PORT_NEST ?? 3001;
export const host = process.env.HOST_NEST || "127.0.0.1";
export const isProduction = process.env.IS_PRODUCTION === "true";
export const isDev = process.env.NODE_ENV !== "production";
export const isTest = process.env.NODE_ENV === "test";
export const basePath = isProduction ? "" : "/app";

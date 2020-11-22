declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_APP_STAGE: "test" | "development" | "staging" | "production";
      NEXT_PUBLIC_APP_NAME: string;
      SENTRY_DSN?: string;
    }
  }
}

// Trick to make this a valid module:
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};

interface Env {
    NODE_ENV: "development" | "production" | "test" | "uat"
    /* ... add other env variables here ... */
  }
  
  declare global {
    namespace NodeJS {
      interface ProcessEnv extends Env { }
    }
  }
  
  export { }
  export type IEnv = Env
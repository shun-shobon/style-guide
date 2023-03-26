import type { TSESLint } from "@typescript-eslint/utils";

export function defineConfig<T extends TSESLint.Linter.Config>(config: T): T {
  return config;
}

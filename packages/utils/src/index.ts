import type { TSESLint } from "@typescript-eslint/utils";

export function defineConfig<T extends TSESLint.Linter.Config>(config: T): T {
  return config;
}

type Rule = "off" | "warn" | "error";
type RuleConfig = Rule | [Rule, ...Array<unknown>];

export interface Config {
  files: Array<string>;
  ignores: Array<string>;
  plugins: Record<string, unknown>;
  rules: Record<string, RuleConfig>;
}

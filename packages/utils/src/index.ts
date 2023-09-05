import type { TSESLint } from "@typescript-eslint/utils";

export function defineConfig<T extends TSESLint.Linter.Config>(config: T): T {
  return config;
}

interface LanguageOptions {
  ecmaVersion?: number | "latest";
  sourceType?: "module" | "commonjs" | "script";
  globals: Record<string, "readonly" | "writable" | "off">;
  parser?: unknown;
  parserOptions?: Record<string, unknown>;
}

interface LinterOptions {
  noInlineConfig: boolean;
  reportUnusedDisableDirectives: boolean;
}

type Rule = "off" | "warn" | "error";
type RuleConfig = Rule | [Rule, ...Array<unknown>];

export interface Config {
  files?: Array<string>;
  ignores?: Array<string>;
  languageOptions?: LanguageOptions;
  linterOptions?: LinterOptions;
  processor?: unknown;
  plugins?: Record<string, unknown>;
  rules?: Record<string, RuleConfig>;
  settings?: Record<string, unknown>;
}

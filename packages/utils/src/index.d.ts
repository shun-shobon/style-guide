export interface LanguageOptions {
  ecmaVersion?: number | "latest";
  sourceType?: "module" | "commonjs" | "script";
  globals: Record<string, "readonly" | "writable" | "off">;
  parser?: unknown;
  parserOptions?: Record<string, unknown>;
}

export interface LinterOptions {
  noInlineConfig: boolean;
  reportUnusedDisableDirectives: boolean;
}

export type Rule = "off" | "warn" | "error";
export type RuleConfig = Rule | [Rule, ...Array<unknown>];

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

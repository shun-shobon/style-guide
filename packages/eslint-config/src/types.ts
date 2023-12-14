import type { FlatESLintConfig, Rules } from "eslint-define-config";
import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";

export type Awaitable<T> = T | Promise<T>;

export interface ConfigItem
  extends Omit<FlatESLintConfig, "plugins" | "rules"> {
  /**
   * Relax plugins type limitation, as most of the plugins did not have correct type info yet.
   */
  plugins?: Record<string, any>;
  rules?: Partial<Rules>;
}

export interface OptionsConfig {
  /**
   * Enable .gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @see https://github.com/antfu/eslint-config-flat-gitignore
   * @default true
   */
  gitignore?: boolean | FlatGitignoreOptions;
}

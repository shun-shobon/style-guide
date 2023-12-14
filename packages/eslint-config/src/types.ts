import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";
import type { FlatESLintConfig } from "eslint-define-config";

export type Awaitable<T> = T | Promise<T>;

export interface ConfigItem extends Omit<FlatESLintConfig, "plugins"> {
  /**
   * Relax plugins type limitation, as most of the plugins did not have correct type info yet.
   */
  // eslint-disable-next-line typescript/no-explicit-any
  plugins?: Record<string, any>;
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

  /**
   * Enable TypeScript support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: boolean;
}

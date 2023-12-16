import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";
import type { FlatESLintConfig } from "eslint-define-config";

export type Awaitable<T> = T | Promise<T>;

export interface ConfigItem extends Omit<FlatESLintConfig, "plugins"> {
	/**
	 * Relax plugins type limitation, as most of the plugins did not have correct
	 * type info yet.
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
	 * @default true
	 * @see https://github.com/antfu/eslint-config-flat-gitignore
	 */
	gitignore?: boolean | FlatGitignoreOptions;

	/**
	 * Enable TypeScript support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	typescript?: boolean;

	/**
	 * Enable React support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	react?: boolean;

	/**
	 * Enable Next.js support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	next?: boolean;

	/**
	 * Enable Storybook support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	storybook?: boolean;
}

export interface OptionsHasTypeScript {
	/**
	 * Enable TypeScript support.
	 */
	typescript?: boolean;
}

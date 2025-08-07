import type { Linter } from "eslint";
import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";

import type { RuleOptions } from "./rules";

export type Awaitable<T> = T | Promise<T>;

export type Rules = Linter.RulesRecord & RuleOptions;

export interface ConfigItem extends Omit<Linter.Config, "plugins" | "rules"> {
	/**
	 * An object containing a name-value mapping of plugin names to plugin
	 * objects. When files is specified, these plugins are only available to the
	 * matching files.
	 */
	// eslint-disable-next-line typescript/no-explicit-any
	plugins?: Record<string, any>;

	/**
	 * An object containing the configured rules. When files or ignores are
	 * specified, these rule configurations are only available to the matching
	 * files.
	 */
	rules?: Rules;
}

export interface OptionsConfig
	extends OptionsComponentExts,
		OptionsDisableTypeCheckedFiles {
	/**
	 * Ignore files.
	 *
	 * @defaultValue some common ignore files
	 */
	ignores?: string[];

	/**
	 * Enable .gitignore support.
	 *
	 * Passing an object to configure the options.
	 *
	 * @defaultValue `true`
	 * @see https://github.com/antfu/eslint-config-flat-gitignore
	 */
	gitignore?: boolean | FlatGitignoreOptions;

	/**
	 * Enable TypeScript support.
	 *
	 * @defaultValue it will be auto-detected based on the dependencies.
	 */
	typescript?: boolean;

	/**
	 * Enable React support.
	 *
	 * @defaultValue it will be auto-detected based on the dependencies.
	 */
	react?: boolean;

	/**
	 * Enable Next.js support.
	 *
	 * @defaultValue it will be auto-detected based on the dependencies.
	 */
	next?: boolean;

	/**
	 * Enable Qwik support.
	 *
	 * @defaultValue it will be auto-detected based on the dependencies.
	 */
	qwik?: boolean;

	/**
	 * Enable Astro support.
	 *
	 * @defaultValue it will be auto-detected based on the dependencies.
	 */
	astro?: boolean;

	/**
	 * Enable Storybook support.
	 *
	 * @defaultValue it will be auto-detected based on the dependencies.
	 */
	storybook?: boolean;
}

export interface OptionsHasTypeScript {
	/**
	 * Enable TypeScript support.
	 */
	typescript?: boolean;
}

export interface OptionsComponentExts {
	/**
	 * Additional extensions for component files.
	 *
	 * @example Astro and Svelte
	 *
	 * ```ts
	 * {
	 * 	"componentExts": ["astro", "svelte"]
	 * }
	 * ```
	 *
	 * @defaultValue The default is `[]`, but it will be auto-detected based on the dependencies.
	 */
	componentExts?: string[];
}

export interface OptionsDisableTypeCheckedFiles {
	/**
	 * Glob patterns of files to disable type checking.
	 *
	 * @defaultValue `[]`
	 */
	disableTypeCheckedFiles?: string[];
}

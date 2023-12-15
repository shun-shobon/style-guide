import type { Options as BaseOptions } from "prettier";
import type { JsdocOptions } from "prettier-plugin-jsdoc";
import type { PluginOptions as TailwindcssOptions } from "prettier-plugin-tailwindcss";

export interface Options
	extends BaseOptions,
		Partial<JsdocOptions>,
		TailwindcssOptions {}

export interface Config extends Options {
	overrides?: {
		files: string | string[];
		excludeFiles?: string | string[];
		options?: Options;
	}[];
}

export interface OptionsConfig {
	/**
	 * Enable Tailwind CSS support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	tailwindcss?: boolean;

	/**
	 * Ignore files.
	 */
	ignoreFiles?: string[];
}

export interface OptionsIgnores {
	/**
	 * Ignore files.
	 */
	ignoreFiles?: string[];
}

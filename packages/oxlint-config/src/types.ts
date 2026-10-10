import type { OxlintConfig } from "oxlint";

export type Config = OxlintConfig;

export interface OptionsConfig {
	/**
	 * Ignore files.
	 */
	ignores?: string[];

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
	 * Enable Vitest support.
	 *
	 * @defaultValue it will be auto-detected based on the dependencies.
	 */
	vitest?: boolean;
}

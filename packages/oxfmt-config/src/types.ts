import type { OxfmtConfig } from "oxfmt";

export type Config = OxfmtConfig;

export interface OptionsConfig {
	/**
	 * Enable Tailwind CSS support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	tailwindcss?: boolean;
}

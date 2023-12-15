import type { Options as BaseOptions } from "prettier";
import type { JsdocOptions } from "prettier-plugin-jsdoc";

export interface Options extends BaseOptions, Partial<JsdocOptions> {}

export interface Config extends Options {
	overrides?: {
		files: string | string[];
		excludeFiles?: string | string[];
		options?: Options;
	}[];
}

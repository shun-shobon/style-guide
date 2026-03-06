import type { Config } from "../types";
import { resolve } from "../utils";

export function jsdoc(): Config {
	return {
		plugins: [resolve("prettier-plugin-jsdoc")],

		tsdoc: true,
		jsdocPreferCodeFences: true,
		jsdocCommentLineStrategy: "multiline",
	};
}

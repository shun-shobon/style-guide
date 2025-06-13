import type { Config } from "../types";

export function jsdoc(): Config {
	return {
		plugins: [import.meta.resolve("prettier-plugin-jsdoc")],

		tsdoc: true,
		jsdocPreferCodeFences: true,
		jsdocCommentLineStrategy: "multiline",
	};
}

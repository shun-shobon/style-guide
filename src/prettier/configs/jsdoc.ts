import type { Config } from "../types";
import { require } from "../utils";

export function jsdoc(): Config {
	return {
		plugins: [require.resolve("prettier-plugin-jsdoc")],

		tsdoc: true,
		jsdocPreferCodeFences: true,
		jsdocCommentLineStrategy: "multiline",
	};
}

import type { Config } from "../types";
import { resolve } from "../utils";

export function shunShobon(): Config {
	return {
		jsPlugins: [
			{
				name: "shun-shobon",
				specifier: resolve("@shun-shobon/oxlint-config/plugin"),
			},
		],
		rules: {
			// null・undefinedとの比較は`== null`/`!= null`に統一する
			"shun-shobon/nullish-comparison": "error",
		},
	};
}

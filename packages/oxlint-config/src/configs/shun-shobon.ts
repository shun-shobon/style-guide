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
			// nullとの比較は`== null`/`!= null`に統一する
			// undefinedのみを判定したい場合は`=== undefined`を使う
			"shun-shobon/nullish-comparison": "error",
		},
	};
}

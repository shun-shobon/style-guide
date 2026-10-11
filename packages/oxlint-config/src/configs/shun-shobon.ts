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

			// `React`の名前空間を使わず、`react`からの名前付きimportに統一する
			// `import React from "react"`や`import * as React from "react"`、importせずに使える`React.ReactNode`のような型参照を禁止する
			"shun-shobon/no-react-namespace": "error",

			// 無限ループは`for (;;)`ではなく`while (true)`で書く
			"shun-shobon/no-infinite-for": "error",
		},
	};
}

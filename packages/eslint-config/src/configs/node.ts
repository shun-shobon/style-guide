import { pluginNode } from "../plugins";
import type { ConfigItem } from "../types";

export function node(): ConfigItem[] {
	return [
		{
			name: "shun-shobon/node/setup",
			plugins: {
				// eslint-disable-next-line typescript/no-unsafe-assignment
				node: pluginNode,
			},
		},
		{
			name: "shun-shobon/node/rules",
			rules: {
				"node/no-deprecated-api": "error",
				"node/no-exports-assign": "error",
				"node/no-path-concat": "error",
				"node/no-process-exit": "error",
				"node/no-unpublished-bin": "error",
				"node/no-sync": "error",
				"node/process-exit-as-throw": "error",
				"node/shebang": "error",

				"node/prefer-global/console": "error",
				"node/prefer-global/text-decoder": "error",
				"node/prefer-global/text-encoder": "error",
				"node/prefer-global/url": "error",
				"node/prefer-global/url-search-params": "error",

				"node/prefer-promises/dns": "error",
				"node/prefer-promises/fs": "error",
			},
		},
	];
}

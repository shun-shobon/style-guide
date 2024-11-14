import { pluginRegexp } from "../plugins";
import type { ConfigItem } from "../types";

export function regexp(): ConfigItem[] {
	return [
		{
			name: "shun-shobon/regexp/setup",
			plugins: {
				regexp: pluginRegexp,
			},
		},
		{
			name: "shun-shobon/regexp/rules",
			rules: {
				// 推奨ルールを使用
				...pluginRegexp.configs["flat/recommended"].rules,
			},
		},
	];
}

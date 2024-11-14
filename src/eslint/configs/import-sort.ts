import { pluginImportSort } from "../plugins";
import type { ConfigItem } from "../types";

export function importSort(): ConfigItem[] {
	return [
		{
			name: "shun-shobon/importSort/setup",
			plugins: {
				"import-sort": pluginImportSort,
			},
		},
		{
			name: "shun-shobon/importSort/rules",
			rules: {
				// importをソートする
				"import-sort/imports": "warn",

				// exportをソートする
				"import-sort/exports": "warn",
			},
		},
	];
}

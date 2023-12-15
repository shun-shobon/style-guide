import { pluginImportSort } from "../plugins";
import type { ConfigItem } from "../types";

export function importSort(): ConfigItem[] {
	return [
		{
			plugins: {
				// eslint-disable-next-line typescript/no-unsafe-assignment
				"import-sort": pluginImportSort,
			},
			rules: {
				// importをソートする
				"import-sort/imports": "warn",

				// exportをソートする
				"import-sort/exports": "warn",
			},
		},
	];
}

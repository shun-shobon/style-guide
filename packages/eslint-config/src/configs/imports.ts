import { pluginImport } from "../plugins";
import type { ConfigItem } from "../types";
import { renameRules } from "../utils";

export function imports(): ConfigItem[] {
	return [
		{
			name: "shun-shobon/imports/setup",
			plugins: {
				import: pluginImport,
			},
		},
		{
			name: "shun-shobon/imports/rules",
			rules: {
				...renameRules(
					pluginImport.configs.recommended.rules,
					"import-x/",
					"import/",
				),

				// import先のモジュールが存在するかチェックしない
				// TSの型チェックで十分なため
				"import/namespace": "off",
				"import/no-unresolved": "off",

				// type import時に`import type { foo } from "foo"`を強制
				"import/consistent-type-specifier-style": ["warn", "prefer-top-level"],

				// import文を一番上に書くのを強制
				"import/first": "error",

				// 同じパスからのimportをまとめる
				"import/no-duplicates": "warn",

				// default import時に`{ default as foo } from "foo"`と書くのを警告
				"import/no-named-default": "warn",

				// import文のパスを簡略化する
				"import/no-useless-path-segments": ["warn", { noUselessIndex: true }],

				// 自分自身をimportするのを禁止
				"import/no-self-import": "error",
			},
		},
	];
}

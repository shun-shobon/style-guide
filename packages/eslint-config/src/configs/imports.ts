import type { Rules } from "eslint-define-config";

import { pluginImport } from "../plugins";
import type { ConfigItem, OptionsHasTypeScript } from "../types";

export function imports(options: OptionsHasTypeScript): ConfigItem[] {
	const { typescript = false } = options;

	return [
		{
			plugins: {
				// eslint-disable-next-line typescript/no-unsafe-assignment
				import: pluginImport,
			},
			settings: {
				"import/parsers": {
					"@typescript-eslint/parser": [".ts", ".tsx"],
				},
				"import/extensions": [
					".js",
					".jsx",
					...(typescript ? [".ts", ".tsx", ".d.ts"] : []),
				],
			},
		},
		{
			rules: {
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...(pluginImport.configs.recommended.rules as Rules),

				// type import時に`import type { foo } from "foo"`を強制
				"import/consistent-type-specifier-style": ["warn", "prefer-top-level"],

				// import文を一番上に書くのを強制
				"import/first": "error",

				// 同じパスからのimportをまとめる
				"import/no-duplicates": "warn",

				// default import時に`{ default as foo } from "foo"`と書くのを警告
				"import/no-named-default": "warn",

				// TypeScriptでエラーが出るので無効化
				"import/no-unresolved": "off",

				// import文のパスを簡略化する
				"import/no-useless-path-segments": ["warn", { noUselessIndex: true }],

				// 自分自身をimportするのを禁止
				"import/no-self-import": "error",
			},
		},
	];
}

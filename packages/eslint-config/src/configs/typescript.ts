import { GLOB_DTS, GLOB_SRC, GLOB_TS, GLOB_TSX } from "../globs";
import type { ConfigItem, OptionsComponentExts } from "../types";
import { renameRules } from "../utils";

export async function typescript(
	options: OptionsComponentExts = {},
): Promise<ConfigItem[]> {
	const { componentExts = [] } = options;

	const {
		plugin: pluginTypeScript,
		parser: parserTypeScript,
		configs: configsTypeScript,
	} = await import("typescript-eslint");

	return [
		{
			name: "shun-shobon/typescript/setup",
			plugins: {
				typescript: pluginTypeScript,
			},
		},
		{
			name: "shun-shobon/typescript/rules",
			files: [GLOB_SRC, ...componentExts.map((ext) => `**/*.${ext}`)],
			languageOptions: {
				parser: parserTypeScript,
				parserOptions: {
					sourceType: "module",
					EXPERIMENTAL_useProjectService: true,
				},
			},
			rules: {
				// 厳密なルール + 型チェックのルールを有効化
				...renameRules(
					// eslint-disable-next-line typescript/no-non-null-assertion
					configsTypeScript.strictTypeChecked.at(-1)!.rules!,
					"@typescript-eslint/",
					"typescript/",
				),

				// コーディング規約 + 型チェックのルールを有効化
				...renameRules(
					// eslint-disable-next-line typescript/no-non-null-assertion
					configsTypeScript.stylisticTypeChecked.at(-1)!.rules!,
					"@typescript-eslint/",
					"typescript/",
				),

				// exportされている関数は型の明示を必須にする
				"typescript/explicit-module-boundary-types": "warn",

				// 型をexportする際に`type`の付与を必須にする
				"typescript/consistent-type-exports": [
					"error",
					{
						fixMixedExportsWithInlineTypeSpecifier: true,
					},
				],

				// 型をimportする際に`type`の付与を必須にする
				"typescript/consistent-type-imports": "error",

				// `_`から始まる変数名以外の未使用変数を警告
				"typescript/no-unused-vars": [
					"warn",
					{
						varsIgnorePattern: "^_",
						argsIgnorePattern: "^_",
					},
				],

				// 副作用の可能性のあるtype importを警告
				"typescript/no-import-type-side-effects": "warn",

				// なるべくreadonlyを付与する
				"typescript/prefer-readonly": "warn",

				// `Promise`を返す関数は`async`を付与する
				"typescript/promise-function-async": "error",

				// ソートでは必ず比較関数を渡す
				"typescript/require-array-sort-compare": "error",

				// `return await`を使う
				// 一貫性のためと、awaitが無くなったときにasyncを外すのは面倒なため
				// また、スタックトレースが読みやすくなる
				"typescript/return-await": ["warn", "always"],

				"typescript/no-unnecessary-condition": [
					"warn",
					{ allowConstantLoopConditions: true },
				],

				// null assertion `!` を許可
				// 意外とnull assertionを使いたい場面があるため
				"typescript/non-null-assertion": "off",
			},
		},
		{
			name: "shun-shobon/typescript/disables/eslint-recommended",
			files: [GLOB_TS, GLOB_TSX, ...componentExts.map((ext) => `**/*.${ext}`)],
			rules: {
				// ESLintの推奨ルールからTypeScriptで検証可能なものを無効化
				// eslint-disable-next-line typescript/no-non-null-assertion
				...configsTypeScript.eslintRecommended.rules,
			},
		},
		{
			name: "shun-shobon/typescript/disables/dts",
			files: [GLOB_DTS],
			rules: {
				// `import`の重複を許可
				"import/no-duplicates": "off",

				// `///`での参照を許可
				"typescript/triple-slash-reference": "off",
			},
		},
	];
}

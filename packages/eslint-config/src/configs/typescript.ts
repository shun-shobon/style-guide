import { GLOB_DTS, GLOB_SRC, GLOB_TS, GLOB_TSX } from "../globs";
import type { ConfigItem, OptionsComponentExts } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function typescript(
	options: OptionsComponentExts = {},
): Promise<ConfigItem[]> {
	const { componentExts = [] } = options;

	const [pluginTypescript, parserTypescript] = await Promise.all([
		interopDefault(import("@typescript-eslint/eslint-plugin")),
		interopDefault(import("@typescript-eslint/parser")),
	]);

	return [
		{
			plugins: {
				typescript: pluginTypescript,
			},
		},
		{
			files: [GLOB_SRC, ...componentExts.map((ext) => `**/*.${ext}`)],
			languageOptions: {
				parser: parserTypescript,
				parserOptions: {
					sourceType: "module",
					EXPERIMENTAL_useProjectService: true,
				},
			},
			rules: {
				// 厳密なルール + 型チェックのルールを有効化
				...renameRules(
					// eslint-disable-next-line typescript/no-non-null-assertion
					pluginTypescript.configs["strict-type-checked"]!.rules!,
					"@typescript-eslint/",
					"typescript/",
				),

				// コーディング規約 + 型チェックのルールを有効化
				...renameRules(
					// eslint-disable-next-line typescript/no-non-null-assertion
					pluginTypescript.configs["stylistic-type-checked"]!.rules!,
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
			},
		},
		{
			files: [GLOB_TS, GLOB_TSX, ...componentExts.map((ext) => `**/*.${ext}`)],
			rules: {
				// ESLintの推奨ルールからTypeScriptで検証可能なものを無効化
				// eslint-disable-next-line typescript/no-non-null-assertion
				...pluginTypescript.configs["eslint-recommended"]!.overrides![0]!
					.rules!,
			},
		},
		{
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

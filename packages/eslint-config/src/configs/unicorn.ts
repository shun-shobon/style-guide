import { pluginUnicorn } from "../plugins";
import type { ConfigItem, Rules } from "../types";

export function unicorn(): ConfigItem[] {
	return [
		{
			name: "shun-shobon/unicorn/setup",
			plugins: {
				unicorn: pluginUnicorn,
			},
		},
		{
			name: "shun-shobon/unicorn/rules",
			rules: {
				...(pluginUnicorn.configs.recommended.rules as Rules),

				// Prettierで整形できるルールは無効化
				"unicorn/empty-brace-spaces": "off",
				"unicorn/no-nested-ternary": "off",
				"unicorn/number-literal-case": "off",
				"unicorn/no-leading-empty-lines": "off",

				// prettier-plugin-jsdocが付与する行頭の`*`と競合するため無効化
				"unicorn/no-asterisk-prefix-in-documentation-comments": "off",

				// 同等のルールを有効化しているため無効化
				// `operator-assignment`と`typescript/require-array-sort-compare`で検出できる
				"unicorn/operator-assignment": "off",
				"unicorn/require-array-sort-compare": "off",

				// unicornの推奨ルールから不要なものを無効化

				// `export default defineConfig()`のような設定ファイルの定型を検出してしまうため無効化
				"unicorn/no-top-level-side-effects": "off",

				// コンポーネント内の関数など、スコープを小さくしておきたい場合があるので無効化
				"unicorn/consistent-function-scoping": "off",

				// ファイルの名前はコンポーネントなどで形式が変化するため無効化
				"unicorn/filename-case": "off",

				// 直接関数を渡したほうが簡潔に書ける場合があるので無効化
				"unicorn/no-array-callback-reference": "off",

				// `.forEach()`のほうが簡潔に書ける場合があるので無効化
				"unicorn/no-for-each": "off",

				// `.reduce()`/`.reduceRight()`は使ったほうが簡潔に書ける場合があるので無効化
				"unicorn/no-array-reduce": "off",

				// 否定形の方が簡潔に書ける場合があるので無効化
				"unicorn/no-negated-condition": "off",

				// nullも使う場合があるので無効化
				"unicorn/no-null": "off",

				// undefinedを使いたい場合があるので無効化
				"unicorn/no-useless-undefined": "off",

				// CommonJSを使う場合もあるため無効化
				"unicorn/prefer-module": "off",

				// `[...array].map()`は~~ダサい~~ので無効化
				"unicorn/prefer-spread": "off",

				// 略語の方が簡潔に書ける場合があるので無効化
				"unicorn/name-replacements": "off",

				// switch文のcase節を常にブロックにするのは冗長なので必要なときのみブロックにする
				"unicorn/switch-case-braces": ["warn", "avoid"],
			},
		},
	];
}

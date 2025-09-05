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

				// unicornの推奨ルールから不要なものを無効化

				// コンポーネント内の関数など、スコープを小さくしておきたい場合があるので無効化
				"unicorn/consistent-function-scoping": "off",

				// ファイルの名前はコンポーネントなどで形式が変化するため無効化
				"unicorn/filename-case": "off",

				// 直接関数を渡したほうが簡潔に書ける場合があるので無効化
				"unicorn/no-array-callback-reference": "off",

				// `.forEach()`のほうが簡潔に書ける場合があるので無効化
				"unicorn/no-array-for-each": "off",

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
				"unicorn/prevent-abbreviations": "off",

				// switch文のcase節を常にブロックにするのは冗長なので必要なときのみブロックにする
				"unicorn/switch-case-braces": ["warn", "avoid"],
			},
		},
	];
}

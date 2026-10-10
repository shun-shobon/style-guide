import type { Config } from "../types";

export function base(): Config {
	return {
		// `plugins`を指定すると既定のプラグインが上書きされるため、既定のものも列挙する
		plugins: ["eslint", "typescript", "unicorn", "oxc"],
		categories: {
			correctness: "error",
			suspicious: "error",
			pedantic: "error",
			perf: "warn",
			nursery: "error",
		},
		options: {
			reportUnusedDisableDirectives: "warn",
		},
		rules: {
			// `===`/`!==`での比較を強制する
			// ただし`== null`でのnullチェックは許可する
			"eqeqeq": ["error", "always", { null: "ignore" }],

			// `!!a`や`+a`などの暗黙の型変換を禁止する
			"no-implicit-coercion": "error",

			// ファイルや関数の行数、ネストの深さなどの上限を設けるルール
			// 上限は機械的に決められないため無効化
			"max-classes-per-file": "off",
			"max-depth": "off",
			"max-lines": "off",
			"max-lines-per-function": "off",
			"max-nested-callbacks": "off",

			// 行末コメントを禁止するルール
			// 行末にコメントを書きたい場合があるので無効化
			"no-inline-comments": "off",

			// 識別子の先頭や末尾の`_`を禁止するルール
			// プライベートな値を`_`で表す場合があるので無効化
			"no-underscore-dangle": "off",

			// `if (!a) {} else {}`のような否定の条件を禁止するルール
			// 否定形の方が簡潔に書ける場合があるので無効化
			"no-negated-condition": "off",
			"unicorn/no-negated-condition": "off",

			// ループ内での`await`を禁止するルール
			// 順番に実行したい非同期処理もあるので無効化
			"no-await-in-loop": "off",

			// `unicorn/no-lonely-if`/`unicorn/new-for-builtins`/`unicorn/no-instanceof-builtins`と重複するため無効化
			"no-lonely-if": "off",
			"no-new-wrappers": "off",
			"unicorn/no-instanceof-array": "off",

			// 外側の変数を使わない関数を外側のスコープに移すよう求めるルール
			// コンポーネント内の関数など、スコープを小さくしておきたい場合があるので無効化
			"unicorn/consistent-function-scoping": "off",

			// `.map(fn)`のように関数を直接渡すことを禁止するルール
			// 直接渡したほうが簡潔に書ける場合があるので無効化
			"unicorn/no-array-callback-reference": "off",

			// `return undefined`などの`undefined`の明示を禁止するルール
			// undefinedを明示したい場合があるので無効化
			"unicorn/no-useless-undefined": "off",
		},
	};
}

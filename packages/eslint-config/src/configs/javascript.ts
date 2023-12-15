import globals from "globals";

import { configJs } from "../plugins";
import type { ConfigItem } from "../types";

export function javascript(): ConfigItem[] {
	return [
		{
			languageOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				globals: {
					...globals.es2021,
					...globals.browser,
					...globals.node,
				},
				parserOptions: {
					ecmaFeatures: {
						jax: true,
					},
					ecmaVersion: "latest",
					sourceType: "module",
				},
			},
			rules: {
				...configJs.configs.recommended.rules,

				// Arrayの関数に`return`を忘れないようにする
				"array-callback-return": "error",

				// 常にtrue/falseになる式や短絡評価されない式を警告
				"no-constant-binary-expression": "warn",

				// コンストラクタの戻り値を許可しない
				"no-constructor-return": "error",

				// Symbol/BigIntでnewしない
				"no-new-native-nonconstructor": "error",

				// `Promise`のコンストラクタの戻り値を許可しない
				"no-promise-executor-return": "error",

				// 自分自身を比較する式を許可しない
				// NaNチェックは`Number.isNaN()`を使う
				"no-self-compare": "error",

				// ループの条件式の変数をループ内で変更していない場合に警告
				"no-unmodified-loop-condition": "warn",

				// 1回しかループしないループを警告
				"no-unreachable-loop": "warn",

				// 未使用のプライベートクラスメンバーを警告
				"no-unused-private-class-members": "warn",

				// `_`から始まる変数名以外の未使用変数を警告
				"no-unused-vars": [
					"warn",
					{
						varsIgnorePattern: "^_",
						argsIgnorePattern: "^_",
					},
				],

				// 競合が発生する可能性のある値の代入を許可しない
				"require-atomic-updates": "error",

				// 循環的複雑度を15以上を警告
				"complexity": ["warn", 15],

				// switch文のデフォルトケースを最後にする
				"default-case-last": "error",

				// デフォルト引数を最後にする
				"default-param-last": "error",

				// nullチェックを除いて厳密でない等価演算子を許可しない
				"eqeqeq": ["error", "always", { null: "ignore" }],

				// getter/setterをグループ化
				"grouped-accessor-pairs": ["error", "setBeforeGet"],

				// `console.log()`/`alert`を警告
				"no-alert": "warn",
				"no-console": ["warn", { allow: ["warn", "error"] }],

				// `else { return }`を警告
				"no-else-return": "warn",

				// `!!`や`~`を使った短縮型変換を許可しない
				"no-implicit-coercion": "error",

				// 不要なifのネストを許可しない
				"no-lonely-if": "error",

				// 複数の代入を許可しない
				"no-multi-assign": "error",

				// 複数行文字列を警告
				"no-multi-str": "warn",

				// `Function`/`Object`/`String`/`Number`/`Boolean`のコンストラクタを許可しない
				"no-new-func": "error",
				"no-new-object": "error",
				"no-new-wrappers": "error",

				// 関数の引数を再代入することを許可しない
				"no-param-reassign": "error",

				// インクリメント/デクリメント演算子を許可しない
				"no-plusplus": "error",

				// `throw` に文字列を渡さない
				"no-throw-literal": "error",

				// 不要な三項演算子を警告
				"no-unneeded-ternary": "warn",

				// 未使用の式を警告
				"no-unused-expressions": "warn",

				// 意味の無いコンストラクタを警告
				"no-useless-constructor": "warn",

				// 意味の無い`return`を警告
				"no-useless-return": "warn",

				// `var`を許可しない
				"no-var": "error",

				// オブジェクトのショートハンド記法を使用していない場合は警告
				"object-shorthand": "warn",

				// 演算子のショートハンド記法を使用していない場合は警告
				"operator-assignment": "warn",

				// コールバック関数をアロー関数にする
				"prefer-arrow-callback": "warn",

				// `const`を使用する
				"prefer-const": "warn",

				// 名前付きキャプチャグループを使用する
				"prefer-named-capture-group": "warn",

				// `Number.parseInt()`を使用する
				"prefer-numeric-literals": "error",

				// `hasOwnProperty`の使用を許可しない
				"prefer-object-has-own": "error",

				// スプレッド構文を使用する
				"prefer-object-spread": "warn",

				// `Promise`の`reject`には`Error`オブジェクトを渡す
				"prefer-promise-reject-errors": "error",

				// なるべく正規表現リテラルを使用する
				"prefer-regex-literals": "warn",

				// `arguments`/`.apply()`の代わりに`...args`を使用する
				"prefer-rest-params": "warn",
				"prefer-spread": "warn",

				// `parseInt`には基数を渡す
				"radix": "error",

				// 正規表現のユニコードフラグを使用する
				"require-unicode-regexp": "warn",

				// シンボルに名前を付ける
				"symbol-description": "warn",
			},
		},
	];
}

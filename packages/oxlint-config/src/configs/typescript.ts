import { GLOB_TESTS } from "../globs";
import type { Config } from "../types";

export function typescript(): Config {
	return {
		options: {
			typeAware: true,
		},
		rules: {
			// 型のみのimportに`import type`を強制する
			"typescript/consistent-type-imports": "error",

			// unionやenumに対するswitch文で、すべてのケースを網羅することを強制する
			// `default`節があれば網羅したものとみなす
			"typescript/switch-exhaustiveness-check": [
				"error",
				{ considerDefaultExhaustiveForUnions: true },
			],

			// `.catch()`のコールバックの引数を`unknown`型で受けることを強制する
			"typescript/use-unknown-in-catch-callback-variable": "error",

			// 戻り値が`void`の式を値として使うことを禁止する
			// `() => f()`のようなアロー関数の省略記法は許可する
			"typescript/no-confusing-void-expression": [
				"error",
				{ ignoreArrowShorthand: true },
			],

			// 型情報を使うtypescript側のルールと重複するため無効化
			"no-implied-eval": "off",
			"no-throw-literal": "off",
			"prefer-promise-reject-errors": "off",
			"require-await": "off",

			// 未定義の変数の参照を禁止するルール
			// TypeScriptの型チェックで検出できるため無効化
			"no-undef": "off",

			// 引数の型をすべてreadonlyにするよう求めるルール
			// 現実的ではないため無効化
			"typescript/prefer-readonly-parameter-types": "off",

			// `void`を返すべき箇所で値を返すことを禁止するルール
			// 値を返す後片付け関数など、戻り値を無視するだけのコールバックまで検出するため無効化
			"typescript/strict-void-return": "off",
		},
		overrides: [
			{
				files: GLOB_TESTS,
				rules: {
					// テストではモックを作るために型アサーションを使う
					"typescript/no-unsafe-type-assertion": "off",

					// `expect.any()`などの非対称マッチャーは`any`を返す
					"typescript/no-unsafe-assignment": "off",

					// 非同期の関数を差し替えるモックは`await`が無くても`async`で書く
					"typescript/require-await": "off",
				},
			},
		],
	};
}

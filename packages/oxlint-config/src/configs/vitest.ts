import type { Config } from "../types";

export function vitest(): Config {
	return {
		plugins: ["vitest"],
		rules: {
			// テスト内での`if`などの条件分岐を禁止するルール
			// テストの準備で条件分岐を使いたい場合があるので無効化
			"vitest/no-conditional-in-test": "off",

			// `vi.fn()`に型引数を求めるルール
			// `vi.fn()`の型は利用箇所から推論できる場合が多いので無効化
			"vitest/require-mock-type-parameters": "off",
		},
	};
}

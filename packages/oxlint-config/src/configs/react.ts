import type { Config } from "../types";

export function react(): Config {
	return {
		plugins: ["react", "jsx-a11y"],
		settings: {
			"jsx-a11y": {
				polymorphicPropName: "as",
			},
		},
		rules: {
			// JSXを使うファイルで`React`のimportを求めるルール
			// 新しいJSX変換では`React`のimportが不要なため無効化
			"react/react-in-jsx-scope": "off",
		},
	};
}

import type { Rules } from "eslint-define-config";

import { pluginJsxA11y } from "../plugins";
import type { ConfigItem } from "../types";

export function jsxA11y(): ConfigItem[] {
	return [
		{
			plugins: {
				// eslint-disable-next-line typescript/no-unsafe-assignment
				"jsx-a11y": pluginJsxA11y,
			},
			settings: {
				"jsx-a11y": {
					polymorphicPropName: "as",
				},
			},
			rules: {
				// JSX A11yの厳格なルールを有効化
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...(pluginJsxA11y.configs.strict.rules as Rules),

				// 曖昧なリンクのテキストを許可しない
				"jsx-a11y/anchor-ambiguous-text": "error",

				// インタラクティブな要素にラベルが付いていないことを許可しない
				"jsx-a11y/control-has-associated-label": "error",

				// html要素にlang属性が付与されていないことを許可しない
				"jsx-a11y/lang": "error",

				// フォーカス可能な要素に `aria-hidden` 属性を付与することを許可しない
				"jsx-a11y/no-aria-hidden-on-focusable": "error",
			},
		},
	];
}

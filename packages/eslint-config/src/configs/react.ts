import { GLOB_JSX, GLOB_TSX } from "../globs";
import { pluginJsxA11y } from "../plugins";
import type { ConfigItem, OptionsHasTypeScript, Rules } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function react(
	options: OptionsHasTypeScript = {},
): Promise<ConfigItem[]> {
	const { typescript = false } = options;

	const pluginReact = await interopDefault(
		import("@eslint-react/eslint-plugin"),
	);

	const strictConfig = pluginReact.configs.strict;

	return [
		{
			name: "shun-shobon/react/setup",
			plugins: {
				react: pluginReact,
			},
			settings: { ...strictConfig.settings },
		},
		{
			name: "shun-shobon/react/rules",
			files: [GLOB_JSX, GLOB_TSX],
			rules: {
				// reactの厳格なルールを有効化
				...renameRules(strictConfig.rules!, "@eslint-react/", "react/"),

				// eslint-plugin-react-hooksの推奨ルールに含まれていたものを有効化
				"react/globals": "error",
				"react/immutability": "error",
				"react/refs": "error",

				// JSX A11yの厳格なルールを有効化
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...(pluginJsxA11y.configs.strict.rules as Rules),

				// その他必要なものを有効化

				// `React.Fragment`を省略可能な場合は省略する
				// ただし、フラグメントのみの場合は許可する
				"react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],

				...(!typescript && {
					// HTMLの属性名として認識されていない属性名を許可しない
					// TSでは型チェックで検出できるため不要
					"react/dom-no-unknown-property": "error",
				}),

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

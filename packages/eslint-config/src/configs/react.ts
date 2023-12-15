import { GLOB_JSX, GLOB_TSX } from "../globs";
import type { ConfigItem, OptionsHasTypeScript } from "../types";
import { interopDefault } from "../utils";

export async function react(
	options: OptionsHasTypeScript = {},
): Promise<ConfigItem[]> {
	const { typescript = true } = options;

	// eslint-disable-next-line typescript/no-unsafe-assignment
	const [pluginReact, pluginReactHooks, pluginJsxA11y] = await Promise.all([
		// @ts-expect-error: This package don't have types
		interopDefault(import("eslint-plugin-react")),
		// @ts-expect-error: This package don't have types
		interopDefault(import("eslint-plugin-react-hooks")),
		// @ts-expect-error: This package don't have types
		interopDefault(import("eslint-plugin-jsx-a11y")),
	]);

	return [
		{
			plugins: {
				// eslint-disable-next-line typescript/no-unsafe-assignment
				"react": pluginReact,
				// eslint-disable-next-line typescript/no-unsafe-assignment
				"react-hooks": pluginReactHooks,
				// eslint-disable-next-line typescript/no-unsafe-assignment
				"jsx-a11y": pluginJsxA11y,
			},
			settings: {
				react: {
					version: "detect",
				},
			},
		},
		{
			files: [GLOB_JSX, GLOB_TSX],
			// eslint-disable-next-line typescript/no-unsafe-assignment
			rules: {
				// reactの推奨ルールを有効化
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...pluginReact.configs.recommended.rules,

				// React v17以降のJSX Runtimeを使う場合の不要なルールを無効化
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...pluginReact.configs["jsx-runtime"].rules,

				// React Hooksの推奨ルールを有効化
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...pluginReactHooks.configs.recommended.rules,

				// JSX A11yの推奨ルールを有効化
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...pluginJsxA11y.configs.recommended.rules,

				// その他必要なものを有効化

				// `onClick`などのイベントハンドラーの命名規則をチェック
				"react/jsx-handler-names": "warn",

				// ContextのProviderに即値を渡さないようにする
				// 即値で渡すと、Providerが含まれるコンポーネントの再描画時に新しい値が渡されてしまい、再描画が発生する
				"react/jsx-no-constructed-context-values": "warn",

				// `React.Fragment`を省略可能な場合は省略する
				// ただし、フラグメントのみの場合は許可する
				"react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],

				// rel 属性の値をチェック
				"react/no-invalid-html-attribute": "warn",

				// propsのデフォルト値としてobjectやarrayのリテラルを使用しないようにする
				// 使用してしまうと、再描画が発生する可能性がある
				"react/no-object-type-as-default-prop": "warn",

				// コンポーネント内でコンポーネントを定義するのを許可しない
				"react/no-unstable-nested-components": "error",

				// 曖昧なリンクのテキストを許可しない
				"jsx-a11y/anchor-ambiguous-text": "error",

				// インタラクティブな要素にラベルが付いていないことを許可しない
				"jsx-a11y/control-has-associated-label": "error",

				// フォーカス可能な要素に `aria-hidden` 属性を付与することを許可しない
				"jsx-a11y/no-aria-hidden-on-focusable": "error",

				...(typescript
					? {
							// TypeScriptの型チェックで検出できるものは無効化

							// propTypesはTSで代替できるので無効化
							"react/prop-types": "off",

							// HTMLの属性名として認識されていない属性名を許可
							// TSで型チェックしているので不要
							"react/no-unknown-property": "off",
						}
					: {}),
			},
		},
	];
}
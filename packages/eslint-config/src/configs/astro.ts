import type { Rules } from "eslint-define-config";

import { GLOB_ASTRO } from "../globs";
import type { ConfigItem, OptionsHasTypeScript } from "../types";
import { interopDefault } from "../utils";

export async function astro(
	options: OptionsHasTypeScript = {},
): Promise<ConfigItem[]> {
	const { typescript = true } = options;

	const [pluginAstro, parserAstro] = await Promise.all([
		interopDefault(import("eslint-plugin-astro")),
		interopDefault(import("astro-eslint-parser")),
	]);

	return [
		{
			name: "shun-shobon/astro/plugins",
			plugins: {
				astro: pluginAstro,
			},
		},
		{
			name: "shun-shobon/astro/rules",
			files: [GLOB_ASTRO],
			languageOptions: {
				parser: parserAstro,
				parserOptions: {
					// @ts-expect-error: This is valid
					parser: typescript
						? await interopDefault(import("@typescript-eslint/parser"))
						: undefined,
					extraFileExtensions: [".astro"],
				},
				globals: {
					Astro: "readonly",
					Fragment: "readonly",
				},
			},
			processor:
				pluginAstro.processors[typescript ? "client-side-ts" : "astro"],
			rules: {
				// Astroの推奨ルールを有効化
				...(pluginAstro.configs.recommended.at(-1)!.rules as Rules),

				// Astroのjsx-a11yの拡張ルール(strict)を有効化
				...(pluginAstro.configs["jsx-a11y-strict"].at(-1)!.rules as Rules),

				// 曖昧なリンクのテキストを許可しない
				"astro/jsx-a11y/anchor-ambiguous-text": "error",

				// インタラクティブな要素にラベルが付いていないことを許可しない
				"astro/jsx-a11y/control-has-associated-label": "error",

				// html要素にlang属性が付与されていないことを許可しない
				"astro/jsx-a11y/lang": "error",

				// フォーカス可能な要素に `aria-hidden` 属性を付与することを許可しない
				"astro/jsx-a11y/no-aria-hidden-on-focusable": "error",
			},
		},
	];
}

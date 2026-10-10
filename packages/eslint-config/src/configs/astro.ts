import { GLOB_ASTRO } from "../globs";
import type { ConfigItem, OptionsHasTypeScript, Rules } from "../types";
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

				// astro/jsx-a11y/* はeslint-plugin-jsx-a11yを利用者のプロジェクトからしか解決できず、
				// このパッケージの依存として入れたものを読み込めないため有効化しない
			},
		},
	];
}

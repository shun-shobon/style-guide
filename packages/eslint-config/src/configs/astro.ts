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
			plugins: {
				astro: pluginAstro,
			},
		},
		{
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
			},
			rules: {
				// Astroの推奨ルールを有効化
				...(pluginAstro.configs.recommended.rules as unknown as Rules),

				// Astroのjsx-a11yの拡張ルール(strict)を有効化
				// @ts-expect-error: This is valid
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...(pluginAstro.configs["jsx-a11y-strict"].rules as Rules),
			},
		},
	];
}

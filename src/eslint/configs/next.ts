import { GLOB_SRC } from "../globs";
import type { ConfigItem } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function next(): Promise<ConfigItem[]> {
	const pluginNext = await interopDefault(import("@next/eslint-plugin-next"));

	return [
		{
			name: "shun-shobon/next/setup",
			plugins: {
				next: pluginNext,
			},
		},
		{
			name: "shun-shobon/next/rules",
			files: [GLOB_SRC],
			rules: {
				// Next.jsの推奨ルールを有効化
				...renameRules(
					pluginNext.configs.recommended.rules,
					"@next/next/",
					"next/",
				),

				// Next.jsの更に厳格なルールを有効化
				...renameRules(
					pluginNext.configs["core-web-vitals"].rules,
					"@next/next/",
					"next/",
				),

				// `img`要素を使う場合もあるので無効化
				"next/no-img-element": "off",
			},
		},
	];
}

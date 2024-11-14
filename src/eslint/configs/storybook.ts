import { GLOB_STORYBOOK, GLOB_STORYBOOK_CONFIG } from "../globs";
import type { ConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function storybook(): Promise<ConfigItem[]> {
	const pluginStorybook = await interopDefault(
		import("eslint-plugin-storybook"),
	);

	return [
		{
			name: "shun-shobon/storybook/setup",
			plugins: {
				storybook: pluginStorybook,
			},
		},
		{
			name: "shun-shobon/storybook/rules",
			files: [GLOB_STORYBOOK],
			rules: {
				// Storybookの推奨ルールから拝借
				"import/no-anonymous-default-export": "off",
				"storybook/await-interactions": "error",
				"storybook/context-in-play-function": "error",
				"storybook/default-exports": "error",
				"storybook/hierarchy-separator": "warn",
				"storybook/no-redundant-story-name": "warn",
				"storybook/prefer-pascal-case": "warn",
				"storybook/story-exports": "error",
				"storybook/use-storybook-expect": "error",
				"storybook/use-storybook-testing-library": "error",
			},
		},
		// Storybookの設定ファイルへのルール
		{
			name: "shun-shobon/storybook/config-rules",
			files: [GLOB_STORYBOOK_CONFIG],
			rules: {
				"storybook/no-uninstalled-addons": "error",
			},
		},
	];
}

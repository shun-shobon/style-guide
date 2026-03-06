import type { Config } from "../types";

export function base(): Config {
	return {
		useTabs: true,
		quoteProps: "consistent",

		// This is the default, but VSCode's Prettier plugin doesn't respect it.
		trailingComma: "all",

		overrides: [
			{
				files: ["tsconfig.json", "jsconfig.json"],
				options: {
					parser: "jsonc",
				},
			},
		],
	};
}

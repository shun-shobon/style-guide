import type { Config } from "../types";

export function astro(): Config {
	return {
		plugins: [import.meta.resolve("prettier-plugin-astro")],

		overrides: [
			{
				files: ["*.astro"],
				options: {
					parser: "astro",
				},
			},
		],
	};
}

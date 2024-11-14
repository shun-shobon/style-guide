import type { Config } from "../types";
import { require } from "../utils";

export function astro(): Config {
	return {
		plugins: [require.resolve("prettier-plugin-astro")],

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

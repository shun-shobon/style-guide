import type { Config } from "../types";
import { resolve } from "../utils";

export function astro(): Config {
	return {
		plugins: [resolve("prettier-plugin-astro")],

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

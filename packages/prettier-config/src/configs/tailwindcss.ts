import type { Config } from "../types";
import { resolve } from "../utils";

export function tailwindcss(): Config {
	return {
		plugins: [resolve("prettier-plugin-tailwindcss")],

		tailwindFunctions: ["twMerge", "clsx"],
	};
}

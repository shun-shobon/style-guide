import type { Config } from "../types";

export function tailwindcss(): Config {
	return {
		plugins: [import.meta.resolve("prettier-plugin-tailwindcss")],

		tailwindFunctions: ["twMerge", "clsx"],
	};
}

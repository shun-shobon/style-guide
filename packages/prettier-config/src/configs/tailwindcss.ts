import type { Config } from "../types";
import { require } from "../utils";

export function tailwindcss(): Config {
	return {
		plugins: [require.resolve("prettier-plugin-tailwindcss")],

		tailwindFunctions: ["twMerge", "clsx"],
	};
}

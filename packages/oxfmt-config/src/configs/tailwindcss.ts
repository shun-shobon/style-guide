import type { Config } from "../types";

export function tailwindcss(): Config {
	return {
		sortTailwindcss: {
			functions: ["clsx", "cn", "cva", "tw", "twMerge"],
		},
	};
}

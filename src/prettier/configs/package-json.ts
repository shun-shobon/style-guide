import type { Config } from "../types";

export function packageJson(): Config {
	return {
		plugins: [import.meta.resolve("prettier-plugin-pkg")],
	};
}

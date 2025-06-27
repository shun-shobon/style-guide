import type { Config } from "../types";
import { resolve } from "../utils";

export function packageJson(): Config {
	return {
		plugins: [resolve("prettier-plugin-pkg")],
	};
}

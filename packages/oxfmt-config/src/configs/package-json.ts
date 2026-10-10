import type { Config } from "../types";

export function packageJson(): Config {
	return {
		sortPackageJson: {
			sortScripts: true,
		},
	};
}

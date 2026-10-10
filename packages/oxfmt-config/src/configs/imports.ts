import type { Config } from "../types";

export function imports(): Config {
	return {
		sortImports: {
			groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
		},
	};
}

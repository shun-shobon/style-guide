import type { Config } from "../types";

export function next(): Config {
	return {
		plugins: ["nextjs"],
	};
}

import * as url from "node:url";

import type { Config } from "./types";

export function resolve(pkg: string): string {
	return url.fileURLToPath(import.meta.resolve(pkg));
}

export function mergeConfig(...configs: Config[]): Config {
	return configs.reduce<Config>((acc, config) => {
		return {
			...acc,
			...config,
			overrides: [...(acc.overrides ?? []), ...(config.overrides ?? [])],
			plugins: [...(acc.plugins ?? []), ...(config.plugins ?? [])],
		};
	}, {});
}

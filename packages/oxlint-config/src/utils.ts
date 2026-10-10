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
			plugins: [
				...new Set([...(acc.plugins ?? []), ...(config.plugins ?? [])]),
			],
			jsPlugins: [...(acc.jsPlugins ?? []), ...(config.jsPlugins ?? [])],
			env: { ...acc.env, ...config.env },
			settings: { ...acc.settings, ...config.settings },
			options: { ...acc.options, ...config.options },
			rules: { ...acc.rules, ...config.rules },
			overrides: [...(acc.overrides ?? []), ...(config.overrides ?? [])],
			ignorePatterns: [
				...(acc.ignorePatterns ?? []),
				...(config.ignorePatterns ?? []),
			],
		};
	}, {});
}

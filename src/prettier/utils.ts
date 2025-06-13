import type { Config } from "./types";

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

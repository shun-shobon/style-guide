import { createRequire } from "node:module";

import type { Config } from "prettier";

const require = createRequire(import.meta.url);

export function shun_shobon(userConfig: Config = {}): Config {
	const config: Config = {
		useTabs: true,
		quoteProps: "consistent",

		// This is the default, but VSCode's Prettier plugin doesn't respect it.
		trailingComma: "all",

		plugins: [require.resolve("prettier-plugin-pkg")],
	};

	return mergeConfig(config, userConfig);
}

function mergeConfig(...configs: Config[]): Config {
	return configs.reduce<Config>((acc, config) => {
		return {
			...acc,
			...config,
			plugins: [...(acc.plugins ?? []), ...(config.plugins ?? [])],
		};
	}, {});
}

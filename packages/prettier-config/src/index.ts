import type { Config } from "prettier";

export function shun_shobon(userConfig: Config): Config {
	const config: Config = {
		useTabs: true,
		quoteProps: "consistent",

		// This is the default, but VSCode's Prettier plugin doesn't respect it.
		trailingComma: "all",
	};

	return mergeConfig(config, userConfig);
}

function mergeConfig(config1: Config, config2: Config): Config {
	const {
		overrides: overrides1,
		plugins: plugins1,
		...otherConfigs1
	} = config1;
	const {
		overrides: overrides2,
		plugins: plugins2,
		...otherConfigs2
	} = config2;

	return {
		...otherConfigs1,
		...otherConfigs2,

		overrides: [...(overrides1 ?? []), ...(overrides2 ?? [])],
		plugins: [...(plugins1 ?? []), ...(plugins2 ?? [])],
	};
}

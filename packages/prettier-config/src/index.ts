import { createRequire } from "node:module";

import type { Config } from "prettier";
import type { JsdocOptions } from "prettier-plugin-jsdoc";

const require = createRequire(import.meta.url);

export function shun_shobon(userConfig: Config = {}): Config {
	const config: Config = {
		useTabs: true,
		quoteProps: "consistent",

		// This is the default, but VSCode's Prettier plugin doesn't respect it.
		trailingComma: "all",

		tsdoc: true,
		jsdocPreferCodeFences: true,
		jsdocCommentLineStrategy: "multiline",

		plugins: [
			require.resolve("prettier-plugin-pkg"),
			require.resolve("prettier-plugin-jsdoc"),
		],
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

declare module "prettier" {
	// eslint-disable-next-line typescript/no-empty-interface
	interface Options extends Partial<JsdocOptions> {}
}

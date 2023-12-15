import { isPackageExists } from "local-pkg";

import { base, jsdoc, packageJson, tailwindcss } from "./configs";
import type { Config, OptionsConfig } from "./types";
import { mergeConfig } from "./utils";

export function shun_shobon(
	options: OptionsConfig = {},
	userConfig: Config = {},
): Config {
	const { tailwindcss: enableTailwindcss = isPackageExists("tailwindcss") } =
		options;

	const configs: Config[] = [];

	// basic configs
	configs.push(base(), packageJson(), jsdoc());

	if (enableTailwindcss) {
		configs.push(tailwindcss());
	}

	return mergeConfig(...configs, userConfig);
}

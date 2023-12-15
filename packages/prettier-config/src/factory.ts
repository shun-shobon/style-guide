import { isPackageExists } from "local-pkg";

import { base, ignores, jsdoc, packageJson, tailwindcss } from "./configs";
import type { Config, OptionsConfig } from "./types";
import { mergeConfig } from "./utils";

export function shun_shobon(
	options: OptionsConfig = {},
	userConfig: Config = {},
): Config {
	const {
		tailwindcss: enableTailwindcss = isPackageExists("tailwindcss"),
		ignoreFiles = [],
	} = options;

	const configs: Config[] = [];

	// basic configs
	configs.push(base(), packageJson(), jsdoc(), ignores({ ignoreFiles }));

	if (enableTailwindcss) {
		configs.push(tailwindcss());
	}

	return mergeConfig(...configs, userConfig);
}

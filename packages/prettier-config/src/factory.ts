import { isPackageExists } from "local-pkg";

import {
	astro,
	base,
	ignores,
	jsdoc,
	packageJson,
	tailwindcss,
} from "./configs";
import type { Config, OptionsConfig } from "./types";
import { mergeConfig } from "./utils";

export function shun_shobon(
	options: OptionsConfig = {},
	userConfig: Config = {},
): Config {
	const {
		tailwindcss: enableTailwindcss = isPackageExists("tailwindcss"),
		astro: enableAstro = isPackageExists("astro"),
		ignoreFiles = [],
	} = options;

	const configs: Config[] = [];

	// basic configs
	configs.push(base(), packageJson(), jsdoc(), ignores({ ignoreFiles }));

	if (enableTailwindcss) {
		configs.push(tailwindcss());
	}

	if (enableAstro) {
		configs.push(astro());
	}

	return mergeConfig(...configs, userConfig);
}

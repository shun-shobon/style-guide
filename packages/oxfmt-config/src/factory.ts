import { isPackageExists } from "local-pkg";

import { imports, packageJson, tailwindcss } from "./configs";
import type { Config, OptionsConfig } from "./types";
import { mergeConfig } from "./utils";

export function shun_shobon(
	options: OptionsConfig = {},
	userConfig: Config = {},
): Config {
	const { tailwindcss: enableTailwindcss = isPackageExists("tailwindcss") } =
		options;

	const configs: Config[] = [imports(), packageJson()];

	if (enableTailwindcss) {
		configs.push(tailwindcss());
	}

	return mergeConfig(...configs, userConfig);
}

import { isPackageExists } from "local-pkg";

import { base, next, react, shunShobon, typescript, vitest } from "./configs";
import type { Config, OptionsConfig } from "./types";
import { mergeConfig } from "./utils";

export function shun_shobon(
	options: OptionsConfig = {},
	...userConfigs: Config[]
): Config {
	const {
		ignores = [],
		typescript: enableTypescript = isPackageExists("typescript"),
		react: enableReact = isPackageExists("react"),
		next: enableNext = isPackageExists("next"),
		vitest: enableVitest = isPackageExists("vitest"),
	} = options;

	const configs: Config[] = [base(), shunShobon()];

	if (enableTypescript) {
		configs.push(typescript());
	}
	if (enableReact) {
		configs.push(react());
	}
	if (enableNext) {
		configs.push(next());
	}
	if (enableVitest) {
		configs.push(vitest());
	}

	configs.push({ ignorePatterns: ignores });

	return mergeConfig(...configs, ...userConfigs);
}

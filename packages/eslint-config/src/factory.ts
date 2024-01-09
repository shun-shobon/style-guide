import { isPackageExists } from "local-pkg";

import {
	astro,
	disableTypeChecked,
	imports,
	importSort,
	javascript,
	jsxA11y,
	next,
	node,
	react,
	storybook,
	typescript,
	unicorn,
} from "./configs";
import { GLOB_ASTRO, GLOB_ASTRO_EXT, GLOB_JS, GLOB_JSX } from "./globs";
import type { Awaitable, ConfigItem, OptionsConfig } from "./types";
import { interopDefault } from "./utils";

export async function shun_shobon(
	options: OptionsConfig = {},
	...userConfigs: ConfigItem[]
): Promise<ConfigItem[]> {
	const {
		gitignore: enableGitignore = true,
		typescript: enableTypescript = isPackageExists("typescript"),
		react: enableReact = isPackageExists("react"),
		next: enableNext = isPackageExists("next"),
		astro: enableAstro = isPackageExists("astro"),
		storybook: enableStorybook = isPackageExists("storybook"),
		componentExts = [],
		disableTypeCheckedFiles = [],
	} = options;

	const configQueue: Awaitable<ConfigItem[]>[] = [];

	if (enableGitignore) {
		configQueue.push(
			interopDefault(import("eslint-config-flat-gitignore")).then(
				(gitignore) => [
					gitignore(
						typeof enableGitignore !== "boolean" ? enableGitignore : undefined,
					),
				],
			),
		);
	}

	// Preprocess
	if (enableAstro) {
		componentExts.push(GLOB_ASTRO_EXT);
		disableTypeCheckedFiles.push(GLOB_ASTRO);
	}

	// Process
	// basic configs
	configQueue.push(
		javascript(),
		imports({
			typescript: enableTypescript,
		}),
		importSort(),
		unicorn(),
		node(),
		jsxA11y(),
	);
	if (enableTypescript) {
		configQueue.push(
			typescript({
				componentExts,
			}),
		);
		disableTypeCheckedFiles.push(GLOB_JS, GLOB_JSX);
	}
	if (enableReact) {
		configQueue.push(
			react({
				typescript: enableTypescript,
			}),
		);
	}
	if (enableNext) {
		configQueue.push(next());
	}
	if (enableAstro) {
		configQueue.push(
			astro({
				typescript: enableTypescript,
			}),
		);
	}
	if (enableStorybook) {
		configQueue.push(storybook());
	}

	// Postprocess
	if (enableTypescript) {
		configQueue.push(disableTypeChecked({ disableTypeCheckedFiles }));
	}

	const configs = await Promise.all(configQueue).then((configs) =>
		configs.flat(),
	);

	return [...configs, ...userConfigs];
}

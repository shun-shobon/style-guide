import { isPackageExists } from "local-pkg";

import {
	astro,
	base,
	disableTypeChecked,
	imports,
	importSort,
	javascript,
	jsxA11y,
	next,
	node,
	qwik,
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
		ignores: userIgnores = [],
		typescript: enableTypescript = isPackageExists("typescript"),
		react: enableReact = isPackageExists("react"),
		next: enableNext = isPackageExists("next"),
		qwik: enableQwik = isPackageExists("@builder.io/qwik"),
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
						typeof enableGitignore !== "boolean"
							? { name: "shun-shobon/gitignore/setup", ...enableGitignore }
							: { name: "shun-shobon/gitignore/setup" },
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
		base(),
		javascript(),
		imports(),
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
	if (enableQwik) {
		configQueue.push(qwik());
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

	const ignores = [...userIgnores, "**/.yarn/**"];
	configQueue.push([
		{
			ignores,
		},
	]);

	const configs = await Promise.all(configQueue).then((configs) =>
		configs.flat(),
	);

	return [...configs, ...userConfigs];
}

import { isPackageExists } from "local-pkg";

import {
	astro,
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

	// basic configs
	configQueue.push(
		javascript(),
		imports(options),
		importSort(),
		unicorn(),
		node(),
		jsxA11y(),
	);

	if (enableTypescript) {
		configQueue.push(typescript());
	}

	if (enableReact) {
		configQueue.push(react(options));
	}

	if (enableNext) {
		configQueue.push(next());
	}

	if (enableAstro) {
		configQueue.push(astro(options));
	}

	if (enableStorybook) {
		configQueue.push(storybook());
	}

	const configs = await Promise.all(configQueue).then((configs) =>
		configs.flat(),
	);

	return [...configs, ...userConfigs];
}

import { base, jsdoc,packageJson } from "./configs";
import type {  Config } from "./types";
import { mergeConfig } from "./utils";

export function shun_shobon(userConfig: Config = {}): Config {
	const configs: Config[] = [];

	// basic configs
	configs.push(base(), packageJson(), jsdoc());

	return mergeConfig(...configs, userConfig);
}

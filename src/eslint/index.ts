import type { RuleOptions } from "./rules";

export * from "./configs";
export * from "./factory";

declare module "@eslint/core" {
	// eslint-disable-next-line typescript/no-empty-object-type
	interface RulesConfig extends RuleOptions {}
}

export type { RulesConfig } from "@eslint/core";

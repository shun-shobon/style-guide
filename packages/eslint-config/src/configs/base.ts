import type { ConfigItem } from "../types";

export function base(): ConfigItem[] {
	return [
		{
			linterOptions: {
				reportUnusedDisableDirectives: true,
			},
		},
	];
}

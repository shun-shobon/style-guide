import type { ConfigItem } from "../types";

export function base(): ConfigItem[] {
	return [
		{
			name: "shun-shobon/base/setup",
			linterOptions: {
				reportUnusedDisableDirectives: true,
			},
		},
	];
}

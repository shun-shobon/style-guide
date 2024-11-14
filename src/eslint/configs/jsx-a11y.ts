import { pluginJsxA11y } from "../plugins";
import type { ConfigItem } from "../types";

export function jsxA11y(): ConfigItem[] {
	return [
		{
			name: "shun-shobon/jsxA11y/setup",
			plugins: {
				// eslint-disable-next-line typescript/no-unsafe-assignment
				"jsx-a11y": pluginJsxA11y,
			},
			settings: {
				"jsx-a11y": {
					polymorphicPropName: "as",
				},
			},
		},
	];
}

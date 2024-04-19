import type { Rules } from "eslint-define-config";

import { GLOB_JSX, GLOB_TSX } from "../globs";
import type { ConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function qwik(): Promise<ConfigItem[]> {
	// @ts-expect-error: This package doesn't have types
	// eslint-disable-next-line typescript/no-unsafe-assignment
	const pluginQwik = await interopDefault(import("eslint-plugin-qwik"));

	return [
		{
			plugins: {
				// eslint-disable-next-line typescript/no-unsafe-assignment
				qwik: pluginQwik,
			},
		},
		{
			files: [GLOB_JSX, GLOB_TSX],
			rules: {
				// qwikの推奨ルールを有効化
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...(pluginQwik.configs.recommended.rules as Rules),

				// qwikの厳格ルールを有効化
				// eslint-disable-next-line typescript/no-unsafe-member-access
				...(pluginQwik.configs.strict.rules as Rules),
			},
		},
	];
}

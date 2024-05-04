import type { ConfigItem, OptionsDisableTypeCheckedFiles } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function disableTypeChecked(
	options: OptionsDisableTypeCheckedFiles = {},
): Promise<ConfigItem[]> {
	const { disableTypeCheckedFiles = [] } = options;

	const { configs: configsTypeScript } = await interopDefault(
		import("typescript-eslint"),
	);

	return [
		{
			name: "shun-shobon/disableTypeChecked/rules",
			files: disableTypeCheckedFiles,
			languageOptions: {
				parserOptions: {
					program: null,
					project: null,
					EXPERIMENTAL_useProjectService: false,
				},
			},
			rules: {
				...renameRules(
					configsTypeScript.disableTypeChecked.rules!,
					"@typescript-eslint/",
					"typescript/",
				),
			},
		},
	];
}

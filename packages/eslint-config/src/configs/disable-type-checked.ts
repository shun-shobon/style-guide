import type { ConfigItem, OptionsDisableTypeCheckedFiles } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function disableTypeChecked(
	options: OptionsDisableTypeCheckedFiles = {},
): Promise<ConfigItem[]> {
	const { disableTypeCheckedFiles = [] } = options;

	const [pluginTypescript] = await Promise.all([
		interopDefault(import("@typescript-eslint/eslint-plugin")),
	]);

	return [
		{
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
					// eslint-disable-next-line typescript/no-non-null-assertion
					pluginTypescript.configs["disable-type-checked"]!.rules!,
					"@typescript-eslint/",
					"typescript/",
				),
			},
		},
	];
}

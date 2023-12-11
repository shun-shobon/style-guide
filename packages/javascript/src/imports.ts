import type { Config } from "@shun-shobon/eslint-config-utils";
// @ts-expect-error: This package doesn't have types
import importSort from "eslint-plugin-simple-import-sort";

export const ALIAS_IMPORT_SORT = "import-sort";

export const plugins: Config.Plugins = {
  [ALIAS_IMPORT_SORT]: importSort as Config.Plugin,
};

export const rules: Config.Rules = {
  // importをソートする
  [`${ALIAS_IMPORT_SORT}/imports`]: "warn",

  // exportをソートする
  [`${ALIAS_IMPORT_SORT}/exports`]: "warn",
};

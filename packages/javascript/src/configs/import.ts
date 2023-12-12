import { defineRules, definePlugins } from "@shun-shobon/eslint-config-utils";
import type { Config } from "@shun-shobon/eslint-config-utils";
// @ts-expect-error: This package doesn't have types
import importSort from "eslint-plugin-simple-import-sort";

export const ALIAS_IMPORT_SORT = "import-sort";

export const plugins = definePlugins(
  ALIAS_IMPORT_SORT,
  importSort as Config.Plugin
);

export const rules = defineRules(ALIAS_IMPORT_SORT, {
  // importをソートする
  imports: "warn",

  // exportをソートする
  exports: "warn",
});

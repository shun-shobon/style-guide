import js from "@eslint/js";

import importConfig from "./configs/import.js";
import jsConfig from "./configs/js.js";
import prettierConfig from "./configs/prettier.js";
import tsConfig from "./configs/ts.js";
import unicornConfig from "./configs/unicorn.js";

/**
 * @type {import("@shun-shobon/eslint-config-utils").Config[]}
 */
export default [
  js.configs.recommended,
  jsConfig,
  importConfig,
  unicornConfig,
  tsConfig,
  prettierConfig,
];

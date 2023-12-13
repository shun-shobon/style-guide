import {
  combinePlugins,
  combineRules,
  defineConfig,
} from "@shun-shobon/eslint-config-utils";
import { GLOB_JSX } from "@shun-shobon/eslint-config-utils/globs";

import * as jsxA11y from "./jsx-a11y";
import * as react from "./react";
import * as reactHooks from "./react-hooks";

export const plugins = combinePlugins(
  react.plugins,
  reactHooks.plugins,
  jsxA11y.plugins
);

export const rules = combineRules(react.rules, reactHooks.rules, jsxA11y.rules);

export default defineConfig({
  files: [GLOB_JSX],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins,
  rules,
});

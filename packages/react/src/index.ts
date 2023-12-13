import {
  defineConfig,
  combinePlugins,
  combineRules,
} from "@shun-shobon/eslint-config-utils";
import { GLOB_JSX } from "@shun-shobon/eslint-config-utils/globs";

import * as react from "./react";
import * as reactHooks from "./react-hooks";

export const plugins = combinePlugins(react.plugins, reactHooks.plugins);

export const rules = combineRules(react.rules, reactHooks.rules);

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

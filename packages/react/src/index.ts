import {
  defineConfig,
  combinePlugins,
  combineRules,
} from "@shun-shobon/eslint-config-utils";

import * as react from "./react";
import { GLOB_JSX } from "@shun-shobon/eslint-config-utils/globs";

export const plugins = combinePlugins(react.plugins);

export const rules = combineRules(react.rules);

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

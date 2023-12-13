import {
  combinePlugins,
  combineRules,
  defineConfig,
} from "@shun-shobon/eslint-config-utils";
import { GLOB_JSX } from "@shun-shobon/eslint-config-utils/globs";

import * as jsxA11y from "./configs/jsx-a11y";
import * as react from "./configs/react";
import * as reactHooks from "./configs/react-hooks";

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

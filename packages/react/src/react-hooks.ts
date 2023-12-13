import { definePlugins, renameAlias } from "@shun-shobon/eslint-config-utils";
import type { Config } from "@shun-shobon/eslint-config-utils";
// @ts-expect-error: This package don't have types
import react from "eslint-plugin-react-hooks";

export const ALIAS_REACT_HOOKS = "react-hooks";

export const plugins = definePlugins(ALIAS_REACT_HOOKS, react as Config.Plugin);

export const rules = renameAlias(
  ALIAS_REACT_HOOKS,
  react.configs.recommended.rules as Config.Rules
);

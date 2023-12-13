import type { Config } from "@shun-shobon/eslint-config-utils";
import {
  combineRules,
  definePlugins,
  defineRules,
  renameAlias,
} from "@shun-shobon/eslint-config-utils";
// @ts-expect-error: This package don't have types
import react from "eslint-plugin-react";

const ALIAS_REACT = "react";

export const plugins = definePlugins(ALIAS_REACT, react as Config.Plugin);

const baseRules = combineRules(
  // reactの推奨ルールを有効化
  // eslint-disable-next-line typescript/no-unsafe-member-access
  renameAlias(ALIAS_REACT, react.configs.recommended.rules as Config.Rules),
  // React v17以降のJSX Runtimeを使う場合の不要なルールを無効化
  // eslint-disable-next-line typescript/no-unsafe-member-access
  renameAlias(ALIAS_REACT, react.configs["jsx-runtime"].rules as Config.Rules)
);

const additionalRules = defineRules(ALIAS_REACT, {
  // TypeScriptの型チェックで検出できるものは無効化

  // propTypesはTSで代替できるので無効化
  "prop-types": "off",
  // HTMLの属性名として認識されていない属性名を許可
  // TSで型チェックしているので不要
  "no-unknown-property": "off",

  // その他必要なものを有効化

  // `onClick`などのイベントハンドラーの命名規則をチェック
  "jsx-handler-names": "warn",

  // ContextのProviderに即値を渡さないようにする
  // 即値で渡すと、Providerが含まれるコンポーネントの再描画時に新しい値が渡されてしまい、再描画が発生する
  "jsx-no-constructed-context-values": "warn",

  // `React.Fragment`を省略可能な場合は省略する
  // ただし、フラグメントのみの場合は許可する
  "jsx-no-useless-fragment": ["warn", { allowExpressions: true }],

  // rel 属性の値をチェック
  "no-invalid-html-attribute": "warn",

  // propsのデフォルト値としてobjectやarrayのリテラルを使用しないようにする
  // 使用してしまうと、再描画が発生する可能性がある
  "no-object-type-as-default-prop": "warn",

  // コンポーネント内でコンポーネントを定義するのを許可しない
  "no-unstable-nested-components": "error",
});

export const rules = combineRules(baseRules, additionalRules);

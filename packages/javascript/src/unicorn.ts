import type { Config } from "@shun-shobon/eslint-config-utils";
// @ts-expect-error: This package doesn't have types
import unicorn from "eslint-plugin-unicorn";

export const ALIAS_UNICORN = "unicorn";

export const plugins: Config.Plugins = {
  [ALIAS_UNICORN]: unicorn as Config.Plugin,
};

export const rules: Config.Rules = {
  ...Object.fromEntries(
    Object.entries(unicorn.configs.recommended.rules as Config.Rules).map(
      ([key, value]) => [key.replace(/^unicorn/, ALIAS_UNICORN), value]
    )
  ),

  // Prettierで整形できるルールは無効化
  [`${ALIAS_UNICORN}/empty-brace-spaces`]: "off",
  [`${ALIAS_UNICORN}/no-nested-ternary`]: "off",
  [`${ALIAS_UNICORN}/number-literal-case`]: "off",

  // unicornの推奨ルールから不要なものを無効化

  // コンポーネント内の関数など、スコープを小さくしておきたい場合があるので無効化
  [`${ALIAS_UNICORN}/consistent-function-scoping`]: "off",

  // ファイルの名前はコンポーネントなどで形式が変化するため無効化
  [`${ALIAS_UNICORN}/filename-case`]: "off",

  // 直接関数を渡したほうが簡潔に書ける場合があるので無効化
  [`${ALIAS_UNICORN}/no-array-callback-reference`]: "off",

  // `.forEach()`のほうが簡潔に書ける場合があるので無効化
  [`${ALIAS_UNICORN}/no-array-for-each`]: "off",

  // `.reduce()`/`.reduceRight()`は使ったほうが簡潔に書ける場合があるので無効化
  [`${ALIAS_UNICORN}/no-array-reduce`]: "off",

  // 否定形の方が簡潔に書ける場合があるので無効化
  [`${ALIAS_UNICORN}/no-negated-condition`]: "off",

  // nullも使う場合があるので無効化
  [`${ALIAS_UNICORN}/no-null`]: "off",

  // CommonJSを使う場合もあるため無効化
  [`${ALIAS_UNICORN}/prefer-module`]: "off",

  // `[...array].map()`は~~ダサい~~ので無効化
  [`${ALIAS_UNICORN}/prefer-spread`]: "off",

  // 略語の方が簡潔に書ける場合があるので無効化
  [`${ALIAS_UNICORN}/prevent-abbreviations`]: "off",

  // switch文のcase節を常にブロックにするのは冗長なので必要なときのみブロックにする
  [`${ALIAS_UNICORN}/switch-case-braces`]: ["warn", "avoid"],
};

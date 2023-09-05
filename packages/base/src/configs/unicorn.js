import unicorn from "eslint-plugin-unicorn";

/**
 * @type {import("@shun-shobon/eslint-config-utils").Config}
 */
const config = {
  plugins: {
    unicorn,
  },
  rules: {
    ...unicorn.configs.recommended.rules,

    // unicornの推奨ルールから不要なものを無効化
    // ファイルの名前はコンポーネントなどで形式が変化するため無効化
    "unicorn/filename-case": "off",
    // コンポーネント内の関数など、スコープを小さくしておきたい場合があるので無効化
    "unicorn/consistent-function-scoping": "off",
    // nullも使う場合があるので無効化
    "unicorn/no-null": "off",
    // `.forEach()` のほうが簡潔に書ける場合があるので無効化
    "unicorn/no-array-for-each": "off",
    // 否定形の方が簡潔に書ける場合があるので無効化
    "unicorn/no-negated-condition": "off",
    // 直接関数を渡したほうが簡潔に書ける場合があるので無効化
    "unicorn/no-array-callback-reference": "off",
    // CommonJSを使う場合もあるため無効化
    "unicorn/prefer-module": "off",
    // `[...array].map()` は ~~ダサい~~ ので無効化
    "unicorn/prefer-spread": "off",
    // セレクタは使い分けたいので無効化
    "unicorn/prefer-query-selector": "off",
    // 略語の方が簡潔に書ける場合があるので無効化
    "unicorn/prevent-abbreviations": "off",
    // switch文のcase節を常にブロックにするのは冗長なので必要なときのみブロックにする
    "unicorn/switch-case-braces": ["error", "avoid"],

    // なるべく repleaseAll を使用する
    "unicorn/prefer-string-replace-all": "warn",
  },
};

export default config;

import react from "eslint-plugin-react";

/**
 * @type {import("@shun-shobon/eslint-config-utils").Config}
 */
const config = {
  files: ["**/*.jsx", "**/*.tsx"],
  plugins: {
    react,
  },
  settings: {
    react: {
      // react のバージョンを指定
      version: "18",
    },
  },
  rules: {
    // react の推奨ルールを有効化
    ...react.configs.recommended.rules,
    // React v17 以降の JSX Runtime を使う場合の不要なルールを無効化
    ...react.configs["jsx-runtime"].rules,

    // propTypes はTSで代替できるので無効化
    "react/prop-types": "off",
    // HTMLの属性名として認識されていない属性名を許可
    // TSで型チェックしているので不要
    "react/no-unknown-property": "off",
    // `onClick` などのイベントハンドラーの命名規則をチェック
    "react/jsx-handler-names": "warn",
    // `React.Fragment` を省略可能な場合は省略する
    // ただし、フラグメントのみの場合は許可する
    "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
    // rel 属性の値をチェック
    "react/no-invalid-html-attribute": "warn",
    // コンポーネント内でコンポーネントを定義するのを許可しない
    "react/no-unstable-nested-components": "error",
  },
};

export default config;

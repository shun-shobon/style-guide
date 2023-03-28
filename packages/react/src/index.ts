import { defineConfig } from "@shun-shobon/eslint-config-utils";

export default defineConfig({
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      extends: [
        // react の推奨ルールを有効化
        "plugin:react/recommended",
        // React v17 以降の JSX Runtime を使う場合の不要なルールを無効化
        "plugin:react/jsx-runtime",
        // React Hooks の推奨ルールを有効化
        "plugin:react-hooks/recommended",
        // jsx-a11y の推奨ルールを有効化
        "eslint-plugin-jsx-a11y/recommended",
        // Prettierが行うフォーマット系のルールを無効化
        "prettier",
      ],
      settings: {
        react: {
          // react のバージョンを指定
          version: "18",
        },
      },
      rules: {
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
        // 曖昧なリンクのテキストを許可しない
        "jsx-a11y/anchor-ambiguous-text": "error",
        // インタラクティブな要素にラベルが付いていないことを許可しない
        "jsx-a11y/control-has-associated-label": "error",
        // フォーカス可能な要素に `aria-hidden` 属性を付与することを許可しない
        "jsx-a11y/no-aria-hidden-on-focusable": "error",
      },
    },
  ],
});

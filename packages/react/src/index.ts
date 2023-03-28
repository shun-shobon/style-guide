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
        // Prettierが行うフォーマット系のルールを無効化
        "prettier",
      ],
      settings: {
        react: {
          version: "18",
        },
      },
      rules: {
        "react/prop-types": "off",
        "react/no-unknown-property": "off",
      },
    },
  ],
});

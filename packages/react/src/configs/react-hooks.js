import reactHooks from "eslint-plugin-react-hooks";

/**
 * @type {import("@shun-shobon/eslint-config-utils").Config}
 */
const config = {
  files: ["**/*.jsx", "**/*.tsx"],
  plugins: {
    "react-hooks": reactHooks,
  },
  rules: {
    // react-hooks の推奨ルールを有効化
    ...reactHooks.configs.recommended.rules,
  },
};

export default config;

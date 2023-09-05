import jsxA11y from "eslint-plugin-jsx-a11y";

/**
 * @type {import("@shun-shobon/eslint-config-utils").Config}
 */
const config = {
  files: ["**/*.jsx", "**/*.tsx"],
  plugins: {
    "jsx-a11y": jsxA11y,
  },
  rules: {
    // jsx-a11y の推奨ルールを有効化
    ...jsxA11y.configs.recommended.rules,

    // 曖昧なリンクのテキストを許可しない
    "jsx-a11y/anchor-ambiguous-text": "error",
    // インタラクティブな要素にラベルが付いていないことを許可しない
    "jsx-a11y/control-has-associated-label": "error",
    // フォーカス可能な要素に `aria-hidden` 属性を付与することを許可しない
    "jsx-a11y/no-aria-hidden-on-focusable": "error",
  },
};

export default config;

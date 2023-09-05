import next from "@next/eslint-plugin-next";

/**
 * @type {import("@shun-shobon/eslint-config-utils").Config}
 */
const config = {
  plugins: {
    "@next/next": next,
  },
  rules: {
    // `img` 要素を使う場合もあるので無効化
    "@next/next/no-img-element": "off",
  },
};

export default config;

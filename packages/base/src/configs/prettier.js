import prettier from "eslint-config-prettier";

/**
 * @type {import("@shun-shobon/eslint-config-utils").Config}
 */
const config = {
  rules: {
    ...prettier.rules,
  },
};

export default config;

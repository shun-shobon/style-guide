import simpleImportSort from "eslint-plugin-simple-import-sort";

/**
 * @type {import("@shun-shobon/eslint-config-utils").Config}
 */
const config = {
  plugins: {
    "simple-import-sort": simpleImportSort,
  },
  rules: {
    // import/export の順序を整理
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};

export default config;

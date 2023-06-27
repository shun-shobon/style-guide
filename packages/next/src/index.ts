import { defineConfig } from "@shun-shobon/eslint-config-utils";

export default defineConfig({
  extends: ["plugin:@next/next/recommended"],
  rules: {
    "@next/next/no-img-element": "off",
  },
});

module.exports = {
  root: true,
  extends: ["@shun-shobon/base"],
  env: {
    node: true,
  },
  parserOptions: {
    project: ["./tsconfig.json", "./packages/*/tsconfig.json"],
  },
};

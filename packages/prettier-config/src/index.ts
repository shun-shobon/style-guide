import type { Config } from "prettier";

export function shun_shobon(userConfig: Config): Config {
  const config: Config = {
    quoteProps: "consistent",

    // This is the default, but VSCode's Prettier plugin doesn't respect it.
    trailingComma: "all",
  };

  return {
    ...config,
    ...userConfig,
  };
}

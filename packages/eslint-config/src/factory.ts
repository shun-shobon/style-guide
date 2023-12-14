import type { Awaitable, ConfigItem, OptionsConfig } from "./types";
import { javascript, importSort, unicorn } from "./configs";
import { interopDefault } from "./utils";

export async function shun_shobon(
  options: OptionsConfig = {},
  ...userConfigs: ConfigItem[]
): Promise<ConfigItem[]> {
  const { gitignore: enableGitignore = true } = options;

  const configQueue: Awaitable<ConfigItem[]>[] = [];

  // basic configs
  configQueue.push(javascript(), importSort(), unicorn());

  if (enableGitignore) {
    configQueue.push(
      interopDefault(import("eslint-config-flat-gitignore")).then(
        (gitignore) => [
          gitignore(
            typeof enableGitignore !== "boolean" ? enableGitignore : undefined
          ),
        ]
      )
    );
  }

  const configs = await Promise.all(configQueue).then((configs) =>
    configs.flat()
  );

  return [...configs, ...userConfigs];
}

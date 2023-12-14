import type { Awaitable, ConfigItem, OptionsConfig } from "./types";
import { javascript, importSort, unicorn, typescript } from "./configs";
import { interopDefault } from "./utils";
import { isPackageExists } from "local-pkg";

export async function shun_shobon(
  options: OptionsConfig = {},
  ...userConfigs: ConfigItem[]
): Promise<ConfigItem[]> {
  const {
    gitignore: enableGitignore = true,
    typescript: enableTypescript = isPackageExists("typescript"),
  } = options;

  const configQueue: Awaitable<ConfigItem[]>[] = [];

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

  // basic configs
  configQueue.push(javascript(), importSort(), unicorn());

  if (enableTypescript) {
    configQueue.push(typescript());
  }

  const configs = await Promise.all(configQueue).then((configs) =>
    configs.flat()
  );

  return [...configs, ...userConfigs];
}

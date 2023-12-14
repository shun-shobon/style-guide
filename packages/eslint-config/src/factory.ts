import { isPackageExists } from "local-pkg";

import { importSort, javascript, react, typescript, unicorn } from "./configs";
import type { Awaitable, ConfigItem, OptionsConfig } from "./types";
import { interopDefault } from "./utils";

export async function shun_shobon(
  options: OptionsConfig = {},
  ...userConfigs: ConfigItem[]
): Promise<ConfigItem[]> {
  const {
    gitignore: enableGitignore = true,
    typescript: enableTypescript = isPackageExists("typescript"),
    react: enableReact = isPackageExists("react"),
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

  if (enableReact) {
    configQueue.push(
      react({
        typescript: enableTypescript,
      })
    );
  }

  const configs = await Promise.all(configQueue).then((configs) =>
    configs.flat()
  );

  return [...configs, ...userConfigs];
}

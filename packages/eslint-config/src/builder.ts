import type { ConfigItem } from "./types";
import { javascript } from "./configs";

type ConfigBuilder = (...userConfigs: ConfigItem[]) => ConfigItem[];

export function createShunShobonConfig(): ConfigBuilder {
  const configs: ConfigItem[] = [];

  configs.push(...javascript());

  return (...userConfigs) => [...configs, ...userConfigs];
}

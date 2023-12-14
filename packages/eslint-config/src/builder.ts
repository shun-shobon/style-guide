import type { ConfigItem } from "./types";
import { javascript, importSort, unicorn } from "./configs";

type ConfigBuilder = (...userConfigs: ConfigItem[]) => ConfigItem[];

export function createShunShobonConfig(): ConfigBuilder {
  const configs: ConfigItem[] = [];

  configs.push(...javascript(), ...importSort(), ...unicorn());

  return (...userConfigs) => [...configs, ...userConfigs];
}

import type { ConfigItem } from "./types";
import { javascript, importSort } from "./configs";

type ConfigBuilder = (...userConfigs: ConfigItem[]) => ConfigItem[];

export function createShunShobonConfig(): ConfigBuilder {
  const configs: ConfigItem[] = [];

  configs.push(...javascript(), ...importSort());

  return (...userConfigs) => [...configs, ...userConfigs];
}

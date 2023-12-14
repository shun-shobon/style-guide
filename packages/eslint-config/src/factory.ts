import type { ConfigItem } from "./types";
import { javascript, importSort, unicorn } from "./configs";

export function shun_shobon(...userConfigs: ConfigItem[]): ConfigItem[] {
  const configs: ConfigItem[] = [];

  // basic configs
  configs.push(...javascript(), ...importSort(), ...unicorn());

  return [...configs, ...userConfigs];
}

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

export { FlatConfig as Config };

export function defineConfig(
  ...configs: (FlatConfig.Config | FlatConfig.Config[])[]
): FlatConfig.Config[] {
  return configs.flat();
}

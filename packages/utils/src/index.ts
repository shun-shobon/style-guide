import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

export { FlatConfig as Config };

export function definePlugins(
  alias: string,
  plugin: FlatConfig.Plugin
): FlatConfig.Plugins {
  return { [alias]: plugin };
}

export function defineRules(rules: FlatConfig.Rules): FlatConfig.Rules;
export function defineRules(
  alias: string,
  rules: FlatConfig.Rules
): FlatConfig.Rules;
export function defineRules(
  ...args: [FlatConfig.Rules] | [string, FlatConfig.Rules]
): FlatConfig.Rules {
  if (args.length === 1) {
    return args[0];
  }

  const [alias, rules] = args;
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => [
      `${alias}/${key.replace(/^.*\//, "")}`,
      value,
    ])
  );
}

export function defineConfig(
  ...configs: FlatConfig.Config[]
): FlatConfig.Config[] {
  return configs;
}

export function compileRules(...rules: FlatConfig.Rules[]): FlatConfig.Rules {
  return Object.assign({}, ...rules);
}

export function compilePlugins(
  ...plugins: FlatConfig.Plugins[]
): FlatConfig.Plugins {
  return Object.assign({}, ...plugins);
}

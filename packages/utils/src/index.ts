import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

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
    Object.entries(rules).map(([key, value]) => [`${alias}/${key}`, value])
  );
}

export function renameAlias(
  alias: string,
  rules: FlatConfig.Rules
): FlatConfig.Rules {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      if (key.match(/^.*\//u) !== null) {
        return [key.replace(/^.*\//u, `${alias}/`), value];
      }

      return [key, value];
    })
  );
}

export function defineConfig(
  ...configs: FlatConfig.Config[]
): FlatConfig.Config[] {
  return configs;
}

export function combineRules(...rules: FlatConfig.Rules[]): FlatConfig.Rules {
  // eslint-disable-next-line typescript/no-unsafe-return
  return Object.assign({}, ...rules);
}

export function combinePlugins(
  ...plugins: FlatConfig.Plugins[]
): FlatConfig.Plugins {
  // eslint-disable-next-line typescript/no-unsafe-return
  return Object.assign({}, ...plugins);
}

export type { FlatConfig as Config } from "@typescript-eslint/utils/ts-eslint";

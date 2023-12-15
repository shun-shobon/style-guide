import { GLOB_SRC } from "../globs";
import type { ConfigItem } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function next(): Promise<ConfigItem[]> {
  // eslint-disable-next-line typescript/no-unsafe-assignment
  const [pluginNext] = await Promise.all([
    // @ts-expect-error: This package don't have types
    interopDefault(import("@next/eslint-plugin-next")),
  ]);

  return [
    {
      plugins: {
        // eslint-disable-next-line typescript/no-unsafe-assignment
        next: pluginNext,
      },
    },
    {
      files: [GLOB_SRC],
      // eslint-disable-next-line typescript/no-unsafe-assignment
      rules: {
        // Next.jsの推奨ルールを有効化
        ...renameRules(
          // eslint-disable-next-line typescript/no-unsafe-argument, typescript/no-unsafe-member-access
          pluginNext.configs.recommended.rules,
          "@next/next/",
          "next/",
        ),

        // Next.jsの更に厳格なルールを有効化
        ...renameRules(
          // eslint-disable-next-line typescript/no-unsafe-argument, typescript/no-unsafe-member-access
          pluginNext.configs["core-web-vitals"].rules,
          "@next/next/",
          "next/",
        ),

        // `img`要素を使う場合もあるので無効化
        "next/no-img-element": "off",
      },
    },
  ];
}

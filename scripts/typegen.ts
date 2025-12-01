import fs from "node:fs/promises";

import pluginNext from "@next/eslint-plugin-next";
import type { ESLint } from "eslint";
import pluginAstro from "eslint-plugin-astro";
import pluginImport from "eslint-plugin-import-x";
// @ts-expect-error: This package doesn't have types
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginNode from "eslint-plugin-n";
// @ts-expect-error: This package doesn't have types
import pluginQwik from "eslint-plugin-qwik";
import pluginReact from "eslint-plugin-react";
import pluginRegExp from "eslint-plugin-regexp";
import pluginImportSort from "eslint-plugin-simple-import-sort";
import pluginStorybook from "eslint-plugin-storybook";
import pluginUnicorn from "eslint-plugin-unicorn";
import { pluginsToRulesDTS } from "eslint-typegen/core";
import pluginTypeScript from "typescript-eslint";

const plugins = {
	"astro": pluginAstro,
	"import-sort": pluginImportSort,
	"import": pluginImport,
	// eslint-disable-next-line typescript/no-unsafe-assignment
	"jsx-a11y": pluginJsxA11y,
	"next": pluginNext,
	"node": pluginNode,
	// eslint-disable-next-line typescript/no-unsafe-assignment
	"qwik": pluginQwik,
	"react": pluginReact,
	"regexp": pluginRegExp,
	"storybook": pluginStorybook,
	"typescript": pluginTypeScript,
	"unicorn": pluginUnicorn,
} as unknown as Record<string, ESLint.Plugin>;

const dts = await pluginsToRulesDTS(plugins, { includeAugmentation: false });

await fs.writeFile("src/eslint/rules.ts", dts);

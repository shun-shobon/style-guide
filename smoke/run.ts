import path from "node:path";

import { shun_shobon } from "@shun-shobon/eslint-config";
import { ESLint } from "eslint";

interface Variant {
	name: string;
	options: Parameters<typeof shun_shobon>[0];
	patterns: string[];
}

// ReactとQwikは同じ拡張子を対象にするため、別々に検証する
const variants: Variant[] = [
	{
		name: "react",
		options: {
			react: true,
			next: true,
			storybook: true,
			astro: true,
			qwik: false,
		},
		patterns: ["fixtures/common", "fixtures/react", "fixtures/astro"],
	},
	{
		name: "qwik",
		options: {
			react: false,
			next: false,
			storybook: false,
			astro: false,
			qwik: true,
		},
		patterns: ["fixtures/common", "fixtures/qwik"],
	},
];

const cwd = import.meta.dirname;
let hasFailed = false;

for (const variant of variants) {
	const eslint = new ESLint({
		cwd,
		overrideConfigFile: true,
		overrideConfig: await shun_shobon(
			{ gitignore: false, typescript: true, ...variant.options },
			{ settings: { next: { rootDir: path.join(cwd, "fixtures/react") } } },
		),
	});
	const results = await eslint.lintFiles(variant.patterns);

	const deprecatedRules = new Set(
		results.flatMap((result) =>
			result.usedDeprecatedRules.map(({ ruleId }) => ruleId),
		),
	);
	const hasProblems = results.some(
		(result) => result.errorCount > 0 || result.warningCount > 0,
	);

	if (hasProblems) {
		const formatter = await eslint.loadFormatter("stylish");
		console.error(`[${variant.name}] lint problems found`);
		console.error(await formatter.format(results));
		hasFailed = true;
	}
	if (deprecatedRules.size > 0) {
		console.error(
			`[${variant.name}] deprecated rules are enabled: ${[...deprecatedRules].join(", ")}`,
		);
		hasFailed = true;
	}
	console.warn(`[${variant.name}] linted ${results.length} files`);
}

if (hasFailed) {
	process.exitCode = 1;
}

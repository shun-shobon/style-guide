import { describe, it } from "node:test";

import plugin from "@shun-shobon/oxlint-config/plugin";
import { RuleTester } from "oxlint/plugins-dev";

// node:test の describe/it は Promise を返すが、RuleTester は戻り値を使わない
RuleTester.describe = (name, fn) => {
	void describe(name, fn);
};
RuleTester.it = (name, fn) => {
	void it(name, fn);
};

const tester = new RuleTester();

tester.run("nullish-comparison", plugin.rules["nullish-comparison"], {
	valid: [
		"a == null",
		"a != null",
		"a === 0",
		"a !== ''",
		"a === undefined",
		"a !== undefined",
		"typeof a === 'undefined'",
	],
	invalid: [
		{
			code: "a === null",
			errors: [
				{
					messageId: "loose",
					suggestions: [{ messageId: "replace", output: "a == null" }],
				},
			],
		},
		{
			code: "a !== null",
			errors: [
				{
					messageId: "loose",
					suggestions: [{ messageId: "replace", output: "a != null" }],
				},
			],
		},
		{
			code: "null === f(x)",
			errors: [
				{
					messageId: "loose",
					suggestions: [{ messageId: "replace", output: "f(x) == null" }],
				},
			],
		},
	],
});

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
const tsTester = new RuleTester({ languageOptions: { parserOptions: { lang: "ts" } } });

tsTester.run("no-react-namespace", plugin.rules["no-react-namespace"], {
	valid: [
		"import type { ReactNode } from 'react'; let a: ReactNode;",
		"let a: Foo.ReactNode;",
		"let a: React;",
		"import { useState, type ReactNode } from 'react';",
		"import Foo from 'foo';",
	],
	invalid: [
		{ code: "import React from 'react';", errors: [{ messageId: "import" }] },
		{ code: "import * as React from 'react';", errors: [{ messageId: "import" }] },
		{ code: "import { default as R } from 'react';", errors: [{ messageId: "import" }] },
		{ code: "import React, { useState } from 'react';", errors: [{ messageId: "import" }] },
		{ code: "let a: React.ReactNode;", errors: [{ messageId: "namespace" }] },
		{ code: "let a: React.ComponentProps<'div'>;", errors: [{ messageId: "namespace" }] },
		{
			code: "let a: React.JSX.Element;",
			errors: [{ messageId: "namespace", data: { name: "JSX" } }],
		},
	],
});

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

tester.run("no-infinite-for", plugin.rules["no-infinite-for"], {
	valid: [
		"while (true) {}",
		"for (let i = 0; i < 10; i++) {}",
		"for (; i < 10; ) {}",
		"for (let i = 0; ; i++) {}",
		"for (const a of b) {}",
	],
	invalid: [
		{
			code: "for (;;) { if (a) break; }",
			output: "while (true) { if (a) break; }",
			errors: [{ messageId: "infinite" }],
		},
		{
			code: "for (;;) f();",
			output: "while (true) f();",
			errors: [{ messageId: "infinite" }],
		},
	],
});

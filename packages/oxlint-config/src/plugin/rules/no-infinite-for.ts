import type { Rule } from "../types";

export const noInfiniteFor: Rule = {
	meta: {
		type: "suggestion",
		fixable: "code",
		messages: {
			infinite: "無限ループは `for (;;)` ではなく `while (true)` で書いてください",
		},
	},
	create(context) {
		return {
			ForStatement(node) {
				if (node.init != null || node.test != null || node.update != null) return;
				context.report({
					node,
					messageId: "infinite",
					fix: (fixer) =>
						fixer.replaceText(node, `while (true) ${context.sourceCode.getText(node.body)}`),
				});
			},
		};
	},
};

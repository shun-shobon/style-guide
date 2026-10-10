import type { Rule } from "../types";

export const nullishComparison: Rule = {
	meta: {
		type: "suggestion",
		fixable: "code",
		messages: {
			loose: "null・undefined との比較は `{{operator}} null` で書いてください",
		},
	},
	create(context) {
		return {
			BinaryExpression(node) {
				if (node.operator !== "===" && node.operator !== "!==") return;
				const isNullish = (n: typeof node.left) =>
					(n.type === "Literal" && n.value == null && n.raw === "null") ||
					(n.type === "Identifier" && n.name === "undefined");
				const nullishSide = isNullish(node.right)
					? node.right
					: isNullish(node.left)
						? node.left
						: null;
				if (nullishSide == null) return;
				const operator = node.operator === "===" ? "==" : "!=";
				const other = nullishSide === node.right ? node.left : node.right;
				context.report({
					node,
					messageId: "loose",
					data: { operator },
					fix: (fixer) =>
						fixer.replaceText(
							node,
							`${context.sourceCode.getText(other)} ${operator} null`,
						),
				});
			},
		};
	},
};

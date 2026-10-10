import type { Rule } from "../types";

export const nullishComparison: Rule = {
	meta: {
		type: "suggestion",
		// 対象が undefined になり得るかは型を見ないと分からず、`== null` への置き換えは意味を変えうるため自動修正にしない
		hasSuggestions: true,
		messages: {
			loose: "null との比較は `{{operator}} null` で書いてください",
			replace: "`{{operator}} null` に置き換える",
		},
	},
	create(context) {
		return {
			BinaryExpression(node) {
				if (node.operator !== "===" && node.operator !== "!==") return;
				const isNull = (n: typeof node.left) =>
					n.type === "Literal" && n.raw === "null";
				const nullSide = isNull(node.right)
					? node.right
					: isNull(node.left)
						? node.left
						: null;
				if (nullSide == null) return;
				const operator = node.operator === "===" ? "==" : "!=";
				const other = nullSide === node.right ? node.left : node.right;
				context.report({
					node,
					messageId: "loose",
					data: { operator },
					suggest: [
						{
							messageId: "replace",
							data: { operator },
							fix: (fixer) =>
								fixer.replaceText(
									node,
									`${context.sourceCode.getText(other)} ${operator} null`,
								),
						},
					],
				});
			},
		};
	},
};

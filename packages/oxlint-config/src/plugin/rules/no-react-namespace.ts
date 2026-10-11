import type { Rule } from "../types";

export const noReactNamespace: Rule = {
	meta: {
		type: "suggestion",
		messages: {
			import: '`import { useState } from "react"` のように名前付きで import してください',
			namespace:
				'`React.{{name}}` ではなく `import type { {{name}} } from "react"` で import してください',
		},
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.source.value !== "react") return;
				for (const specifier of node.specifiers) {
					const isNamespace =
						specifier.type === "ImportDefaultSpecifier" ||
						specifier.type === "ImportNamespaceSpecifier" ||
						(specifier.imported.type === "Identifier"
							? specifier.imported.name
							: specifier.imported.value) === "default";
					if (isNamespace) context.report({ node: specifier, messageId: "import" });
				}
			},
			TSQualifiedName(node) {
				if (node.left.type !== "Identifier" || node.left.name !== "React") return;
				context.report({ node, messageId: "namespace", data: { name: node.right.name } });
			},
		};
	},
};

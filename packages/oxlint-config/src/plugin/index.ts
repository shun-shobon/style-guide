import { noInfiniteFor } from "./rules/no-infinite-for";
import { noReactNamespace } from "./rules/no-react-namespace";
import { nullishComparison } from "./rules/nullish-comparison";
import type { Plugin } from "./types";

const plugin: Plugin = {
	meta: { name: "shun-shobon" },
	rules: {
		"no-infinite-for": noInfiniteFor,
		"no-react-namespace": noReactNamespace,
		"nullish-comparison": nullishComparison,
	},
};

export default plugin;

import { noInfiniteFor } from "./rules/no-infinite-for";
import { noReactNamespace } from "./rules/no-react-namespace";
import { nullishComparison } from "./rules/nullish-comparison";

export default {
	meta: { name: "shun-shobon" },
	rules: {
		"no-infinite-for": noInfiniteFor,
		"no-react-namespace": noReactNamespace,
		"nullish-comparison": nullishComparison,
	},
};

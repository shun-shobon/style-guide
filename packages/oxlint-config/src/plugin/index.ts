import { nullishComparison } from "./rules/nullish-comparison";

export default {
	meta: { name: "shun-shobon" },
	rules: {
		"nullish-comparison": nullishComparison,
	},
};

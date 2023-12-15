import * as path from "node:path";

import { shun_shobon } from "@shun-shobon/eslint-config";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export default shun_shobon({
	gitignore: {
		files: [path.join(__dirname, ".gitignore")],
	},
});

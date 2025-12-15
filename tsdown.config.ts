import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["src/eslint/index.ts", "src/prettier/index.ts"],
	dts: true,
	sourcemap: true,
});

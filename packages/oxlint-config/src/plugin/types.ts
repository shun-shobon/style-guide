import type { RuleTester } from "oxlint/plugins-dev";

// oxlint は Rule 型を直接 export していない
export type Rule = Parameters<RuleTester["run"]>[1];

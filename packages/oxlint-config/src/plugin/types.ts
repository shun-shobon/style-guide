import type { RuleTester } from "oxlint/plugins-dev";

// oxlint は Rule 型を直接 export していない
export type Rule = Parameters<RuleTester["run"]>[1];

// 推論に任せると d.ts に oxlint の非公開型名が出てビルドが TS4082 で落ちる
export interface Plugin {
	meta: { name: string };
	rules: Record<string, Rule>;
}

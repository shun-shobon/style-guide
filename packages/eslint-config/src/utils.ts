import type { Awaitable, Rules } from "./types";

export async function interopDefault<T>(
	module: Awaitable<T>,
): Promise<T extends { default: infer U } ? U : T> {
	const resolved = await module;

	// eslint-disable-next-line typescript/no-unsafe-return, typescript/no-unsafe-member-access, typescript/no-explicit-any
	return (resolved as any).default ?? resolved;
}

export function renameRules(
	// eslint-disable-next-line typescript/no-explicit-any
	rules: Record<string, any>,
	from: string,
	to: string,
): Rules {
	return Object.fromEntries(
		Object.entries(rules).map(([key, value]) => [
			key.startsWith(from) ? `${to}${key.slice(from.length)}` : key,
			value,
		]),
	);
}

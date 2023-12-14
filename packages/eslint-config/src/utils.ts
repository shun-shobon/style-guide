import type { Awaitable } from "./types";

export async function interopDefault<T>(
  module: Awaitable<T>
): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await module;

  return (resolved as any).default ?? resolved;
}

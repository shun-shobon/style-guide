import javascript from "@shun-shobon/eslint-config-javascript";
import typescript from "@shun-shobon/eslint-config-typescript";
import { defineConfig } from "@shun-shobon/eslint-config-utils";

export default defineConfig(...javascript, ...typescript);

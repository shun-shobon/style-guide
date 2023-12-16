export const GLOB_SRC_EXT = "?([cm])[jt]s?(x)";
export const GLOB_SRC = `**/*.${GLOB_SRC_EXT}`;

export const GLOB_JS_EXT = "?([cm])js";
export const GLOB_JS = `**/*.${GLOB_JS_EXT}`;

export const GLOB_JSX_EXT = "?([cm])jsx";
export const GLOB_JSX = `**/*.${GLOB_JSX_EXT}`;

export const GLOB_TS_EXT = "?([cm])ts";
export const GLOB_TS = `**/*.${GLOB_TS_EXT}`;

export const GLOB_TSX_EXT = "?([cm])tsx";
export const GLOB_TSX = `**/*.${GLOB_TSX_EXT}`;

export const GLOB_STORYBOOK_EXT = `@(stories|story).${GLOB_TSX_EXT}`;
export const GLOB_STORYBOOK = `**/*.${GLOB_STORYBOOK_EXT}`;

export const GLOB_STORYBOOK_CONFIG = `**/.storybook/main.${GLOB_SRC_EXT}`;

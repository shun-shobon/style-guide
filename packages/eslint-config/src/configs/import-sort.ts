import type { ConfigItem } from "../types";
import { pluginImportSort } from "../plugins";

export function importSort(): ConfigItem[] {
  return [
    {
      plugins: {
        "import-sort": pluginImportSort,
      },
      rules: {
        // importをソートする
        "import-sort/imports": "warn",

        // exportをソートする
        "import-sort/exports": "warn",
      },
    },
  ];
}

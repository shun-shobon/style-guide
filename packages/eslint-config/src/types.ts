import type { FlatESLintConfig, Rules } from "eslint-define-config";

export interface ConfigItem
  extends Omit<FlatESLintConfig, "plugins" | "rules"> {
  /**
   * Relax plugins type limitation, as most of the plugins did not have correct type info yet.
   */
  plugins?: Record<string, any>;
  rules?: Partial<Rules>;
}

/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface RuleOptions {
  /**
   * apply `jsx-a11y/alt-text` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/alt-text/
   */
  'astro/jsx-a11y/alt-text'?: Linter.RuleEntry<AstroJsxA11YAltText>
  /**
   * apply `jsx-a11y/anchor-ambiguous-text` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-ambiguous-text/
   */
  'astro/jsx-a11y/anchor-ambiguous-text'?: Linter.RuleEntry<AstroJsxA11YAnchorAmbiguousText>
  /**
   * apply `jsx-a11y/anchor-has-content` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-has-content/
   */
  'astro/jsx-a11y/anchor-has-content'?: Linter.RuleEntry<AstroJsxA11YAnchorHasContent>
  /**
   * apply `jsx-a11y/anchor-is-valid` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-is-valid/
   */
  'astro/jsx-a11y/anchor-is-valid'?: Linter.RuleEntry<AstroJsxA11YAnchorIsValid>
  /**
   * apply `jsx-a11y/aria-activedescendant-has-tabindex` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-activedescendant-has-tabindex/
   */
  'astro/jsx-a11y/aria-activedescendant-has-tabindex'?: Linter.RuleEntry<AstroJsxA11YAriaActivedescendantHasTabindex>
  /**
   * apply `jsx-a11y/aria-props` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-props/
   */
  'astro/jsx-a11y/aria-props'?: Linter.RuleEntry<AstroJsxA11YAriaProps>
  /**
   * apply `jsx-a11y/aria-proptypes` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-proptypes/
   */
  'astro/jsx-a11y/aria-proptypes'?: Linter.RuleEntry<AstroJsxA11YAriaProptypes>
  /**
   * apply `jsx-a11y/aria-role` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-role/
   */
  'astro/jsx-a11y/aria-role'?: Linter.RuleEntry<AstroJsxA11YAriaRole>
  /**
   * apply `jsx-a11y/aria-unsupported-elements` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-unsupported-elements/
   */
  'astro/jsx-a11y/aria-unsupported-elements'?: Linter.RuleEntry<AstroJsxA11YAriaUnsupportedElements>
  /**
   * apply `jsx-a11y/autocomplete-valid` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/autocomplete-valid/
   */
  'astro/jsx-a11y/autocomplete-valid'?: Linter.RuleEntry<AstroJsxA11YAutocompleteValid>
  /**
   * apply `jsx-a11y/click-events-have-key-events` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/click-events-have-key-events/
   */
  'astro/jsx-a11y/click-events-have-key-events'?: Linter.RuleEntry<AstroJsxA11YClickEventsHaveKeyEvents>
  /**
   * apply `jsx-a11y/control-has-associated-label` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/control-has-associated-label/
   */
  'astro/jsx-a11y/control-has-associated-label'?: Linter.RuleEntry<AstroJsxA11YControlHasAssociatedLabel>
  /**
   * apply `jsx-a11y/heading-has-content` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/heading-has-content/
   */
  'astro/jsx-a11y/heading-has-content'?: Linter.RuleEntry<AstroJsxA11YHeadingHasContent>
  /**
   * apply `jsx-a11y/html-has-lang` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/html-has-lang/
   */
  'astro/jsx-a11y/html-has-lang'?: Linter.RuleEntry<AstroJsxA11YHtmlHasLang>
  /**
   * apply `jsx-a11y/iframe-has-title` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/iframe-has-title/
   */
  'astro/jsx-a11y/iframe-has-title'?: Linter.RuleEntry<AstroJsxA11YIframeHasTitle>
  /**
   * apply `jsx-a11y/img-redundant-alt` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/img-redundant-alt/
   */
  'astro/jsx-a11y/img-redundant-alt'?: Linter.RuleEntry<AstroJsxA11YImgRedundantAlt>
  /**
   * apply `jsx-a11y/interactive-supports-focus` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/interactive-supports-focus/
   */
  'astro/jsx-a11y/interactive-supports-focus'?: Linter.RuleEntry<AstroJsxA11YInteractiveSupportsFocus>
  /**
   * apply `jsx-a11y/label-has-associated-control` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/label-has-associated-control/
   */
  'astro/jsx-a11y/label-has-associated-control'?: Linter.RuleEntry<AstroJsxA11YLabelHasAssociatedControl>
  /**
   * apply `jsx-a11y/lang` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/lang/
   */
  'astro/jsx-a11y/lang'?: Linter.RuleEntry<AstroJsxA11YLang>
  /**
   * apply `jsx-a11y/media-has-caption` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/media-has-caption/
   */
  'astro/jsx-a11y/media-has-caption'?: Linter.RuleEntry<AstroJsxA11YMediaHasCaption>
  /**
   * apply `jsx-a11y/mouse-events-have-key-events` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/mouse-events-have-key-events/
   */
  'astro/jsx-a11y/mouse-events-have-key-events'?: Linter.RuleEntry<AstroJsxA11YMouseEventsHaveKeyEvents>
  /**
   * apply `jsx-a11y/no-access-key` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-access-key/
   */
  'astro/jsx-a11y/no-access-key'?: Linter.RuleEntry<AstroJsxA11YNoAccessKey>
  /**
   * apply `jsx-a11y/no-aria-hidden-on-focusable` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-aria-hidden-on-focusable/
   */
  'astro/jsx-a11y/no-aria-hidden-on-focusable'?: Linter.RuleEntry<AstroJsxA11YNoAriaHiddenOnFocusable>
  /**
   * apply `jsx-a11y/no-autofocus` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-autofocus/
   */
  'astro/jsx-a11y/no-autofocus'?: Linter.RuleEntry<AstroJsxA11YNoAutofocus>
  /**
   * apply `jsx-a11y/no-distracting-elements` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-distracting-elements/
   */
  'astro/jsx-a11y/no-distracting-elements'?: Linter.RuleEntry<AstroJsxA11YNoDistractingElements>
  /**
   * apply `jsx-a11y/no-interactive-element-to-noninteractive-role` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-interactive-element-to-noninteractive-role/
   */
  'astro/jsx-a11y/no-interactive-element-to-noninteractive-role'?: Linter.RuleEntry<AstroJsxA11YNoInteractiveElementToNoninteractiveRole>
  /**
   * apply `jsx-a11y/no-noninteractive-element-interactions` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-interactions/
   */
  'astro/jsx-a11y/no-noninteractive-element-interactions'?: Linter.RuleEntry<AstroJsxA11YNoNoninteractiveElementInteractions>
  /**
   * apply `jsx-a11y/no-noninteractive-element-to-interactive-role` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-to-interactive-role/
   */
  'astro/jsx-a11y/no-noninteractive-element-to-interactive-role'?: Linter.RuleEntry<AstroJsxA11YNoNoninteractiveElementToInteractiveRole>
  /**
   * apply `jsx-a11y/no-noninteractive-tabindex` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-tabindex/
   */
  'astro/jsx-a11y/no-noninteractive-tabindex'?: Linter.RuleEntry<AstroJsxA11YNoNoninteractiveTabindex>
  /**
   * apply `jsx-a11y/no-redundant-roles` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-redundant-roles/
   */
  'astro/jsx-a11y/no-redundant-roles'?: Linter.RuleEntry<AstroJsxA11YNoRedundantRoles>
  /**
   * apply `jsx-a11y/no-static-element-interactions` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-static-element-interactions/
   */
  'astro/jsx-a11y/no-static-element-interactions'?: Linter.RuleEntry<AstroJsxA11YNoStaticElementInteractions>
  /**
   * apply `jsx-a11y/prefer-tag-over-role` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/prefer-tag-over-role/
   */
  'astro/jsx-a11y/prefer-tag-over-role'?: Linter.RuleEntry<AstroJsxA11YPreferTagOverRole>
  /**
   * apply `jsx-a11y/role-has-required-aria-props` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-has-required-aria-props/
   */
  'astro/jsx-a11y/role-has-required-aria-props'?: Linter.RuleEntry<AstroJsxA11YRoleHasRequiredAriaProps>
  /**
   * apply `jsx-a11y/role-supports-aria-props` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-supports-aria-props/
   */
  'astro/jsx-a11y/role-supports-aria-props'?: Linter.RuleEntry<AstroJsxA11YRoleSupportsAriaProps>
  /**
   * apply `jsx-a11y/scope` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/scope/
   */
  'astro/jsx-a11y/scope'?: Linter.RuleEntry<AstroJsxA11YScope>
  /**
   * apply `jsx-a11y/tabindex-no-positive` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/tabindex-no-positive/
   */
  'astro/jsx-a11y/tabindex-no-positive'?: Linter.RuleEntry<AstroJsxA11YTabindexNoPositive>
  /**
   * the client:only directive is missing the correct component's framework value
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/missing-client-only-directive-value/
   */
  'astro/missing-client-only-directive-value'?: Linter.RuleEntry<[]>
  /**
   * disallow conflicting set directives and child contents
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-conflict-set-directives/
   */
  'astro/no-conflict-set-directives'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `Astro.canonicalURL`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-canonicalurl/
   */
  'astro/no-deprecated-astro-canonicalurl'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `Astro.fetchContent()`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-fetchcontent/
   */
  'astro/no-deprecated-astro-fetchcontent'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `Astro.resolve()`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-resolve/
   */
  'astro/no-deprecated-astro-resolve'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `getEntryBySlug()`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-getentrybyslug/
   */
  'astro/no-deprecated-getentrybyslug'?: Linter.RuleEntry<[]>
  /**
   * disallow value export
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-exports-from-components/
   */
  'astro/no-exports-from-components'?: Linter.RuleEntry<[]>
  /**
   * disallow omitted end tags
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-omitted-end-tags/
   * @deprecated
   */
  'astro/no-omitted-end-tags'?: Linter.RuleEntry<[]>
  /**
   * disallow `prerender` export outside of pages/ directory
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-prerender-export-outside-pages/
   */
  'astro/no-prerender-export-outside-pages'?: Linter.RuleEntry<[]>
  /**
   * disallow use of `set:html` to prevent XSS attack
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-html-directive/
   */
  'astro/no-set-html-directive'?: Linter.RuleEntry<[]>
  /**
   * disallow use of `set:text`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-text-directive/
   */
  'astro/no-set-text-directive'?: Linter.RuleEntry<[]>
  /**
   * disallow inline `<script>` without `src` to encourage CSP-safe patterns
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unsafe-inline-scripts/
   */
  'astro/no-unsafe-inline-scripts'?: Linter.RuleEntry<AstroNoUnsafeInlineScripts>
  /**
   * disallow selectors defined in `style` tag that don't use in HTML
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-css-selector/
   */
  'astro/no-unused-css-selector'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `define:vars={...}` in `style` tag
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-define-vars-in-style/
   */
  'astro/no-unused-define-vars-in-style'?: Linter.RuleEntry<[]>
  /**
   * require `class:list` directives instead of `class` with expressions
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-class-list-directive/
   */
  'astro/prefer-class-list-directive'?: Linter.RuleEntry<[]>
  /**
   * require use object instead of ternary expression in `class:list`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-object-class-list/
   */
  'astro/prefer-object-class-list'?: Linter.RuleEntry<[]>
  /**
   * require use split array elements in `class:list`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-split-class-list/
   */
  'astro/prefer-split-class-list'?: Linter.RuleEntry<AstroPreferSplitClassList>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/semi/
   */
  'astro/semi'?: Linter.RuleEntry<AstroSemi>
  /**
   * enforce sorting of attributes
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/sort-attributes/
   */
  'astro/sort-attributes'?: Linter.RuleEntry<AstroSortAttributes>
  /**
   * disallow warnings when compiling.
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/
   * @deprecated
   */
  'astro/valid-compile'?: Linter.RuleEntry<[]>
  /**
   * Automatically sort exports.
   * @see https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order
   */
  'import-sort/exports'?: Linter.RuleEntry<[]>
  /**
   * Automatically sort imports.
   * @see https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order
   */
  'import-sort/imports'?: Linter.RuleEntry<ImportSortImports>
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/consistent-type-specifier-style.md
   */
  'import/consistent-type-specifier-style'?: Linter.RuleEntry<ImportConsistentTypeSpecifierStyle>
  /**
   * Ensure a default export is present, given a default import.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/default.md
   */
  'import/default'?: Linter.RuleEntry<[]>
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/dynamic-import-chunkname.md
   */
  'import/dynamic-import-chunkname'?: Linter.RuleEntry<ImportDynamicImportChunkname>
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/export.md
   */
  'import/export'?: Linter.RuleEntry<[]>
  /**
   * Ensure all exports appear after other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/exports-last.md
   */
  'import/exports-last'?: Linter.RuleEntry<[]>
  /**
   * Ensure consistent use of file extension within the import path.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/extensions.md
   */
  'import/extensions'?: Linter.RuleEntry<ImportExtensions>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/first.md
   */
  'import/first'?: Linter.RuleEntry<ImportFirst>
  /**
   * Prefer named exports to be grouped together in a single export declaration.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/group-exports.md
   */
  'import/group-exports'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `import-x/first`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/imports-first.md
   * @deprecated
   */
  'import/imports-first'?: Linter.RuleEntry<ImportImportsFirst>
  /**
   * Enforce the maximum number of dependencies a module can have.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/max-dependencies.md
   */
  'import/max-dependencies'?: Linter.RuleEntry<ImportMaxDependencies>
  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/named.md
   */
  'import/named'?: Linter.RuleEntry<ImportNamed>
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/namespace.md
   */
  'import/namespace'?: Linter.RuleEntry<ImportNamespace>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/newline-after-import.md
   */
  'import/newline-after-import'?: Linter.RuleEntry<ImportNewlineAfterImport>
  /**
   * Forbid import of modules using absolute paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-absolute-path.md
   */
  'import/no-absolute-path'?: Linter.RuleEntry<ImportNoAbsolutePath>
  /**
   * Forbid AMD `require` and `define` calls.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-amd.md
   */
  'import/no-amd'?: Linter.RuleEntry<[]>
  /**
   * Forbid anonymous values as default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-anonymous-default-export.md
   */
  'import/no-anonymous-default-export'?: Linter.RuleEntry<ImportNoAnonymousDefaultExport>
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-commonjs.md
   */
  'import/no-commonjs'?: Linter.RuleEntry<ImportNoCommonjs>
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-cycle.md
   */
  'import/no-cycle'?: Linter.RuleEntry<ImportNoCycle>
  /**
   * Forbid default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-default-export.md
   */
  'import/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-deprecated.md
   */
  'import/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-duplicates.md
   */
  'import/no-duplicates'?: Linter.RuleEntry<ImportNoDuplicates>
  /**
   * Forbid `require()` calls with expressions.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-dynamic-require.md
   */
  'import/no-dynamic-require'?: Linter.RuleEntry<ImportNoDynamicRequire>
  /**
   * Forbid empty named import blocks.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-empty-named-blocks.md
   */
  'import/no-empty-named-blocks'?: Linter.RuleEntry<[]>
  /**
   * Forbid the use of extraneous packages.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-extraneous-dependencies.md
   */
  'import/no-extraneous-dependencies'?: Linter.RuleEntry<ImportNoExtraneousDependencies>
  /**
   * Forbid import statements with CommonJS module.exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-import-module-exports.md
   */
  'import/no-import-module-exports'?: Linter.RuleEntry<ImportNoImportModuleExports>
  /**
   * Forbid importing the submodules of other modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-internal-modules.md
   */
  'import/no-internal-modules'?: Linter.RuleEntry<ImportNoInternalModules>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-mutable-exports.md
   */
  'import/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as identifier of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-named-as-default.md
   */
  'import/no-named-as-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as property of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-named-as-default-member.md
   */
  'import/no-named-as-default-member'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-named-default.md
   */
  'import/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid named exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-named-export.md
   */
  'import/no-named-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-namespace.md
   */
  'import/no-namespace'?: Linter.RuleEntry<ImportNoNamespace>
  /**
   * Forbid Node.js builtin modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-nodejs-modules.md
   */
  'import/no-nodejs-modules'?: Linter.RuleEntry<ImportNoNodejsModules>
  /**
   * Forbid importing packages through relative paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-relative-packages.md
   */
  'import/no-relative-packages'?: Linter.RuleEntry<ImportNoRelativePackages>
  /**
   * Forbid importing modules from parent directories.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-relative-parent-imports.md
   */
  'import/no-relative-parent-imports'?: Linter.RuleEntry<ImportNoRelativeParentImports>
  /**
   * Forbid importing a default export by a different name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-rename-default.md
   */
  'import/no-rename-default'?: Linter.RuleEntry<ImportNoRenameDefault>
  /**
   * Enforce which files can be imported in a given folder.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-restricted-paths.md
   */
  'import/no-restricted-paths'?: Linter.RuleEntry<ImportNoRestrictedPaths>
  /**
   * Forbid a module from importing itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-self-import.md
   */
  'import/no-self-import'?: Linter.RuleEntry<[]>
  /**
   * Forbid unassigned imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-unassigned-import.md
   */
  'import/no-unassigned-import'?: Linter.RuleEntry<ImportNoUnassignedImport>
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-unresolved.md
   */
  'import/no-unresolved'?: Linter.RuleEntry<ImportNoUnresolved>
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-unused-modules.md
   */
  'import/no-unused-modules'?: Linter.RuleEntry<ImportNoUnusedModules>
  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-useless-path-segments.md
   */
  'import/no-useless-path-segments'?: Linter.RuleEntry<ImportNoUselessPathSegments>
  /**
   * Forbid webpack loader syntax in imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-webpack-loader-syntax.md
   */
  'import/no-webpack-loader-syntax'?: Linter.RuleEntry<[]>
  /**
   * Enforce a convention in module import order.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/order.md
   */
  'import/order'?: Linter.RuleEntry<ImportOrder>
  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/prefer-default-export.md
   */
  'import/prefer-default-export'?: Linter.RuleEntry<ImportPreferDefaultExport>
  /**
   * Enforce using namespace imports for specific modules, like `react`/`react-dom`, etc.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/prefer-namespace-import.md
   */
  'import/prefer-namespace-import'?: Linter.RuleEntry<ImportPreferNamespaceImport>
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/unambiguous.md
   */
  'import/unambiguous'?: Linter.RuleEntry<[]>
  /**
   * Enforce emojis are wrapped in `<span>` and provide screen reader access.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md
   * @deprecated
   */
  'jsx-a11y/accessible-emoji'?: Linter.RuleEntry<JsxA11YAccessibleEmoji>
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md
   */
  'jsx-a11y/alt-text'?: Linter.RuleEntry<JsxA11YAltText>
  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md
   */
  'jsx-a11y/anchor-ambiguous-text'?: Linter.RuleEntry<JsxA11YAnchorAmbiguousText>
  /**
   * Enforce all anchors to contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md
   */
  'jsx-a11y/anchor-has-content'?: Linter.RuleEntry<JsxA11YAnchorHasContent>
  /**
   * Enforce all anchors are valid, navigable elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md
   */
  'jsx-a11y/anchor-is-valid'?: Linter.RuleEntry<JsxA11YAnchorIsValid>
  /**
   * Enforce elements with aria-activedescendant are tabbable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md
   */
  'jsx-a11y/aria-activedescendant-has-tabindex'?: Linter.RuleEntry<JsxA11YAriaActivedescendantHasTabindex>
  /**
   * Enforce all `aria-*` props are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md
   */
  'jsx-a11y/aria-props'?: Linter.RuleEntry<JsxA11YAriaProps>
  /**
   * Enforce ARIA state and property values are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md
   */
  'jsx-a11y/aria-proptypes'?: Linter.RuleEntry<JsxA11YAriaProptypes>
  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md
   */
  'jsx-a11y/aria-role'?: Linter.RuleEntry<JsxA11YAriaRole>
  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md
   */
  'jsx-a11y/aria-unsupported-elements'?: Linter.RuleEntry<JsxA11YAriaUnsupportedElements>
  /**
   * Enforce that autocomplete attributes are used correctly.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md
   */
  'jsx-a11y/autocomplete-valid'?: Linter.RuleEntry<JsxA11YAutocompleteValid>
  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md
   */
  'jsx-a11y/click-events-have-key-events'?: Linter.RuleEntry<JsxA11YClickEventsHaveKeyEvents>
  /**
   * Enforce that a control (an interactive element) has a text label.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
   */
  'jsx-a11y/control-has-associated-label'?: Linter.RuleEntry<JsxA11YControlHasAssociatedLabel>
  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md
   */
  'jsx-a11y/heading-has-content'?: Linter.RuleEntry<JsxA11YHeadingHasContent>
  /**
   * Enforce `<html>` element has `lang` prop.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md
   */
  'jsx-a11y/html-has-lang'?: Linter.RuleEntry<JsxA11YHtmlHasLang>
  /**
   * Enforce iframe elements have a title attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md
   */
  'jsx-a11y/iframe-has-title'?: Linter.RuleEntry<JsxA11YIframeHasTitle>
  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md
   */
  'jsx-a11y/img-redundant-alt'?: Linter.RuleEntry<JsxA11YImgRedundantAlt>
  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md
   */
  'jsx-a11y/interactive-supports-focus'?: Linter.RuleEntry<JsxA11YInteractiveSupportsFocus>
  /**
   * Enforce that a `label` tag has a text label and an associated control.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
   */
  'jsx-a11y/label-has-associated-control'?: Linter.RuleEntry<JsxA11YLabelHasAssociatedControl>
  /**
   * Enforce that `<label>` elements have the `htmlFor` prop.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md
   * @deprecated
   */
  'jsx-a11y/label-has-for'?: Linter.RuleEntry<JsxA11YLabelHasFor>
  /**
   * Enforce lang attribute has a valid value.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md
   */
  'jsx-a11y/lang'?: Linter.RuleEntry<JsxA11YLang>
  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md
   */
  'jsx-a11y/media-has-caption'?: Linter.RuleEntry<JsxA11YMediaHasCaption>
  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md
   */
  'jsx-a11y/mouse-events-have-key-events'?: Linter.RuleEntry<JsxA11YMouseEventsHaveKeyEvents>
  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md
   */
  'jsx-a11y/no-access-key'?: Linter.RuleEntry<JsxA11YNoAccessKey>
  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md
   */
  'jsx-a11y/no-aria-hidden-on-focusable'?: Linter.RuleEntry<JsxA11YNoAriaHiddenOnFocusable>
  /**
   * Enforce autoFocus prop is not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md
   */
  'jsx-a11y/no-autofocus'?: Linter.RuleEntry<JsxA11YNoAutofocus>
  /**
   * Enforce distracting elements are not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md
   */
  'jsx-a11y/no-distracting-elements'?: Linter.RuleEntry<JsxA11YNoDistractingElements>
  /**
   * Interactive elements should not be assigned non-interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role'?: Linter.RuleEntry<JsxA11YNoInteractiveElementToNoninteractiveRole>
  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md
   */
  'jsx-a11y/no-noninteractive-element-interactions'?: Linter.RuleEntry<JsxA11YNoNoninteractiveElementInteractions>
  /**
   * Non-interactive elements should not be assigned interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role'?: Linter.RuleEntry<JsxA11YNoNoninteractiveElementToInteractiveRole>
  /**
   * `tabIndex` should only be declared on interactive elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md
   */
  'jsx-a11y/no-noninteractive-tabindex'?: Linter.RuleEntry<JsxA11YNoNoninteractiveTabindex>
  /**
   * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md
   * @deprecated
   */
  'jsx-a11y/no-onchange'?: Linter.RuleEntry<JsxA11YNoOnchange>
  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md
   */
  'jsx-a11y/no-redundant-roles'?: Linter.RuleEntry<JsxA11YNoRedundantRoles>
  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md
   */
  'jsx-a11y/no-static-element-interactions'?: Linter.RuleEntry<JsxA11YNoStaticElementInteractions>
  /**
   * Enforces using semantic DOM elements over the ARIA `role` property.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md
   */
  'jsx-a11y/prefer-tag-over-role'?: Linter.RuleEntry<JsxA11YPreferTagOverRole>
  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md
   */
  'jsx-a11y/role-has-required-aria-props'?: Linter.RuleEntry<JsxA11YRoleHasRequiredAriaProps>
  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md
   */
  'jsx-a11y/role-supports-aria-props'?: Linter.RuleEntry<JsxA11YRoleSupportsAriaProps>
  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md
   */
  'jsx-a11y/scope'?: Linter.RuleEntry<JsxA11YScope>
  /**
   * Enforce `tabIndex` value is not greater than zero.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md
   */
  'jsx-a11y/tabindex-no-positive'?: Linter.RuleEntry<JsxA11YTabindexNoPositive>
  /**
   * Enforce font-display behavior with Google Fonts.
   * @see https://nextjs.org/docs/messages/google-font-display
   */
  'next/google-font-display'?: Linter.RuleEntry<[]>
  /**
   * Ensure `preconnect` is used with Google Fonts.
   * @see https://nextjs.org/docs/messages/google-font-preconnect
   */
  'next/google-font-preconnect'?: Linter.RuleEntry<[]>
  /**
   * Enforce `id` attribute on `next/script` components with inline content.
   * @see https://nextjs.org/docs/messages/inline-script-id
   */
  'next/inline-script-id'?: Linter.RuleEntry<[]>
  /**
   * Prefer `@next/third-parties/google` when using the inline script for Google Analytics and Tag Manager.
   * @see https://nextjs.org/docs/messages/next-script-for-ga
   */
  'next/next-script-for-ga'?: Linter.RuleEntry<[]>
  /**
   * Prevent assignment to the `module` variable.
   * @see https://nextjs.org/docs/messages/no-assign-module-variable
   */
  'next/no-assign-module-variable'?: Linter.RuleEntry<[]>
  /**
   * Prevent Client Components from being async functions.
   * @see https://nextjs.org/docs/messages/no-async-client-component
   */
  'next/no-async-client-component'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-before-interactive-script-outside-document
   */
  'next/no-before-interactive-script-outside-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent manual stylesheet tags.
   * @see https://nextjs.org/docs/messages/no-css-tags
   */
  'next/no-css-tags'?: Linter.RuleEntry<[]>
  /**
   * Prevent importing `next/document` outside of `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-document-import-in-page
   */
  'next/no-document-import-in-page'?: Linter.RuleEntry<[]>
  /**
   * Prevent duplicate usage of `<Head>` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-duplicate-head
   */
  'next/no-duplicate-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<head>` element.
   * @see https://nextjs.org/docs/messages/no-head-element
   */
  'next/no-head-element'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/head` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-head-import-in-document
   */
  'next/no-head-import-in-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<a>` elements to navigate to internal Next.js pages.
   * @see https://nextjs.org/docs/messages/no-html-link-for-pages
   */
  'next/no-html-link-for-pages'?: Linter.RuleEntry<NextNoHtmlLinkForPages>
  /**
   * Prevent usage of `<img>` element due to slower LCP and higher bandwidth.
   * @see https://nextjs.org/docs/messages/no-img-element
   */
  'next/no-img-element'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `location.assign` or `location.href` assignment to navigate to internal Next.js pages.
   * @see https://nextjs.org/docs/messages/no-location-assign-relative-destination
   */
  'next/no-location-assign-relative-destination'?: Linter.RuleEntry<[]>
  /**
   * Prevent page-only custom fonts.
   * @see https://nextjs.org/docs/messages/no-page-custom-font
   */
  'next/no-page-custom-font'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/script` in `next/head` component.
   * @see https://nextjs.org/docs/messages/no-script-component-in-head
   */
  'next/no-script-component-in-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `styled-jsx` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-styled-jsx-in-document
   */
  'next/no-styled-jsx-in-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent synchronous scripts.
   * @see https://nextjs.org/docs/messages/no-sync-scripts
   */
  'next/no-sync-scripts'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<title>` with `Head` component from `next/document`.
   * @see https://nextjs.org/docs/messages/no-title-in-document-head
   */
  'next/no-title-in-document-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent common typos in Next.js data fetching functions.
   */
  'next/no-typos'?: Linter.RuleEntry<[]>
  /**
   * Prevent duplicate polyfills from Polyfill.io.
   * @see https://nextjs.org/docs/messages/no-unwanted-polyfillio
   */
  'next/no-unwanted-polyfillio'?: Linter.RuleEntry<[]>
  /**
   * require `return` statements after callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md
   */
  'node/callback-return'?: Linter.RuleEntry<NodeCallbackReturn>
  /**
   * enforce either `module.exports` or `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md
   */
  'node/exports-style'?: Linter.RuleEntry<NodeExportsStyle>
  /**
   * enforce the style of file extensions in `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md
   */
  'node/file-extension-in-import'?: Linter.RuleEntry<NodeFileExtensionInImport>
  /**
   * require `require()` calls to be placed at top-level module scope
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md
   */
  'node/global-require'?: Linter.RuleEntry<[]>
  /**
   * require error handling in callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md
   */
  'node/handle-callback-err'?: Linter.RuleEntry<NodeHandleCallbackErr>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   */
  'node/hashbang'?: Linter.RuleEntry<NodeHashbang>
  /**
   * enforce Node.js-style error-first callback pattern is followed
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md
   */
  'node/no-callback-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated APIs
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md
   */
  'node/no-deprecated-api'?: Linter.RuleEntry<NodeNoDeprecatedApi>
  /**
   * disallow the assignment to `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md
   */
  'node/no-exports-assign'?: Linter.RuleEntry<[]>
  /**
   * disallow `import` declarations which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md
   */
  'node/no-extraneous-import'?: Linter.RuleEntry<NodeNoExtraneousImport>
  /**
   * disallow `require()` expressions which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md
   */
  'node/no-extraneous-require'?: Linter.RuleEntry<NodeNoExtraneousRequire>
  /**
   * disallow third-party modules which are hiding core modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-hide-core-modules.md
   * @deprecated
   */
  'node/no-hide-core-modules'?: Linter.RuleEntry<NodeNoHideCoreModules>
  /**
   * disallow `import` declarations which import missing modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md
   */
  'node/no-missing-import'?: Linter.RuleEntry<NodeNoMissingImport>
  /**
   * disallow `require()` expressions which import missing modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md
   */
  'node/no-missing-require'?: Linter.RuleEntry<NodeNoMissingRequire>
  /**
   * disallow `require` calls to be mixed with regular variable declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md
   */
  'node/no-mixed-requires'?: Linter.RuleEntry<NodeNoMixedRequires>
  /**
   * disallow `new` operators with calls to `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md
   */
  'node/no-new-require'?: Linter.RuleEntry<[]>
  /**
   * disallow string concatenation with `__dirname` and `__filename`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md
   */
  'node/no-path-concat'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of `process.env`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md
   */
  'node/no-process-env'?: Linter.RuleEntry<NodeNoProcessEnv>
  /**
   * disallow the use of `process.exit()`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md
   */
  'node/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * disallow specified modules when loaded by `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md
   */
  'node/no-restricted-import'?: Linter.RuleEntry<NodeNoRestrictedImport>
  /**
   * disallow specified modules when loaded by `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md
   */
  'node/no-restricted-require'?: Linter.RuleEntry<NodeNoRestrictedRequire>
  /**
   * disallow synchronous methods
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md
   */
  'node/no-sync'?: Linter.RuleEntry<NodeNoSync>
  /**
   * disallow top-level `await` in published modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-top-level-await.md
   */
  'node/no-top-level-await'?: Linter.RuleEntry<NodeNoTopLevelAwait>
  /**
   * disallow `bin` files that npm ignores
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md
   */
  'node/no-unpublished-bin'?: Linter.RuleEntry<NodeNoUnpublishedBin>
  /**
   * disallow `import` declarations which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md
   */
  'node/no-unpublished-import'?: Linter.RuleEntry<NodeNoUnpublishedImport>
  /**
   * disallow `require()` expressions which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md
   */
  'node/no-unpublished-require'?: Linter.RuleEntry<NodeNoUnpublishedRequire>
  /**
   * disallow unsupported ECMAScript built-ins on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md
   */
  'node/no-unsupported-features/es-builtins'?: Linter.RuleEntry<NodeNoUnsupportedFeaturesEsBuiltins>
  /**
   * disallow unsupported ECMAScript syntax on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md
   */
  'node/no-unsupported-features/es-syntax'?: Linter.RuleEntry<NodeNoUnsupportedFeaturesEsSyntax>
  /**
   * disallow unsupported Node.js built-in APIs on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md
   */
  'node/no-unsupported-features/node-builtins'?: Linter.RuleEntry<NodeNoUnsupportedFeaturesNodeBuiltins>
  /**
   * enforce either `Buffer` or `require("buffer").Buffer`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md
   */
  'node/prefer-global/buffer'?: Linter.RuleEntry<NodePreferGlobalBuffer>
  /**
   * enforce either `console` or `require("console")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/console.md
   */
  'node/prefer-global/console'?: Linter.RuleEntry<NodePreferGlobalConsole>
  /**
   * enforce either `crypto` or `require("crypto").webcrypto`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/crypto.md
   */
  'node/prefer-global/crypto'?: Linter.RuleEntry<NodePreferGlobalCrypto>
  /**
   * enforce either `process` or `require("process")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md
   */
  'node/prefer-global/process'?: Linter.RuleEntry<NodePreferGlobalProcess>
  /**
   * enforce either `TextDecoder` or `require("util").TextDecoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-decoder.md
   */
  'node/prefer-global/text-decoder'?: Linter.RuleEntry<NodePreferGlobalTextDecoder>
  /**
   * enforce either `TextEncoder` or `require("util").TextEncoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-encoder.md
   */
  'node/prefer-global/text-encoder'?: Linter.RuleEntry<NodePreferGlobalTextEncoder>
  /**
   * enforce either global timer functions or `require("timers")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/timers.md
   */
  'node/prefer-global/timers'?: Linter.RuleEntry<NodePreferGlobalTimers>
  /**
   * enforce either `URL` or `require("url").URL`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url.md
   */
  'node/prefer-global/url'?: Linter.RuleEntry<NodePreferGlobalUrl>
  /**
   * enforce either `URLSearchParams` or `require("url").URLSearchParams`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md
   */
  'node/prefer-global/url-search-params'?: Linter.RuleEntry<NodePreferGlobalUrlSearchParams>
  /**
   * enforce using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md
   */
  'node/prefer-node-protocol'?: Linter.RuleEntry<NodePreferNodeProtocol>
  /**
   * enforce `require("dns").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/dns.md
   */
  'node/prefer-promises/dns'?: Linter.RuleEntry<[]>
  /**
   * enforce `require("fs").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md
   */
  'node/prefer-promises/fs'?: Linter.RuleEntry<[]>
  /**
   * require that `process.exit()` expressions use the same code path as `throw`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md
   */
  'node/process-exit-as-throw'?: Linter.RuleEntry<[]>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   * @deprecated
   */
  'node/shebang'?: Linter.RuleEntry<NodeShebang>
  /**
   * For a perfect SEO score, always provide href attribute for <a> elements.
   * @see https://qwik.dev/docs/advanced/dollar/
   */
  'qwik/jsx-a'?: Linter.RuleEntry<[]>
  /**
   * For performance reasons, always provide width and height attributes for <img> elements, it will help to prevent layout shifts.
   * @see https://qwik.dev/docs/advanced/eslint/#jsx-img
   */
  'qwik/jsx-img'?: Linter.RuleEntry<[]>
  /**
   * Disallow missing `key` props in iterators/collection literals
   * @see https://qwik.dev/docs/advanced/eslint/#jsx-key
   */
  'qwik/jsx-key'?: Linter.RuleEntry<QwikJsxKey>
  /**
   * Disallow javascript: URLs.
   * @see https://qwik.dev/docs/advanced/eslint/#jsx-no-script-url
   */
  'qwik/jsx-no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Detect declaration location of loader$.
   * @see https://qwik.dev/docs/advanced/eslint/#loader-location
   */
  'qwik/loader-location'?: Linter.RuleEntry<QwikLoaderLocation>
  /**
   * Detect preventDefault in $(()=>{}) Async Functions.
   * @see https://qwik.dev/docs/components/events/#preventdefault--stoppropagation
   */
  'qwik/no-async-prevent-default'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of React-specific `className`/`htmlFor` props.
   * @see https://qwik.dev/docs/advanced/eslint/#no-react-props
   */
  'qwik/no-react-props'?: Linter.RuleEntry<[]>
  /**
   * Detect useVisibleTask$() functions.
   * @see https://qwik.dev/docs/guides/best-practices/#use-usevisibletask-as-a-last-resort
   */
  'qwik/no-use-visible-task'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the classlist prop over importing a classnames helper. The classlist prop accepts an object `{ [class: string]: boolean }` just like classnames.
   * @see https://qwik.dev/docs/advanced/eslint/#prefer-classlist
   */
  'qwik/prefer-classlist'?: Linter.RuleEntry<QwikPreferClasslist>
  /**
   * Detect unused server$() functions.
   * @see https://qwik.dev/docs/advanced/eslint/#unused-server
   */
  'qwik/unused-server'?: Linter.RuleEntry<[]>
  /**
   * Detect invalid use of use hooks.
   * @see https://qwik.dev/docs/advanced/eslint/#use-method-usage
   */
  'qwik/use-method-usage'?: Linter.RuleEntry<[]>
  /**
   * Used the tsc typechecker to detect the capture of unserializable data in dollar ($) scopes.
   * @see https://qwik.dev/docs/advanced/eslint/#valid-lexical-scope
   */
  'qwik/valid-lexical-scope'?: Linter.RuleEntry<QwikValidLexicalScope>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react/dom-no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML' and 'children' at the same time.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react/dom-no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'findDOMNode'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react/dom-no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'flushSync'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-flush-sync
   */
  'react/dom-no-flush-sync'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.hydrate()' with 'hydrateRoot()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-hydrate
   */
  'react/dom-no-hydrate'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'type' attribute for 'button' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react/dom-no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'sandbox' attribute for 'iframe' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react/dom-no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.render()' with 'createRoot(node).render()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render
   */
  'react/dom-no-render'?: Linter.RuleEntry<[]>
  /**
   * Disallows the return value of 'ReactDOM.render'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react/dom-no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'javascript:' URLs as attribute values.
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react/dom-no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of string style prop in JSX. Use an object instead.
   * @see https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
   */
  'react/dom-no-string-style-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows unknown 'DOM' properties.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react/dom-no-unknown-property'?: Linter.RuleEntry<ReactDomNoUnknownProperty>
  /**
   * Enforces that the 'sandbox' attribute for 'iframe' elements is not set to unsafe combinations.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react/dom-no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'target="_blank"' without 'rel="noreferrer noopener"'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react/dom-no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useFormState' with 'useActionState'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-use-form-state
   */
  'react/dom-no-use-form-state'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'children' in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react/dom-no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react/error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react/exhaustive-deps'?: Linter.RuleEntry<ReactExhaustiveDeps>
  /**
   * Validates against assignment/mutation of globals during render, part of ensuring that side effects must run outside of render.
   * @see https://eslint-react.xyz/docs/rules/globals
   */
  'react/globals'?: Linter.RuleEntry<[]>
  /**
   * Validates against mutating props, state, and other immutable values, including through functions passed into frozen contexts such as JSX props, hook arguments, and hook return values.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react/immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-children-prop
   */
  'react/jsx-no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop when children are also passed as nested content.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-children-prop-with-children
   */
  'react/jsx-no-children-prop-with-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents comment strings from being accidentally inserted into a JSX element's text nodes.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
   */
  'react/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Prevent patterns that cause deoptimization when using the automatic JSX runtime.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-key-after-spread
   */
  'react/jsx-no-key-after-spread'?: Linter.RuleEntry<[]>
  /**
   * Catches `$` before `{expr}` in JSX — typically from template literal `${expr}` being copy-pasted into JSX without removing the `$`. The `$` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-leaked-dollar
   */
  'react/jsx-no-leaked-dollar'?: Linter.RuleEntry<[]>
  /**
   * Catches `;` at the start of JSX text nodes — typically from accidentally placing a statement-ending `;` inside JSX. The `;` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-leaked-semicolon
   */
  'react/jsx-no-leaked-semicolon'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX namespace syntax, as React does not support them.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-namespace
   */
  'react/jsx-no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallows useless fragment elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment
   */
  'react/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactJsxNoUselessFragment>
  /**
   * Enforces identifier names assigned from `createContext` calls to be a valid component name with the suffix `Context`.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-context-name
   */
  'react/naming-convention-context-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useId' calls to be either 'id' or end with 'Id'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-id-name
   */
  'react/naming-convention-id-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useRef' calls to be either 'ref' or end with 'Ref'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-ref-name
   */
  'react/naming-convention-ref-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components and Hooks.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react/no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react/no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react/no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react/no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react/no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react/no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react/no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react/no-unstable-default-props'?: Linter.RuleEntry<ReactNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react/no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about state variables that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react/no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react/purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react/refs'?: Linter.RuleEntry<[]>
  /**
   * Validates and transforms React Client/Server Function definitions.
   * @see https://eslint-react.xyz/docs/rules/rsc-function-definition
   */
  'react/rsc-function-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react/rules-of-hooks'?: Linter.RuleEntry<ReactRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react/set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react/set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates that components are static, not recreated every render.
   * @see https://eslint-react.xyz/docs/rules/static-components
   */
  'react/static-components'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react/unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react/use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react/use-state'?: Linter.RuleEntry<ReactUseState>
  /**
   * Enforces that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  'react/web-api-no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'fetch' in a component or custom hook has a corresponding 'AbortController' abort in the cleanup function.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-fetch
   */
  'react/web-api-no-leaked-fetch'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'IntersectionObserver' created in a component or custom hook has a corresponding 'IntersectionObserver.disconnect()'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-intersection-observer
   */
  'react/web-api-no-leaked-intersection-observer'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  'react/web-api-no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'ResizeObserver' created in a component or custom hook has a corresponding 'ResizeObserver.disconnect()'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  'react/web-api-no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  'react/web-api-no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react/x-error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react/x-exhaustive-deps'?: Linter.RuleEntry<ReactXExhaustiveDeps>
  /**
   * Validates against assignment/mutation of globals during render, part of ensuring that side effects must run outside of render.
   * @see https://eslint-react.xyz/docs/rules/globals
   */
  'react/x-globals'?: Linter.RuleEntry<[]>
  /**
   * Validates against mutating props, state, and other immutable values, including through functions passed into frozen contexts such as JSX props, hook arguments, and hook return values.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react/x-immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react/x-no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react/x-no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react/x-no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react/x-no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react/x-no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react/x-no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react/x-no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react/x-no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react/x-no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react/x-no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react/x-no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react/x-no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react/x-no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components and Hooks.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react/x-no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react/x-no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react/x-no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react/x-no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react/x-no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react/x-no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react/x-no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react/x-no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react/x-no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react/x-no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react/x-no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react/x-no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react/x-no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react/x-no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react/x-no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react/x-no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react/x-no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react/x-no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react/x-no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react/x-no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react/x-no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react/x-no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react/x-no-unstable-default-props'?: Linter.RuleEntry<ReactXNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react/x-no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react/x-no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about state variables that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react/x-no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react/x-no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react/x-purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react/x-refs'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react/x-rules-of-hooks'?: Linter.RuleEntry<ReactXRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react/x-set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react/x-set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates that components are static, not recreated every render.
   * @see https://eslint-react.xyz/docs/rules/static-components
   */
  'react/x-static-components'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react/x-unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react/x-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react/x-use-state'?: Linter.RuleEntry<ReactXUseState>
  /**
   * disallow confusing quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html
   */
  'regexp/confusing-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent escaping of control characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html
   */
  'regexp/control-character-escape'?: Linter.RuleEntry<[]>
  /**
   * enforce single grapheme in string literal
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/grapheme-string-literal.html
   */
  'regexp/grapheme-string-literal'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent usage of hexadecimal escape
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/hexadecimal-escape.html
   */
  'regexp/hexadecimal-escape'?: Linter.RuleEntry<RegexpHexadecimalEscape>
  /**
   * enforce into your favorite case
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/letter-case.html
   */
  'regexp/letter-case'?: Linter.RuleEntry<RegexpLetterCase>
  /**
   * enforce match any character style
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html
   */
  'regexp/match-any'?: Linter.RuleEntry<RegexpMatchAny>
  /**
   * enforce use of escapes on negation
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html
   */
  'regexp/negation'?: Linter.RuleEntry<[]>
  /**
   * disallow elements that contradict assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html
   */
  'regexp/no-contradiction-with-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow control characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-control-character.html
   */
  'regexp/no-control-character'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate characters in the RegExp character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html
   */
  'regexp/no-dupe-characters-character-class'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate disjunctions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html
   */
  'regexp/no-dupe-disjunctions'?: Linter.RuleEntry<RegexpNoDupeDisjunctions>
  /**
   * disallow alternatives without elements
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html
   */
  'regexp/no-empty-alternative'?: Linter.RuleEntry<[]>
  /**
   * disallow capturing group that captures empty.
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html
   */
  'regexp/no-empty-capturing-group'?: Linter.RuleEntry<[]>
  /**
   * disallow character classes that match no characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html
   */
  'regexp/no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * disallow empty group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html
   */
  'regexp/no-empty-group'?: Linter.RuleEntry<[]>
  /**
   * disallow empty lookahead assertion or empty lookbehind assertion
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html
   */
  'regexp/no-empty-lookarounds-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow empty string literals in character classes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-string-literal.html
   */
  'regexp/no-empty-string-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow escape backspace (`[\b]`)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html
   */
  'regexp/no-escape-backspace'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary nested lookaround assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html
   */
  'regexp/no-extra-lookaround-assertions'?: Linter.RuleEntry<[]>
  /**
   * disallow invalid regular expression strings in `RegExp` constructors
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html
   */
  'regexp/no-invalid-regexp'?: Linter.RuleEntry<[]>
  /**
   * disallow invisible raw character
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html
   */
  'regexp/no-invisible-character'?: Linter.RuleEntry<[]>
  /**
   * disallow lazy quantifiers at the end of an expression
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html
   */
  'regexp/no-lazy-ends'?: Linter.RuleEntry<RegexpNoLazyEnds>
  /**
   * disallow legacy RegExp features
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html
   */
  'regexp/no-legacy-features'?: Linter.RuleEntry<RegexpNoLegacyFeatures>
  /**
   * disallow capturing groups that do not behave as one would expect
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html
   */
  'regexp/no-misleading-capturing-group'?: Linter.RuleEntry<RegexpNoMisleadingCapturingGroup>
  /**
   * disallow multi-code-point characters in character classes and quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html
   */
  'regexp/no-misleading-unicode-character'?: Linter.RuleEntry<RegexpNoMisleadingUnicodeCharacter>
  /**
   * disallow missing `g` flag in patterns used in `String#matchAll` and `String#replaceAll`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html
   */
  'regexp/no-missing-g-flag'?: Linter.RuleEntry<RegexpNoMissingGFlag>
  /**
   * disallow non-standard flags
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html
   */
  'regexp/no-non-standard-flag'?: Linter.RuleEntry<[]>
  /**
   * disallow obscure character ranges
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html
   */
  'regexp/no-obscure-range'?: Linter.RuleEntry<RegexpNoObscureRange>
  /**
   * disallow octal escape sequence
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-octal.html
   */
  'regexp/no-octal'?: Linter.RuleEntry<[]>
  /**
   * disallow optional assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html
   */
  'regexp/no-optional-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow backreferences that reference a group that might not be matched
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html
   */
  'regexp/no-potentially-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * disallow standalone backslashes (`\`)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-standalone-backslash.html
   */
  'regexp/no-standalone-backslash'?: Linter.RuleEntry<[]>
  /**
   * disallow exponential and polynomial backtracking
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html
   */
  'regexp/no-super-linear-backtracking'?: Linter.RuleEntry<RegexpNoSuperLinearBacktracking>
  /**
   * disallow quantifiers that cause quadratic moves
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html
   */
  'regexp/no-super-linear-move'?: Linter.RuleEntry<RegexpNoSuperLinearMove>
  /**
   * disallow trivially nested assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html
   */
  'regexp/no-trivially-nested-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow nested quantifiers that can be rewritten as one quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html
   */
  'regexp/no-trivially-nested-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow unused capturing group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html
   */
  'regexp/no-unused-capturing-group'?: Linter.RuleEntry<RegexpNoUnusedCapturingGroup>
  /**
   * disallow assertions that are known to always accept (or reject)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html
   */
  'regexp/no-useless-assertions'?: Linter.RuleEntry<[]>
  /**
   * disallow useless backreferences in regular expressions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html
   */
  'regexp/no-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * disallow character class with one character
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html
   */
  'regexp/no-useless-character-class'?: Linter.RuleEntry<RegexpNoUselessCharacterClass>
  /**
   * disallow useless `$` replacements in replacement string
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html
   */
  'regexp/no-useless-dollar-replacements'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary escape characters in RegExp
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html
   */
  'regexp/no-useless-escape'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary regex flags
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html
   */
  'regexp/no-useless-flag'?: Linter.RuleEntry<RegexpNoUselessFlag>
  /**
   * disallow unnecessarily non-greedy quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html
   */
  'regexp/no-useless-lazy'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary non-capturing group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html
   */
  'regexp/no-useless-non-capturing-group'?: Linter.RuleEntry<RegexpNoUselessNonCapturingGroup>
  /**
   * disallow quantifiers that can be removed
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html
   */
  'regexp/no-useless-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary character ranges
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html
   */
  'regexp/no-useless-range'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary elements in expression character classes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-set-operand.html
   */
  'regexp/no-useless-set-operand'?: Linter.RuleEntry<[]>
  /**
   * disallow string disjunction of single characters in `\q{...}`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-string-literal.html
   */
  'regexp/no-useless-string-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary `{n,m}` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html
   */
  'regexp/no-useless-two-nums-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow quantifiers with a maximum of zero
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html
   */
  'regexp/no-zero-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow the alternatives of lookarounds that end with a non-constant quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html
   */
  'regexp/optimal-lookaround-quantifier'?: Linter.RuleEntry<[]>
  /**
   * require optimal quantifiers for concatenated quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html
   */
  'regexp/optimal-quantifier-concatenation'?: Linter.RuleEntry<RegexpOptimalQuantifierConcatenation>
  /**
   * enforce using character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html
   */
  'regexp/prefer-character-class'?: Linter.RuleEntry<RegexpPreferCharacterClass>
  /**
   * enforce using `\d`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html
   */
  'regexp/prefer-d'?: Linter.RuleEntry<RegexpPreferD>
  /**
   * enforces escape of replacement `$` character (`$$`).
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-escape-replacement-dollar-char.html
   */
  'regexp/prefer-escape-replacement-dollar-char'?: Linter.RuleEntry<[]>
  /**
   * prefer lookarounds over capturing group that do not replace
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-lookaround.html
   */
  'regexp/prefer-lookaround'?: Linter.RuleEntry<RegexpPreferLookaround>
  /**
   * enforce using named backreferences
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-backreference.html
   */
  'regexp/prefer-named-backreference'?: Linter.RuleEntry<[]>
  /**
   * enforce using named capture groups
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-capture-group.html
   */
  'regexp/prefer-named-capture-group'?: Linter.RuleEntry<[]>
  /**
   * enforce using named replacement
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-replacement.html
   */
  'regexp/prefer-named-replacement'?: Linter.RuleEntry<RegexpPreferNamedReplacement>
  /**
   * enforce using `+` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html
   */
  'regexp/prefer-plus-quantifier'?: Linter.RuleEntry<[]>
  /**
   * prefer predefined assertion over equivalent lookarounds
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html
   */
  'regexp/prefer-predefined-assertion'?: Linter.RuleEntry<[]>
  /**
   * enforce using quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-quantifier.html
   */
  'regexp/prefer-quantifier'?: Linter.RuleEntry<RegexpPreferQuantifier>
  /**
   * enforce using `?` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html
   */
  'regexp/prefer-question-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce using character class range
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html
   */
  'regexp/prefer-range'?: Linter.RuleEntry<RegexpPreferRange>
  /**
   * enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-exec.html
   */
  'regexp/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * enforce that `RegExp#test` is used instead of `String#match` and `RegExp#exec`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-test.html
   */
  'regexp/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * enforce using result array `groups`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-result-array-groups.html
   */
  'regexp/prefer-result-array-groups'?: Linter.RuleEntry<RegexpPreferResultArrayGroups>
  /**
   * prefer character class set operations instead of lookarounds
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-set-operation.html
   */
  'regexp/prefer-set-operation'?: Linter.RuleEntry<[]>
  /**
   * enforce using `*` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html
   */
  'regexp/prefer-star-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce use of unicode codepoint escapes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html
   */
  'regexp/prefer-unicode-codepoint-escapes'?: Linter.RuleEntry<[]>
  /**
   * enforce using `\w`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html
   */
  'regexp/prefer-w'?: Linter.RuleEntry<[]>
  /**
   * enforce the use of the `u` flag
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-regexp.html
   */
  'regexp/require-unicode-regexp'?: Linter.RuleEntry<[]>
  /**
   * enforce the use of the `v` flag
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-sets-regexp.html
   */
  'regexp/require-unicode-sets-regexp'?: Linter.RuleEntry<[]>
  /**
   * require simplify set operations
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/simplify-set-operations.html
   */
  'regexp/simplify-set-operations'?: Linter.RuleEntry<[]>
  /**
   * sort alternatives if order doesn't matter
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-alternatives.html
   */
  'regexp/sort-alternatives'?: Linter.RuleEntry<[]>
  /**
   * enforces elements order in character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-character-class-elements.html
   */
  'regexp/sort-character-class-elements'?: Linter.RuleEntry<RegexpSortCharacterClassElements>
  /**
   * require regex flags to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html
   */
  'regexp/sort-flags'?: Linter.RuleEntry<[]>
  /**
   * disallow not strictly valid regular expressions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html
   */
  'regexp/strict'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent usage of unicode escape or unicode codepoint escape
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-escape.html
   */
  'regexp/unicode-escape'?: Linter.RuleEntry<RegexpUnicodeEscape>
  /**
   * enforce consistent naming of unicode properties
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-property.html
   */
  'regexp/unicode-property'?: Linter.RuleEntry<RegexpUnicodeProperty>
  /**
   * use the `i` flag if it simplifies the pattern
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html
   */
  'regexp/use-ignore-case'?: Linter.RuleEntry<[]>
  /**
   * Interactions should be awaited
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/await-interactions.md
   */
  'storybook/await-interactions'?: Linter.RuleEntry<[]>
  /**
   * Pass a context when invoking play function of another story
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/context-in-play-function.md
   */
  'storybook/context-in-play-function'?: Linter.RuleEntry<[]>
  /**
   * The component property should be set
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/csf-component.md
   */
  'storybook/csf-component'?: Linter.RuleEntry<[]>
  /**
   * Story files should have a default export
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/default-exports.md
   */
  'storybook/default-exports'?: Linter.RuleEntry<[]>
  /**
   * Deprecated hierarchy separator in title property
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/hierarchy-separator.md
   */
  'storybook/hierarchy-separator'?: Linter.RuleEntry<[]>
  /**
   * Meta should only have inline properties
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/meta-inline-properties.md
   */
  'storybook/meta-inline-properties'?: Linter.RuleEntry<StorybookMetaInlineProperties>
  /**
   * Meta should use `satisfies Meta`
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/meta-satisfies-type.md
   */
  'storybook/meta-satisfies-type'?: Linter.RuleEntry<[]>
  /**
   * A story should not have a redundant name property
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-redundant-story-name.md
   */
  'storybook/no-redundant-story-name'?: Linter.RuleEntry<[]>
  /**
   * Do not import renderer packages directly in stories
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-renderer-packages.md
   */
  'storybook/no-renderer-packages'?: Linter.RuleEntry<[]>
  /**
   * storiesOf is deprecated and should not be used
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-stories-of.md
   */
  'storybook/no-stories-of'?: Linter.RuleEntry<[]>
  /**
   * Do not define a title in meta
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-title-property-in-meta.md
   */
  'storybook/no-title-property-in-meta'?: Linter.RuleEntry<[]>
  /**
   * This rule identifies storybook addons that are invalid because they are either not installed or contain a typo in their name.
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-uninstalled-addons.md
   */
  'storybook/no-uninstalled-addons'?: Linter.RuleEntry<StorybookNoUninstalledAddons>
  /**
   * Stories should use PascalCase
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/prefer-pascal-case.md
   */
  'storybook/prefer-pascal-case'?: Linter.RuleEntry<[]>
  /**
   * A story file must contain at least one story export
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/story-exports.md
   */
  'storybook/story-exports'?: Linter.RuleEntry<[]>
  /**
   * Use expect from `@storybook/test`, `storybook/test` or `@storybook/jest`
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/use-storybook-expect.md
   */
  'storybook/use-storybook-expect'?: Linter.RuleEntry<[]>
  /**
   * Do not use testing-library directly on stories
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/use-storybook-testing-library.md
   */
  'storybook/use-storybook-testing-library'?: Linter.RuleEntry<[]>
  /**
   * Prefer better DOM traversal APIs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/better-dom-traversing.md
   */
  'unicorn/better-dom-traversing'?: Linter.RuleEntry<[]>
  /**
   * Removed. Prefer `eslint-plugin-regexp`
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#better-regex
   * @deprecated
   */
  'unicorn/better-regex'?: Linter.RuleEntry<[]>
  /**
   * Enforce a specific parameter name in catch clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/catch-error-name.md
   */
  'unicorn/catch-error-name'?: Linter.RuleEntry<UnicornCatchErrorName>
  /**
   * Enforce consistent class references in static methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/class-reference-in-static-methods.md
   */
  'unicorn/class-reference-in-static-methods'?: Linter.RuleEntry<UnicornClassReferenceInStaticMethods>
  /**
   * Enforce consistent spacing before and after commas in JSON.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/comma-spacing.md
   */
  'unicorn/comma-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce better comment content.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/comment-content.md
   */
  'unicorn/comment-content'?: Linter.RuleEntry<UnicornCommentContent>
  /**
   * Enforce a consistent return style for multiline arrow function bodies.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-arrow-return-style.md
   */
  'unicorn/consistent-arrow-return-style'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent assertion style with `node:assert`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-assert.md
   */
  'unicorn/consistent-assert'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent naming for boolean names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-boolean-name.md
   */
  'unicorn/consistent-boolean-name'?: Linter.RuleEntry<UnicornConsistentBooleanName>
  /**
   * Enforce consistent class member order.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-class-member-order.md
   */
  'unicorn/consistent-class-member-order'?: Linter.RuleEntry<UnicornConsistentClassMemberOrder>
  /**
   * Enforce consistent spelling of compound words in identifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-compound-words.md
   */
  'unicorn/consistent-compound-words'?: Linter.RuleEntry<UnicornConsistentCompoundWords>
  /**
   * Enforce consistent conditional object spread style.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-conditional-object-spread.md
   */
  'unicorn/consistent-conditional-object-spread'?: Linter.RuleEntry<UnicornConsistentConditionalObjectSpread>
  /**
   * Prefer passing `Date` directly to the constructor when cloning.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-date-clone.md
   */
  'unicorn/consistent-date-clone'?: Linter.RuleEntry<[]>
  /**
   * Use destructured variables over properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-destructuring.md
   */
  'unicorn/consistent-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-empty-array-spread.md
   */
  'unicorn/consistent-empty-array-spread'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-existence-index-check.md
   */
  'unicorn/consistent-existence-index-check'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent decorator position on exported classes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-export-decorator-position.md
   */
  'unicorn/consistent-export-decorator-position'?: Linter.RuleEntry<UnicornConsistentExportDecoratorPosition>
  /**
   * Move function definitions to the highest possible scope.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-function-scoping.md
   */
  'unicorn/consistent-function-scoping'?: Linter.RuleEntry<UnicornConsistentFunctionScoping>
  /**
   * Enforce function syntax by role.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-function-style.md
   */
  'unicorn/consistent-function-style'?: Linter.RuleEntry<UnicornConsistentFunctionStyle>
  /**
   * Enforce consistent JSON file reads before `JSON.parse()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-json-file-read.md
   */
  'unicorn/consistent-json-file-read'?: Linter.RuleEntry<UnicornConsistentJsonFileRead>
  /**
   * Enforce consistent optional chaining for same-base member access.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-optional-chaining.md
   */
  'unicorn/consistent-optional-chaining'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for escaping `${` in template literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-template-literal-escape.md
   */
  'unicorn/consistent-template-literal-escape'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent labels on tuple type elements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/consistent-tuple-labels.md
   */
  'unicorn/consistent-tuple-labels'?: Linter.RuleEntry<[]>
  /**
   * Enforce correct `Error` subclassing.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/custom-error-definition.md
   */
  'unicorn/custom-error-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent default export declarations.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/default-export-style.md
   */
  'unicorn/default-export-style'?: Linter.RuleEntry<UnicornDefaultExportStyle>
  /**
   * Enforce consistent style for DOM element dataset access.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/dom-node-dataset.md
   */
  'unicorn/dom-node-dataset'?: Linter.RuleEntry<UnicornDomNodeDataset>
  /**
   * Enforce no spaces between braces.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/empty-brace-spaces.md
   */
  'unicorn/empty-brace-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/error-message.md
   */
  'unicorn/error-message'?: Linter.RuleEntry<[]>
  /**
   * Require escape sequences to use uppercase or lowercase values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/escape-case.md
   */
  'unicorn/escape-case'?: Linter.RuleEntry<UnicornEscapeCase>
  /**
   * Add expiration conditions to TODO comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/expiring-todo-comments.md
   */
  'unicorn/expiring-todo-comments'?: Linter.RuleEntry<UnicornExpiringTodoComments>
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/explicit-length-check.md
   */
  'unicorn/explicit-length-check'?: Linter.RuleEntry<UnicornExplicitLengthCheck>
  /**
   * Enforce or disallow explicit `delay` argument for `setTimeout()` and `setInterval()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/explicit-timer-delay.md
   */
  'unicorn/explicit-timer-delay'?: Linter.RuleEntry<UnicornExplicitTimerDelay>
  /**
   * Enforce a case style for filenames and directory names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/filename-case.md
   */
  'unicorn/filename-case'?: Linter.RuleEntry<UnicornFilenameCase>
  /**
   * Require identifiers to match a specified regular expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/id-match.md
   */
  'unicorn/id-match'?: Linter.RuleEntry<UnicornIdMatch>
  /**
   * Enforce specific import styles per module.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/import-style.md
   */
  'unicorn/import-style'?: Linter.RuleEntry<UnicornImportStyle>
  /**
   * Enforce consistent indentation in JSON and CSS.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/indent.md
   */
  'unicorn/indent'?: Linter.RuleEntry<UnicornIndent>
  /**
   * Prevent usage of variables from outside the scope of isolated functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/isolated-functions.md
   */
  'unicorn/isolated-functions'?: Linter.RuleEntry<UnicornIsolatedFunctions>
  /**
   * Enforce a consistent style for optional loop sources.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/iteration-fallback-style.md
   */
  'unicorn/iteration-fallback-style'?: Linter.RuleEntry<UnicornIterationFallbackStyle>
  /**
   * Enforce a case style for data keys.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/key-name-casing.md
   */
  'unicorn/key-name-casing'?: Linter.RuleEntry<UnicornKeyNameCasing>
  /**
   * Require or disallow logical assignment operator shorthand
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/logical-assignment-operators.md
   */
  'unicorn/logical-assignment-operators'?: Linter.RuleEntry<UnicornLogicalAssignmentOperators>
  /**
   * Limit the depth of nested calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/max-nested-calls.md
   */
  'unicorn/max-nested-calls'?: Linter.RuleEntry<UnicornMaxNestedCalls>
  /**
   * Enforce replacements for variable, property, and filenames.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/name-replacements.md
   */
  'unicorn/name-replacements'?: Linter.RuleEntry<UnicornNameReplacements>
  /**
   * Enforce correct use of `new` for builtin constructors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/new-for-builtins.md
   */
  'unicorn/new-for-builtins'?: Linter.RuleEntry<[]>
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-abusive-eslint-disable.md
   */
  'unicorn/no-abusive-eslint-disable'?: Linter.RuleEntry<[]>
  /**
   * Disallow recursive access to `this` within getters and setters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-accessor-recursion.md
   */
  'unicorn/no-accessor-recursion'?: Linter.RuleEntry<[]>
  /**
   * Disallow bitwise operators where a logical operator was likely intended.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-accidental-bitwise-operator.md
   */
  'unicorn/no-accidental-bitwise-operator'?: Linter.RuleEntry<[]>
  /**
   * Disallow anonymous functions and classes as the default export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-anonymous-default-export.md
   */
  'unicorn/no-anonymous-default-export'?: Linter.RuleEntry<[]>
  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-callback-reference.md
   */
  'unicorn/no-array-callback-reference'?: Linter.RuleEntry<UnicornNoArrayCallbackReference>
  /**
   * Disallow array accumulation with `Array#concat()` in loops.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-concat-in-loop.md
   */
  'unicorn/no-array-concat-in-loop'?: Linter.RuleEntry<[]>
  /**
   * Disallow using reference values as `Array#fill()` values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-fill-with-reference-type.md
   */
  'unicorn/no-array-fill-with-reference-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow `.fill()` after `Array.from({length: …})`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-from-fill.md
   */
  'unicorn/no-array-from-fill'?: Linter.RuleEntry<[]>
  /**
   * Disallow front-of-array mutation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-front-mutation.md
   */
  'unicorn/no-array-front-mutation'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `this` argument in array methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-method-this-argument.md
   */
  'unicorn/no-array-method-this-argument'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/prefer-single-call` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-array-push-push
   * @deprecated
   */
  'unicorn/no-array-push-push'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-reduce.md
   */
  'unicorn/no-array-reduce'?: Linter.RuleEntry<UnicornNoArrayReduce>
  /**
   * Prefer `Array#toReversed()` over `Array#reverse()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-reverse.md
   */
  'unicorn/no-array-reverse'?: Linter.RuleEntry<UnicornNoArrayReverse>
  /**
   * Prefer `Array#toSorted()` over `Array#sort()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-sort.md
   */
  'unicorn/no-array-sort'?: Linter.RuleEntry<UnicornNoArraySort>
  /**
   * Disallow sorting arrays to get the minimum or maximum value.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-sort-for-min-max.md
   */
  'unicorn/no-array-sort-for-min-max'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#toSpliced()` over `Array#splice()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-array-splice.md
   */
  'unicorn/no-array-splice'?: Linter.RuleEntry<[]>
  /**
   * Disallow asterisk prefixes in multiline comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-asterisk-prefix-in-documentation-comments.md
   */
  'unicorn/no-asterisk-prefix-in-documentation-comments'?: Linter.RuleEntry<[]>
  /**
   * Disallow asynchronous callbacks in synchronous iterator helpers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-async-iterator-callback.md
   */
  'unicorn/no-async-iterator-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallow async functions as `Promise#finally()` callbacks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-async-promise-finally.md
   */
  'unicorn/no-async-promise-finally'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access from await expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-await-expression-member.md
   */
  'unicorn/no-await-expression-member'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-await-in-promise-methods.md
   */
  'unicorn/no-await-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow barrel files.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-barrel-files.md
   */
  'unicorn/no-barrel-files'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `Blob` to `File` conversion.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-blob-to-file.md
   */
  'unicorn/no-blob-to-file'?: Linter.RuleEntry<[]>
  /**
   * Disallow boolean-returning sort comparators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-boolean-sort-comparator.md
   */
  'unicorn/no-boolean-sort-comparator'?: Linter.RuleEntry<[]>
  /**
   * Disallow `break` and optionally `continue` in nested loops and switches inside loops.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-break-in-nested-loop.md
   */
  'unicorn/no-break-in-nested-loop'?: Linter.RuleEntry<UnicornNoBreakInNestedLoop>
  /**
   * Prefer drawing canvases directly instead of converting them to images.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-canvas-to-image.md
   */
  'unicorn/no-canvas-to-image'?: Linter.RuleEntry<[]>
  /**
   * Disallow chained comparisons such as `a < b < c`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-chained-comparison.md
   */
  'unicorn/no-chained-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow accessing `Map`, `Set`, `WeakMap`, and `WeakSet` entries with bracket notation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-collection-bracket-access.md
   */
  'unicorn/no-collection-bracket-access'?: Linter.RuleEntry<[]>
  /**
   * Disallow dynamic object property existence checks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-computed-property-existence-check.md
   */
  'unicorn/no-computed-property-existence-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow conflicting CSS query and HTML form constraints.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-conflicting-constraints.md
   */
  'unicorn/no-conflicting-constraints'?: Linter.RuleEntry<[]>
  /**
   * Disallow confusing uses of `Array#{splice,toSpliced}()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-confusing-array-splice.md
   */
  'unicorn/no-confusing-array-splice'?: Linter.RuleEntry<[]>
  /**
   * Disallow confusing uses of `Array#with()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-confusing-array-with.md
   */
  'unicorn/no-confusing-array-with'?: Linter.RuleEntry<[]>
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-console-spaces.md
   */
  'unicorn/no-console-spaces'?: Linter.RuleEntry<[]>
  /**
   * Disallow arithmetic and bitwise operations that always evaluate to `0`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-constant-zero-expression.md
   */
  'unicorn/no-constant-zero-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow declarations before conditional early exits when they are only used after the exit.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-declarations-before-early-exit.md
   */
  'unicorn/no-declarations-before-early-exit'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/no-deprecated-features`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-deprecated-css-features
   * @deprecated
   */
  'unicorn/no-deprecated-css-features'?: Linter.RuleEntry<[]>
  /**
   * Do not use `document.cookie` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-document-cookie.md
   */
  'unicorn/no-document-cookie'?: Linter.RuleEntry<[]>
  /**
   * Disallow two comparisons of the same operands that can be combined into one.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-double-comparison.md
   */
  'unicorn/no-double-comparison'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/no-duplicate-selectors`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-duplicate-css-selectors
   * @deprecated
   */
  'unicorn/no-duplicate-css-selectors'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/no-duplicate-font-family-names`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-duplicate-font-family-names
   * @deprecated
   */
  'unicorn/no-duplicate-font-family-names'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate adjacent branches in if chains.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-duplicate-if-branches.md
   */
  'unicorn/no-duplicate-if-branches'?: Linter.RuleEntry<[]>
  /**
   * Disallow adjacent duplicate operands in logical expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-duplicate-logical-operands.md
   */
  'unicorn/no-duplicate-logical-operands'?: Linter.RuleEntry<[]>
  /**
   * Disallow `.map()` and `.filter()` in `for…of` and `for await…of` loop headers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-duplicate-loops.md
   */
  'unicorn/no-duplicate-loops'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate values in `Set` constructor array literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-duplicate-set-values.md
   */
  'unicorn/no-duplicate-set-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty files.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-empty-file.md
   */
  'unicorn/no-empty-file'?: Linter.RuleEntry<UnicornNoEmptyFile>
  /**
   * Disallow empty link text in Markdown.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-empty-link-text.md
   */
  'unicorn/no-empty-link-text'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning to built-in error properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-error-property-assignment.md
   */
  'unicorn/no-error-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow exports in scripts.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-exports-in-scripts.md
   */
  'unicorn/no-exports-in-scripts'?: Linter.RuleEntry<[]>
  /**
   * Prefer `for…of` over the `forEach` method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-for-each.md
   */
  'unicorn/no-for-each'?: Linter.RuleEntry<[]>
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-for-loop.md
   */
  'unicorn/no-for-loop'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning properties on the global object.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-global-object-property-assignment.md
   */
  'unicorn/no-global-object-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/prefer-literal-ascii` and `unicorn/prefer-unicode-code-point-escapes`, which cover more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-hex-escape
   * @deprecated
   */
  'unicorn/no-hex-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow immediate mutation after variable assignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-immediate-mutation.md
   */
  'unicorn/no-immediate-mutation'?: Linter.RuleEntry<UnicornNoImmediateMutation>
  /**
   * Disallow impossible comparisons against `.length` or `.size`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-impossible-length-comparison.md
   */
  'unicorn/no-impossible-length-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow class accessors that hide an inherited getter or setter.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-incomplete-accessor-override.md
   */
  'unicorn/no-incomplete-accessor-override'?: Linter.RuleEntry<[]>
  /**
   * Disallow incorrect `querySelector()` and `querySelectorAll()` usage.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-incorrect-query-selector.md
   */
  'unicorn/no-incorrect-query-selector'?: Linter.RuleEntry<[]>
  /**
   * Disallow incorrect template literal interpolation syntax.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-incorrect-template-string-interpolation.md
   */
  'unicorn/no-incorrect-template-string-interpolation'?: Linter.RuleEntry<[]>
  /**
   * Disallow ineffective CSP directives in `<meta>` elements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-ineffective-csp-directives.md
   */
  'unicorn/no-ineffective-csp-directives'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/no-instanceof-builtins` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-instanceof-array
   * @deprecated
   */
  'unicorn/no-instanceof-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow `instanceof` with built-in objects
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-instanceof-builtins.md
   */
  'unicorn/no-instanceof-builtins'?: Linter.RuleEntry<UnicornNoInstanceofBuiltins>
  /**
   * Disallow calling functions and constructors with an invalid number of arguments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-argument-count.md
   */
  'unicorn/no-invalid-argument-count'?: Linter.RuleEntry<UnicornNoInvalidArgumentCount>
  /**
   * Disallow invalid values for HTML boolean attributes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-boolean-attribute-value.md
   */
  'unicorn/no-invalid-boolean-attribute-value'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing a single character from a string to a multi-character string.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-character-comparison.md
   */
  'unicorn/no-invalid-character-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid DOM tokens.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-dom-token.md
   */
  'unicorn/no-invalid-dom-token'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-fetch-options.md
   */
  'unicorn/no-invalid-fetch-options'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid `accept` values on file inputs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-file-input-accept.md
   */
  'unicorn/no-invalid-file-input-accept'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid subresource integrity metadata.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-integrity.md
   */
  'unicorn/no-invalid-integrity'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid or ignored Intl options.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-intl-options.md
   */
  'unicorn/no-invalid-intl-options'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/no-invalid-media-features`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-invalid-media-features
   * @deprecated
   */
  'unicorn/no-invalid-media-features'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid property descriptors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-property-descriptor.md
   */
  'unicorn/no-invalid-property-descriptor'?: Linter.RuleEntry<[]>
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-remove-event-listener.md
   */
  'unicorn/no-invalid-remove-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid options in `new Response()`, `Response.json()`, and `Response.redirect()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-response-options.md
   */
  'unicorn/no-invalid-response-options'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid arguments to `CSSStyleDeclaration#setProperty()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-style-set-property.md
   */
  'unicorn/no-invalid-style-set-property'?: Linter.RuleEntry<[]>
  /**
   * Disallow statically known invalid Temporal arithmetic.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-temporal-arithmetic.md
   */
  'unicorn/no-invalid-temporal-arithmetic'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid protocol strings in comparisons with `URL#protocol`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-url-protocol-comparison.md
   */
  'unicorn/no-invalid-url-protocol-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid implementations of well-known symbol methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-invalid-well-known-symbol-methods.md
   */
  'unicorn/no-invalid-well-known-symbol-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow `javascript:` URLs in Markdown.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-javascript-url.md
   */
  'unicorn/no-javascript-url'?: Linter.RuleEntry<[]>
  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-keyword-prefix.md
   */
  'unicorn/no-keyword-prefix'?: Linter.RuleEntry<UnicornNoKeywordPrefix>
  /**
   * Disallow accessing `event.currentTarget` after the synchronous event dispatch has finished.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-late-current-target-access.md
   */
  'unicorn/no-late-current-target-access'?: Linter.RuleEntry<[]>
  /**
   * Disallow event-control method calls after the synchronous event dispatch has finished.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-late-event-control.md
   */
  'unicorn/no-late-event-control'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty lines at the beginning of a file.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-leading-empty-lines.md
   */
  'unicorn/no-leading-empty-lines'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/no-unnecessary-slice-end` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-length-as-slice-end
   * @deprecated
   */
  'unicorn/no-length-as-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-lonely-if.md
   */
  'unicorn/no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow mutating a loop iterable during iteration.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-loop-iterable-mutation.md
   */
  'unicorn/no-loop-iterable-mutation'?: Linter.RuleEntry<[]>
  /**
   * Disallow numeric literals that lose precision when represented as IEEE 754 binary64 values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-loss-of-precision.md
   */
  'unicorn/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-magic-array-flat-depth.md
   */
  'unicorn/no-magic-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow manually wrapped comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-manually-wrapped-comments.md
   */
  'unicorn/no-manually-wrapped-comments'?: Linter.RuleEntry<[]>
  /**
   * Disallow checking a Map key before accessing a different key.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-mismatched-map-key.md
   */
  'unicorn/no-mismatched-map-key'?: Linter.RuleEntry<[]>
  /**
   * Disallow misrefactored compound assignments where the target is duplicated in the right-hand side.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-misrefactored-assignment.md
   */
  'unicorn/no-misrefactored-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow references to missing local resources.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-missing-local-resource.md
   */
  'unicorn/no-missing-local-resource'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling Promise executor resolver functions more than once on the same execution path.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-multiple-promise-resolver-calls.md
   */
  'unicorn/no-multiple-promise-resolver-calls'?: Linter.RuleEntry<[]>
  /**
   * Disallow named usage of default import and export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-named-default.md
   */
  'unicorn/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated array predicate calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-negated-array-predicate.md
   */
  'unicorn/no-negated-array-predicate'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-negated-comparison.md
   */
  'unicorn/no-negated-comparison'?: Linter.RuleEntry<UnicornNoNegatedComparison>
  /**
   * Disallow negated conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-negated-condition.md
   */
  'unicorn/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated expression in equality check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-negation-in-equality-check.md
   */
  'unicorn/no-negation-in-equality-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-nested-ternary.md
   */
  'unicorn/no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/no-nesting-with-mixed-specificity`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-nesting-with-mixed-specificity
   * @deprecated
   */
  'unicorn/no-nesting-with-mixed-specificity'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new Array()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-new-array.md
   */
  'unicorn/no-new-array'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-new-buffer.md
   */
  'unicorn/no-new-buffer'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-function values with function-style verb prefixes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-non-function-verb-prefix.md
   */
  'unicorn/no-non-function-verb-prefix'?: Linter.RuleEntry<UnicornNoNonFunctionVerbPrefix>
  /**
   * Disallow non-standard properties on built-in objects.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-nonstandard-builtin-properties.md
   */
  'unicorn/no-nonstandard-builtin-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of the `null` literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-null.md
   */
  'unicorn/no-null'?: Linter.RuleEntry<UnicornNoNull>
  /**
   * Disallow the use of objects as default parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-object-as-default-parameter.md
   */
  'unicorn/no-object-as-default-parameter'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Object` methods with `Map` or `Set`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-object-methods-with-collections.md
   */
  'unicorn/no-object-methods-with-collections'?: Linter.RuleEntry<[]>
  /**
   * Disallow optional chaining on undeclared variables.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-optional-chaining-on-undeclared-variable.md
   */
  'unicorn/no-optional-chaining-on-undeclared-variable'?: Linter.RuleEntry<[]>
  /**
   * Disallow ineffective `preventDefault()` calls in passive event listeners.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-prevent-default-in-passive-listener.md
   */
  'unicorn/no-prevent-default-in-passive-listener'?: Linter.RuleEntry<[]>
  /**
   * Disallow `process.exit()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-process-exit.md
   */
  'unicorn/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparisons made redundant by an equality check in the same logical AND.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-redundant-comparison.md
   */
  'unicorn/no-redundant-comparison'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/no-redundant-nested-style-rules`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-redundant-nested-style-rules
   * @deprecated
   */
  'unicorn/no-redundant-nested-style-rules'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the return value of `Array#push()` and `Array#unshift()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-return-array-push.md
   */
  'unicorn/no-return-array-push'?: Linter.RuleEntry<[]>
  /**
   * Disallow selector syntax in DOM names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-selector-as-dom-name.md
   */
  'unicorn/no-selector-as-dom-name'?: Linter.RuleEntry<[]>
  /**
   * Disallow shorthand properties that override related longhand properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-shorthand-property-overrides.md
   */
  'unicorn/no-shorthand-property-overrides'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-single-promise-in-promise-methods.md
   */
  'unicorn/no-single-promise-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes that only have static members.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-static-only-class.md
   */
  'unicorn/no-static-only-class'?: Linter.RuleEntry<[]>
  /**
   * Prefer comparing values directly over subtracting and comparing to `0`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-subtraction-comparison.md
   */
  'unicorn/no-subtraction-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow `then` property.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-thenable.md
   */
  'unicorn/no-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning `this` to a variable.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-this-assignment.md
   */
  'unicorn/no-this-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow `this` outside of classes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-this-outside-of-class.md
   */
  'unicorn/no-this-outside-of-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning to top-level variables from inside functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-top-level-assignment-in-function.md
   */
  'unicorn/no-top-level-assignment-in-function'?: Linter.RuleEntry<[]>
  /**
   * Disallow top-level side effects in exported modules.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-top-level-side-effects.md
   */
  'unicorn/no-top-level-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow `all` as a transition property.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-transition-all.md
   */
  'unicorn/no-transition-all'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-typeof-undefined.md
   */
  'unicorn/no-typeof-undefined'?: Linter.RuleEntry<UnicornNoTypeofUndefined>
  /**
   * Disallow referencing methods without calling them.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-uncalled-method.md
   */
  'unicorn/no-uncalled-method'?: Linter.RuleEntry<[]>
  /**
   * Require class members to be declared.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-undeclared-class-members.md
   */
  'unicorn/no-undeclared-class-members'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/no-unknown-annotations`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-unknown-css-annotations
   * @deprecated
   */
  'unicorn/no-unknown-css-annotations'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/no-unknown-pseudo-selectors`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-unknown-pseudo-selectors
   * @deprecated
   */
  'unicorn/no-unknown-pseudo-selectors'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `1` as the `depth` argument of `Array#flat()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-array-flat-depth.md
   */
  'unicorn/no-unnecessary-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary use of `Array#flatMap()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-array-flat-map.md
   */
  'unicorn/no-unnecessary-array-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#{splice,toSpliced}()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-array-splice-count.md
   */
  'unicorn/no-unnecessary-array-splice-count'?: Linter.RuleEntry<[]>
  /**
   * Disallow awaiting non-promise values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-await.md
   */
  'unicorn/no-unnecessary-await'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary comparisons against boolean literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-boolean-comparison.md
   */
  'unicorn/no-unnecessary-boolean-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary options in `fetch()` and `new Request()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-fetch-options.md
   */
  'unicorn/no-unnecessary-fetch-options'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `globalThis` references.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-global-this.md
   */
  'unicorn/no-unnecessary-global-this'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary nested ternary expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-nested-ternary.md
   */
  'unicorn/no-unnecessary-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow parameters that receive the same value at every call.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-parameters.md
   */
  'unicorn/no-unnecessary-parameters'?: Linter.RuleEntry<UnicornNoUnnecessaryParameters>
  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-polyfills.md
   */
  'unicorn/no-unnecessary-polyfills'?: Linter.RuleEntry<UnicornNoUnnecessaryPolyfills>
  /**
   * Disallow using `.length` or `Infinity` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-slice-end.md
   */
  'unicorn/no-unnecessary-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array#splice()` when simpler alternatives exist.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-splice.md
   */
  'unicorn/no-unnecessary-splice'?: Linter.RuleEntry<[]>
  /**
   * Disallow `String#trim()` before `String#startsWith()` or `String#endsWith()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unnecessary-string-trim.md
   */
  'unicorn/no-unnecessary-string-trim'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable array destructuring.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unreadable-array-destructuring.md
   */
  'unicorn/no-unreadable-array-destructuring'?: Linter.RuleEntry<UnicornNoUnreadableArrayDestructuring>
  /**
   * Disallow unreadable iterable expressions in `for…of` and `for await…of` loop headers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unreadable-for-of-expression.md
   */
  'unicorn/no-unreadable-for-of-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable IIFEs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unreadable-iife.md
   */
  'unicorn/no-unreadable-iife'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable `new` expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unreadable-new-expression.md
   */
  'unicorn/no-unreadable-new-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable object destructuring.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unreadable-object-destructuring.md
   */
  'unicorn/no-unreadable-object-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prevent unsafe use of ArrayBuffer view `.buffer`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unsafe-buffer-conversion.md
   */
  'unicorn/no-unsafe-buffer-conversion'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe DOM HTML APIs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unsafe-dom-html.md
   */
  'unicorn/no-unsafe-dom-html'?: Linter.RuleEntry<[]>
  /**
   * Disallow known values that JSON serialization cannot represent faithfully.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unsafe-json-serialization.md
   */
  'unicorn/no-unsafe-json-serialization'?: Linter.RuleEntry<[]>
  /**
   * Disallow reading `.value` from `Promise.allSettled()` results without a fulfilled status guard.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unsafe-promise-all-settled-values.md
   */
  'unicorn/no-unsafe-promise-all-settled-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe values as property keys.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unsafe-property-key.md
   */
  'unicorn/no-unsafe-property-key'?: Linter.RuleEntry<[]>
  /**
   * Disallow interpolation into SQL strings passed to Node’s `node:sqlite` APIs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unsafe-sqlite-interpolation.md
   */
  'unicorn/no-unsafe-sqlite-interpolation'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-literal replacement values in `String#replace()` and `String#replaceAll()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unsafe-string-replacement.md
   */
  'unicorn/no-unsafe-string-replacement'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/no-unscoped-nesting-selector`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-unscoped-css-nesting-selector
   * @deprecated
   */
  'unicorn/no-unscoped-css-nesting-selector'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/no-unused-builtin-method-return` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#no-unused-array-method-return
   * @deprecated
   */
  'unicorn/no-unused-array-method-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow ignoring the return value of selected built-in methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unused-builtin-method-return.md
   */
  'unicorn/no-unused-builtin-method-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow discarding lazy iterator helpers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unused-iterator-helper.md
   */
  'unicorn/no-unused-iterator-helper'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused object properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-unused-properties.md
   */
  'unicorn/no-unused-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing full URLs to `URLSearchParams`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-url-in-search-params.md
   */
  'unicorn/no-url-in-search-params'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `Boolean()` casts in array predicate callbacks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-boolean-cast.md
   */
  'unicorn/no-useless-boolean-cast'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless type coercions of values that are already of the target type.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-coercion.md
   */
  'unicorn/no-useless-coercion'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless values or fallbacks in `Set`, `Map`, `WeakSet`, or `WeakMap`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-collection-argument.md
   */
  'unicorn/no-useless-collection-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless compound assignments such as `x += 0`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-compound-assignment.md
   */
  'unicorn/no-useless-compound-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless concatenation of literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-concat.md
   */
  'unicorn/no-useless-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `continue` statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-continue.md
   */
  'unicorn/no-useless-continue'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary existence checks before deletion.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-delete-check.md
   */
  'unicorn/no-useless-delete-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow `else` after a statement that exits.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-else.md
   */
  'unicorn/no-useless-else'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `Error.captureStackTrace(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-error-capture-stack-trace.md
   */
  'unicorn/no-useless-error-capture-stack-trace'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fallback when spreading in object literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-fallback-in-spread.md
   */
  'unicorn/no-useless-fallback-in-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `.toArray()` on iterators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-iterator-to-array.md
   */
  'unicorn/no-useless-iterator-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless array length check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-length-check.md
   */
  'unicorn/no-useless-length-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary operands in logical expressions involving boolean literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-logical-operand.md
   */
  'unicorn/no-useless-logical-operand'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless overrides of class methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-override.md
   */
  'unicorn/no-useless-override'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-promise-resolve-reject.md
   */
  'unicorn/no-useless-promise-resolve-reject'?: Linter.RuleEntry<[]>
  /**
   * Disallow redundant re-exports.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-re-export.md
   */
  'unicorn/no-useless-re-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow simple recursive function calls that can be replaced with a loop.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-recursion.md
   */
  'unicorn/no-useless-recursion'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `Set` construction around `Set` methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-set-construction.md
   */
  'unicorn/no-useless-set-construction'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary spread.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-spread.md
   */
  'unicorn/no-useless-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless case in switch statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-switch-case.md
   */
  'unicorn/no-useless-switch-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless template literal expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-template-literals.md
   */
  'unicorn/no-useless-template-literals'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `undefined`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-useless-undefined.md
   */
  'unicorn/no-useless-undefined'?: Linter.RuleEntry<UnicornNoUselessUndefined>
  /**
   * Disallow returning or exporting resources declared with `using`, including through capturing functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-using-resource-escape.md
   */
  'unicorn/no-using-resource-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow the bitwise XOR operator where exponentiation was likely intended.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-xor-as-exponentiation.md
   */
  'unicorn/no-xor-as-exponentiation'?: Linter.RuleEntry<[]>
  /**
   * Require consistent decimal numbers without redundant zeros.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/no-zero-fractions.md
   */
  'unicorn/no-zero-fractions'?: Linter.RuleEntry<[]>
  /**
   * Enforce proper case for numeric literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/number-literal-case.md
   */
  'unicorn/number-literal-case'?: Linter.RuleEntry<UnicornNumberLiteralCase>
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/numeric-separators-style.md
   */
  'unicorn/numeric-separators-style'?: Linter.RuleEntry<UnicornNumericSeparatorsStyle>
  /**
   * Require assignment operator shorthand where possible.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/operator-assignment.md
   */
  'unicorn/operator-assignment'?: Linter.RuleEntry<UnicornOperatorAssignment>
  /**
   * Prefer `AbortSignal.any()` over manually forwarding abort events between signals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-abort-signal-any.md
   */
  'unicorn/prefer-abort-signal-any'?: Linter.RuleEntry<[]>
  /**
   * Prefer `AbortSignal.timeout()` over manually aborting an `AbortController` with `setTimeout()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-abort-signal-timeout.md
   */
  'unicorn/prefer-abort-signal-timeout'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-add-event-listener.md
   */
  'unicorn/prefer-add-event-listener'?: Linter.RuleEntry<UnicornPreferAddEventListener>
  /**
   * Prefer an options object over a boolean in `.addEventListener()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-add-event-listener-options.md
   */
  'unicorn/prefer-add-event-listener-options'?: Linter.RuleEntry<[]>
  /**
   * Prefer `AggregateError` when throwing collected errors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-aggregate-error.md
   */
  'unicorn/prefer-aggregate-error'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-find.md
   */
  'unicorn/prefer-array-find'?: Linter.RuleEntry<UnicornPreferArrayFind>
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-flat.md
   */
  'unicorn/prefer-array-flat'?: Linter.RuleEntry<UnicornPreferArrayFlat>
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()` and `.filter(…).flatMap(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-flat-map.md
   */
  'unicorn/prefer-array-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array.fromAsync()` over array accumulation loops.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-from-async.md
   */
  'unicorn/prefer-array-from-async'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `Array.from()` mapping function argument.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-from-map.md
   */
  'unicorn/prefer-array-from-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array.from({length}, …)` when creating range arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-from-range.md
   */
  'unicorn/prefer-array-from-range'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-index-of.md
   */
  'unicorn/prefer-array-index-of'?: Linter.RuleEntry<[]>
  /**
   * Prefer iterating an array directly or with `Array#keys()` over `Array#entries()` when the index or value is unused.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-iterable-methods.md
   */
  'unicorn/prefer-array-iterable-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer last-oriented array methods over `Array#reverse()` or `Array#toReversed()` followed by a method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-last-methods.md
   */
  'unicorn/prefer-array-last-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#slice()` over `Array#splice()` when reading from the returned array.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-slice.md
   */
  'unicorn/prefer-array-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-array-some.md
   */
  'unicorn/prefer-array-some'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-at.md
   */
  'unicorn/prefer-at'?: Linter.RuleEntry<UnicornPreferAt>
  /**
   * Prefer `await` over promise chaining.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-await.md
   */
  'unicorn/prefer-await'?: Linter.RuleEntry<[]>
  /**
   * Prefer `BigInt` literals over the constructor.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-bigint-literals.md
   */
  'unicorn/prefer-bigint-literals'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-blob-reading-methods.md
   */
  'unicorn/prefer-blob-reading-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer block statements over IIFEs used only for scoping.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-block-statement-over-iife.md
   */
  'unicorn/prefer-block-statement-over-iife'?: Linter.RuleEntry<[]>
  /**
   * Prefer directly returning boolean expressions over `if` statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-boolean-return.md
   */
  'unicorn/prefer-boolean-return'?: Linter.RuleEntry<[]>
  /**
   * Prefer class field declarations over `this` assignments in constructors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-class-fields.md
   */
  'unicorn/prefer-class-fields'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Element#classList.toggle()` to toggle class names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-classlist-toggle.md
   */
  'unicorn/prefer-classlist-toggle'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-code-point.md
   */
  'unicorn/prefer-code-point'?: Linter.RuleEntry<[]>
  /**
   * Prefer combining consecutive guards with identical exit statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-combined-guards.md
   */
  'unicorn/prefer-combined-guards'?: Linter.RuleEntry<UnicornPreferCombinedGuards>
  /**
   * Prefer early continues over conditionals wrapping the remainder of the loop body.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-continue.md
   */
  'unicorn/prefer-continue'?: Linter.RuleEntry<UnicornPreferContinue>
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-date-now.md
   */
  'unicorn/prefer-date-now'?: Linter.RuleEntry<[]>
  /**
   * Prefer default parameters and destructuring defaults over reassignment and fallback expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-default-parameters.md
   */
  'unicorn/prefer-default-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer direct iteration over default iterator method calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-direct-iteration.md
   */
  'unicorn/prefer-direct-iteration'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `using`/`await using` over manual `try`/`finally` resource disposal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-dispose.md
   */
  'unicorn/prefer-dispose'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Element#append()` over `Node#appendChild()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-dom-node-append.md
   */
  'unicorn/prefer-dom-node-append'?: Linter.RuleEntry<[]>
  /**
   * Renamed to `unicorn/dom-node-dataset`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#prefer-dom-node-dataset
   * @deprecated
   */
  'unicorn/prefer-dom-node-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.getHTML()` and `.setHTML()` over `.innerHTML`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-dom-node-html-methods.md
   */
  'unicorn/prefer-dom-node-html-methods'?: Linter.RuleEntry<UnicornPreferDomNodeHtmlMethods>
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-dom-node-remove.md
   */
  'unicorn/prefer-dom-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.replaceChildren()` when replacing DOM children.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-dom-node-replace-children.md
   */
  'unicorn/prefer-dom-node-replace-children'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.textContent` over `.innerText`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-dom-node-text-content.md
   */
  'unicorn/prefer-dom-node-text-content'?: Linter.RuleEntry<[]>
  /**
   * Prefer early returns over conditionals wrapping the remainder of the function body.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-early-return.md
   */
  'unicorn/prefer-early-return'?: Linter.RuleEntry<UnicornPreferEarlyReturn>
  /**
   * Prefer `else if` over adjacent `if` statements with related conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-else-if.md
   */
  'unicorn/prefer-else-if'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Error.isError()` when checking for errors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-error-is-error.md
   */
  'unicorn/prefer-error-is-error'?: Linter.RuleEntry<[]>
  /**
   * Prefer escape sequences for irregular whitespace characters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-escaped-irregular-whitespace.md
   */
  'unicorn/prefer-escaped-irregular-whitespace'?: Linter.RuleEntry<[]>
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-event-target.md
   */
  'unicorn/prefer-event-target'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/prefer-explicit-viewport-units`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#prefer-explicit-viewport-units
   * @deprecated
   */
  'unicorn/prefer-explicit-viewport-units'?: Linter.RuleEntry<[]>
  /**
   * Prefer `export…from` when re-exporting.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-export-from.md
   */
  'unicorn/prefer-export-from'?: Linter.RuleEntry<UnicornPreferExportFrom>
  /**
   * Prefer flat `Math.min()` and `Math.max()` calls over nested calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-flat-math-min-max.md
   */
  'unicorn/prefer-flat-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.getOrInsertComputed()` when the default value has side effects.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-get-or-insert-computed.md
   */
  'unicorn/prefer-get-or-insert-computed'?: Linter.RuleEntry<[]>
  /**
   * Prefer global numeric constants over `Number` static properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-global-number-constants.md
   */
  'unicorn/prefer-global-number-constants'?: Linter.RuleEntry<[]>
  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-global-this.md
   */
  'unicorn/prefer-global-this'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Object.groupBy()` or `Map.groupBy()` over manual grouping.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-group-by.md
   */
  'unicorn/prefer-group-by'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.has()` when checking existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-has-check.md
   */
  'unicorn/prefer-has-check'?: Linter.RuleEntry<[]>
  /**
   * Prefer moving code shared by all branches of an `if` statement out of the branches.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-hoisting-branch-code.md
   */
  'unicorn/prefer-hoisting-branch-code'?: Linter.RuleEntry<[]>
  /**
   * Prefer HTTPS over HTTP.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-https.md
   */
  'unicorn/prefer-https'?: Linter.RuleEntry<UnicornPreferHttps>
  /**
   * Prefer identifiers over string literals in import and export specifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-identifier-import-export-specifiers.md
   */
  'unicorn/prefer-identifier-import-export-specifiers'?: Linter.RuleEntry<[]>
  /**
   * Prefer `import.meta.{dirname,filename}` over legacy techniques for getting file paths.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-import-meta-properties.md
   */
  'unicorn/prefer-import-meta-properties'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-includes.md
   */
  'unicorn/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over repeated equality comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-includes-over-repeated-comparisons.md
   */
  'unicorn/prefer-includes-over-repeated-comparisons'?: Linter.RuleEntry<UnicornPreferIncludesOverRepeatedComparisons>
  /**
   * Prefer passing iterables directly to constructors instead of filling empty collections.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-iterable-in-constructor.md
   */
  'unicorn/prefer-iterable-in-constructor'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Iterator.concat(…)` over temporary spread arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-iterator-concat.md
   */
  'unicorn/prefer-iterator-concat'?: Linter.RuleEntry<[]>
  /**
   * Prefer iterator helpers over temporary arrays from iterators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-iterator-helpers.md
   */
  'unicorn/prefer-iterator-helpers'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Iterator#toArray()` over temporary arrays from iterator spreads.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-iterator-to-array.md
   */
  'unicorn/prefer-iterator-to-array'?: Linter.RuleEntry<[]>
  /**
   * Prefer moving `.toArray()` to the end of iterator helper chains.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-iterator-to-array-at-end.md
   */
  'unicorn/prefer-iterator-to-array-at-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Iterator.zip()` over parallel-array indexing.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-iterator-zip.md
   */
  'unicorn/prefer-iterator-zip'?: Linter.RuleEntry<[]>
  /**
   * Prefer JSON imports over reading and parsing JSON files.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-json-import.md
   */
  'unicorn/prefer-json-import'?: Linter.RuleEntry<[]>
  /**
   * Renamed to `unicorn/consistent-json-file-read`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#prefer-json-parse-buffer
   * @deprecated
   */
  'unicorn/prefer-json-parse-buffer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `KeyboardEvent#key` over deprecated keyboard event properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-keyboard-event-key.md
   */
  'unicorn/prefer-keyboard-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer literal printable ASCII characters over escape sequences.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-literal-ascii.md
   */
  'unicorn/prefer-literal-ascii'?: Linter.RuleEntry<[]>
  /**
   * Prefer `location.assign()` over assigning to `location.href`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-location-assign.md
   */
  'unicorn/prefer-location-assign'?: Linter.RuleEntry<[]>
  /**
   * Prefer using a logical operator over a ternary.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-logical-operator-over-ternary.md
   */
  'unicorn/prefer-logical-operator-over-ternary'?: Linter.RuleEntry<[]>
  /**
   * Prefer `new Map()` over `Object.fromEntries()` when using the result as a map.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-map-from-entries.md
   */
  'unicorn/prefer-map-from-entries'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.abs()` over manual absolute value expressions and symmetric range checks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-math-abs.md
   */
  'unicorn/prefer-math-abs'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math` constants over their approximate numeric values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-math-constants.md
   */
  'unicorn/prefer-math-constants'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-math-min-max.md
   */
  'unicorn/prefer-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.trunc()` for truncating numbers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-math-trunc.md
   */
  'unicorn/prefer-math-trunc'?: Linter.RuleEntry<[]>
  /**
   * Moved to `eslint-cssicorn` as `cssicorn/prefer-media-feature-range-syntax`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#prefer-media-feature-range-syntax
   * @deprecated
   */
  'unicorn/prefer-media-feature-range-syntax'?: Linter.RuleEntry<[]>
  /**
   * Prefer moving ternaries into the minimal varying part of an expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-minimal-ternary.md
   */
  'unicorn/prefer-minimal-ternary'?: Linter.RuleEntry<UnicornPreferMinimalTernary>
  /**
   * Prefer modern DOM APIs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-modern-dom-apis.md
   */
  'unicorn/prefer-modern-dom-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-modern-math-apis.md
   */
  'unicorn/prefer-modern-math-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-module.md
   */
  'unicorn/prefer-module'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-native-coercion-functions.md
   */
  'unicorn/prefer-native-coercion-functions'?: Linter.RuleEntry<[]>
  /**
   * Prefer negative index over `.length - index` when possible.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-negative-index.md
   */
  'unicorn/prefer-negative-index'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-node-protocol.md
   */
  'unicorn/prefer-node-protocol'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number()` over `parseFloat()` and base-10 `parseInt()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-number-coercion.md
   */
  'unicorn/prefer-number-coercion'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number.isSafeInteger()` over integer checks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-number-is-safe-integer.md
   */
  'unicorn/prefer-number-is-safe-integer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number` static methods over global functions and optionally static properties over global constants.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-number-properties.md
   */
  'unicorn/prefer-number-properties'?: Linter.RuleEntry<UnicornPreferNumberProperties>
  /**
   * Prefer `Object.defineProperties()` over multiple `Object.defineProperty()` calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-object-define-properties.md
   */
  'unicorn/prefer-object-define-properties'?: Linter.RuleEntry<[]>
  /**
   * Prefer object destructuring defaults over default object literals with spread.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-object-destructuring-defaults.md
   */
  'unicorn/prefer-object-destructuring-defaults'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-object-from-entries.md
   */
  'unicorn/prefer-object-from-entries'?: Linter.RuleEntry<UnicornPreferObjectFromEntries>
  /**
   * Prefer the most specific `Object` iterable method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-object-iterable-methods.md
   */
  'unicorn/prefer-object-iterable-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer observer APIs over resize and scroll listeners with layout reads.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-observer-apis.md
   */
  'unicorn/prefer-observer-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer omitting the `catch` binding parameter.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-optional-catch-binding.md
   */
  'unicorn/prefer-optional-catch-binding'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Path2D` for repeatedly drawn canvas paths.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-path2d.md
   */
  'unicorn/prefer-path2d'?: Linter.RuleEntry<[]>
  /**
   * Prefer private class fields over the underscore-prefix convention.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-private-class-fields.md
   */
  'unicorn/prefer-private-class-fields'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Promise.resolve()` and `Promise.reject()` over trivial `new Promise()` calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-promise-static-methods.md
   */
  'unicorn/prefer-promise-static-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Promise.try()` over promise-wrapping boilerplate.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-promise-try.md
   */
  'unicorn/prefer-promise-try'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Promise.withResolvers()` when extracting resolver functions from `new Promise()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-promise-with-resolvers.md
   */
  'unicorn/prefer-promise-with-resolvers'?: Linter.RuleEntry<[]>
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-prototype-methods.md
   */
  'unicorn/prefer-prototype-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.querySelector()` and `.querySelectorAll()` over older DOM query methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-query-selector.md
   */
  'unicorn/prefer-query-selector'?: Linter.RuleEntry<UnicornPreferQuerySelector>
  /**
   * Prefer `queueMicrotask()` over `process.nextTick()`, `setImmediate()`, and `setTimeout(…, 0)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-queue-microtask.md
   */
  'unicorn/prefer-queue-microtask'?: Linter.RuleEntry<UnicornPreferQueueMicrotask>
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-reflect-apply.md
   */
  'unicorn/prefer-reflect-apply'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp.escape()` for escaping strings to use in regular expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-regexp-escape.md
   */
  'unicorn/prefer-regexp-escape'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp#test()` over `String#match()`, `String#search()`, and `RegExp#exec()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-regexp-test.md
   */
  'unicorn/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Response.json()` over `new Response(JSON.stringify())`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-response-static-json.md
   */
  'unicorn/prefer-response-static-json'?: Linter.RuleEntry<[]>
  /**
   * Prefer `:scope` when using element query selector methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-scoped-selector.md
   */
  'unicorn/prefer-scoped-selector'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-set-has.md
   */
  'unicorn/prefer-set-has'?: Linter.RuleEntry<UnicornPreferSetHas>
  /**
   * Prefer `Set` methods for Set operations.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-set-methods.md
   */
  'unicorn/prefer-set-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-set-size.md
   */
  'unicorn/prefer-set-size'?: Linter.RuleEntry<[]>
  /**
   * Prefer arrow function properties over methods with a single return.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-short-arrow-method.md
   */
  'unicorn/prefer-short-arrow-method'?: Linter.RuleEntry<UnicornPreferShortArrowMethod>
  /**
   * Prefer shorter alternatives to Unicode escape sequences.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-short-escape-sequences.md
   */
  'unicorn/prefer-short-escape-sequences'?: Linter.RuleEntry<[]>
  /**
   * Prefer simple conditions first in logical expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-simple-condition-first.md
   */
  'unicorn/prefer-simple-condition-first'?: Linter.RuleEntry<[]>
  /**
   * Prefer a simple comparison function for `Array#sort()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-simple-sort-comparator.md
   */
  'unicorn/prefer-simple-sort-comparator'?: Linter.RuleEntry<[]>
  /**
   * Prefer simplified conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-simplified-conditions.md
   */
  'unicorn/prefer-simplified-conditions'?: Linter.RuleEntry<UnicornPreferSimplifiedConditions>
  /**
   * Prefer a single `Array#some()` or `Array#every()` with a combined predicate.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-single-array-predicate.md
   */
  'unicorn/prefer-single-array-predicate'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple `Array#{push,unshift}()`, `Element#classList.{add,remove}()`, and `importScripts()` into one call.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-single-call.md
   */
  'unicorn/prefer-single-call'?: Linter.RuleEntry<UnicornPreferSingleCall>
  /**
   * Prefer a single object destructuring declaration per local const source.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-single-object-destructuring.md
   */
  'unicorn/prefer-single-object-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple single-character replacements into a single `String#replaceAll()` with a regular expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-single-replace.md
   */
  'unicorn/prefer-single-replace'?: Linter.RuleEntry<[]>
  /**
   * Prefer declaring variables in the smallest possible scope.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-smaller-scope.md
   */
  'unicorn/prefer-smaller-scope'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#split()` with a limit.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-split-limit.md
   */
  'unicorn/prefer-split-limit'?: Linter.RuleEntry<[]>
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()`, and trivial `for…of` copies.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-spread.md
   */
  'unicorn/prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#matchAll()` over `RegExp#exec()` loops.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-string-match-all.md
   */
  'unicorn/prefer-string-match-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#padStart()` and `String#padEnd()` over manual string padding.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-string-pad-start-end.md
   */
  'unicorn/prefer-string-pad-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-string-raw.md
   */
  'unicorn/prefer-string-raw'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#repeat()` for repeated whitespace.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-string-repeat.md
   */
  'unicorn/prefer-string-repeat'?: Linter.RuleEntry<UnicornPreferStringRepeat>
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag and `String#split().join()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-string-replace-all.md
   */
  'unicorn/prefer-string-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-string-slice.md
   */
  'unicorn/prefer-string-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over regexes, `String#indexOf() === 0`, and slice checks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-string-starts-ends-with.md
   */
  'unicorn/prefer-string-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-string-trim-start-end.md
   */
  'unicorn/prefer-string-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-structured-clone.md
   */
  'unicorn/prefer-structured-clone'?: Linter.RuleEntry<UnicornPreferStructuredClone>
  /**
   * Prefer `switch` over multiple `else-if`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-switch.md
   */
  'unicorn/prefer-switch'?: Linter.RuleEntry<UnicornPreferSwitch>
  /**
   * Prefer `Temporal` over `Date`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-temporal.md
   */
  'unicorn/prefer-temporal'?: Linter.RuleEntry<UnicornPreferTemporal>
  /**
   * Prefer direct Temporal conversion methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-temporal-conversion.md
   */
  'unicorn/prefer-temporal-conversion'?: Linter.RuleEntry<[]>
  /**
   * Prefer ternary expressions over simple `if` statements that return or assign values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-ternary.md
   */
  'unicorn/prefer-ternary'?: Linter.RuleEntry<UnicornPreferTernary>
  /**
   * Prefer `.then().catch()` over `.then(…, …)` for error handling.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-then-catch.md
   */
  'unicorn/prefer-then-catch'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Element#toggleAttribute()` to toggle attributes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-toggle-attribute.md
   */
  'unicorn/prefer-toggle-attribute'?: Linter.RuleEntry<[]>
  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-top-level-await.md
   */
  'unicorn/prefer-top-level-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-type-error.md
   */
  'unicorn/prefer-type-error'?: Linter.RuleEntry<[]>
  /**
   * Require type literals to be last in union types.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-type-literal-last.md
   */
  'unicorn/prefer-type-literal-last'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Uint8Array#toBase64()` and `Uint8Array.fromBase64()` over legacy base64 conversions and manual postprocessing.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-uint8array-base64.md
   */
  'unicorn/prefer-uint8array-base64'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Uint8Array#toHex()` and `Uint8Array.fromHex()` over manual and Buffer hex conversions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-uint8array-hex.md
   */
  'unicorn/prefer-uint8array-hex'?: Linter.RuleEntry<[]>
  /**
   * Prefer the unary minus operator over multiplying or dividing by `-1`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-unary-minus.md
   */
  'unicorn/prefer-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Prefer Unicode code point escapes over legacy escape sequences.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-unicode-code-point-escapes.md
   */
  'unicorn/prefer-unicode-code-point-escapes'?: Linter.RuleEntry<[]>
  /**
   * Prefer `URL.canParse()` over constructing a `URL` in a try/catch for validation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-url-can-parse.md
   */
  'unicorn/prefer-url-can-parse'?: Linter.RuleEntry<[]>
  /**
   * Prefer `URL#href` over stringifying a `URL`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-url-href.md
   */
  'unicorn/prefer-url-href'?: Linter.RuleEntry<[]>
  /**
   * Prefer `URLSearchParams` over manually splitting query strings.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-url-search-parameters.md
   */
  'unicorn/prefer-url-search-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer putting the condition in the while statement.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/prefer-while-loop-condition.md
   */
  'unicorn/prefer-while-loop-condition'?: Linter.RuleEntry<[]>
  /**
   * Renamed to `unicorn/name-replacements`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/deleted-and-deprecated-rules.md#prevent-abbreviations
   * @deprecated
   */
  'unicorn/prevent-abbreviations'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent relative URL style.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/relative-url-style.md
   */
  'unicorn/relative-url-style'?: Linter.RuleEntry<UnicornRelativeUrlStyle>
  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-array-join-separator.md
   */
  'unicorn/require-array-join-separator'?: Linter.RuleEntry<[]>
  /**
   * Require a compare function when calling `Array#sort()` or `Array#toSorted()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-array-sort-compare.md
   */
  'unicorn/require-array-sort-compare'?: Linter.RuleEntry<[]>
  /**
   * Require `CSS.escape()` for interpolated values in CSS selectors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-css-escape.md
   */
  'unicorn/require-css-escape'?: Linter.RuleEntry<UnicornRequireCssEscape>
  /**
   * Require configured YAML frontmatter fields.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-frontmatter-fields.md
   */
  'unicorn/require-frontmatter-fields'?: Linter.RuleEntry<UnicornRequireFrontmatterFields>
  /**
   * Require non-empty module attributes for imports and exports
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-module-attributes.md
   */
  'unicorn/require-module-attributes'?: Linter.RuleEntry<[]>
  /**
   * Require non-empty specifier list in import and export statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-module-specifiers.md
   */
  'unicorn/require-module-specifiers'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-number-to-fixed-digits-argument.md
   */
  'unicorn/require-number-to-fixed-digits-argument'?: Linter.RuleEntry<[]>
  /**
   * Require passive event listeners for high-frequency events.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-passive-events.md
   */
  'unicorn/require-passive-events'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-post-message-target-origin.md
   */
  'unicorn/require-post-message-target-origin'?: Linter.RuleEntry<[]>
  /**
   * Require boolean-returning Proxy traps to return booleans.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-proxy-trap-boolean-return.md
   */
  'unicorn/require-proxy-trap-boolean-return'?: Linter.RuleEntry<[]>
  /**
   * Require streaming decoding of fetch-body chunks with `TextDecoder`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/require-text-decoder-streaming.md
   */
  'unicorn/require-text-decoder-streaming'?: Linter.RuleEntry<[]>
  /**
   * Enforce a consistent style for single-line block comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/single-line-block-comment-style.md
   */
  'unicorn/single-line-block-comment-style'?: Linter.RuleEntry<UnicornSingleLineBlockCommentStyle>
  /**
   * Enforce better string content.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/string-content.md
   */
  'unicorn/string-content'?: Linter.RuleEntry<UnicornStringContent>
  /**
   * Enforce consistent brace style for `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/switch-case-braces.md
   */
  'unicorn/switch-case-braces'?: Linter.RuleEntry<UnicornSwitchCaseBraces>
  /**
   * Enforce consistent `break`/`return`/`continue`/`throw` position in `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/switch-case-break-position.md
   */
  'unicorn/switch-case-break-position'?: Linter.RuleEntry<[]>
  /**
   * Fix whitespace-insensitive template indentation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/template-indent.md
   */
  'unicorn/template-indent'?: Linter.RuleEntry<UnicornTemplateIndent>
  /**
   * Enforce consistent case for text encoding identifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/text-encoding-identifier-case.md
   */
  'unicorn/text-encoding-identifier-case'?: Linter.RuleEntry<UnicornTextEncodingIdentifierCase>
  /**
   * Require `new` when creating an error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/throw-new-error.md
   */
  'unicorn/throw-new-error'?: Linter.RuleEntry<[]>
  /**
   * Limit the complexity of `try` blocks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v77.0.0/docs/rules/try-complexity.md
   */
  'unicorn/try-complexity'?: Linter.RuleEntry<UnicornTryComplexity>
}

/* ======= Declarations ======= */
// ----- astro/jsx-a11y/alt-text -----
type AstroJsxA11YAltText = []|[{
  elements?: string[]
  img?: string[]
  object?: string[]
  area?: string[]
  "input[type=\"image\"]"?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/anchor-ambiguous-text -----
type AstroJsxA11YAnchorAmbiguousText = []|[{
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/anchor-has-content -----
type AstroJsxA11YAnchorHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/anchor-is-valid -----
type AstroJsxA11YAnchorIsValid = []|[{
  components?: string[]
  specialLink?: string[]
  
  aspects?: [("noHref" | "invalidHref" | "preferButton"), ...(("noHref" | "invalidHref" | "preferButton"))[]]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-activedescendant-has-tabindex -----
type AstroJsxA11YAriaActivedescendantHasTabindex = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-props -----
type AstroJsxA11YAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-proptypes -----
type AstroJsxA11YAriaProptypes = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-role -----
type AstroJsxA11YAriaRole = []|[{
  allowedInvalidRoles?: string[]
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-unsupported-elements -----
type AstroJsxA11YAriaUnsupportedElements = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/autocomplete-valid -----
type AstroJsxA11YAutocompleteValid = []|[{
  inputComponents?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/click-events-have-key-events -----
type AstroJsxA11YClickEventsHaveKeyEvents = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/control-has-associated-label -----
type AstroJsxA11YControlHasAssociatedLabel = []|[{
  labelAttributes?: string[]
  controlComponents?: string[]
  ignoreElements?: string[]
  ignoreRoles?: string[]
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/heading-has-content -----
type AstroJsxA11YHeadingHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/html-has-lang -----
type AstroJsxA11YHtmlHasLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/iframe-has-title -----
type AstroJsxA11YIframeHasTitle = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/img-redundant-alt -----
type AstroJsxA11YImgRedundantAlt = []|[{
  components?: string[]
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/interactive-supports-focus -----
type AstroJsxA11YInteractiveSupportsFocus = []|[{
  
  tabbable?: ("button" | "checkbox" | "columnheader" | "combobox" | "grid" | "gridcell" | "link" | "listbox" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "radiogroup" | "row" | "rowheader" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "switch" | "tab" | "tablist" | "textbox" | "tree" | "treegrid" | "treeitem" | "doc-backlink" | "doc-biblioref" | "doc-glossref" | "doc-noteref")[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/label-has-associated-control -----
type AstroJsxA11YLabelHasAssociatedControl = []|[{
  labelComponents?: string[]
  labelAttributes?: string[]
  controlComponents?: string[]
  
  assert?: ("htmlFor" | "nesting" | "both" | "either")
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/lang -----
type AstroJsxA11YLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/media-has-caption -----
type AstroJsxA11YMediaHasCaption = []|[{
  audio?: string[]
  video?: string[]
  track?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/mouse-events-have-key-events -----
type AstroJsxA11YMouseEventsHaveKeyEvents = []|[{
  
  hoverInHandlers?: string[]
  
  hoverOutHandlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-access-key -----
type AstroJsxA11YNoAccessKey = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-aria-hidden-on-focusable -----
type AstroJsxA11YNoAriaHiddenOnFocusable = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-autofocus -----
type AstroJsxA11YNoAutofocus = []|[{
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-distracting-elements -----
type AstroJsxA11YNoDistractingElements = []|[{
  
  elements?: ("marquee" | "blink")[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-interactive-element-to-noninteractive-role -----
type AstroJsxA11YNoInteractiveElementToNoninteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- astro/jsx-a11y/no-noninteractive-element-interactions -----
type AstroJsxA11YNoNoninteractiveElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-noninteractive-element-to-interactive-role -----
type AstroJsxA11YNoNoninteractiveElementToInteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- astro/jsx-a11y/no-noninteractive-tabindex -----
type AstroJsxA11YNoNoninteractiveTabindex = []|[{
  
  roles?: string[]
  
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-redundant-roles -----
type AstroJsxA11YNoRedundantRoles = []|[{
  [k: string]: string[] | undefined
}]
// ----- astro/jsx-a11y/no-static-element-interactions -----
type AstroJsxA11YNoStaticElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/prefer-tag-over-role -----
type AstroJsxA11YPreferTagOverRole = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/role-has-required-aria-props -----
type AstroJsxA11YRoleHasRequiredAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/role-supports-aria-props -----
type AstroJsxA11YRoleSupportsAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/scope -----
type AstroJsxA11YScope = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/tabindex-no-positive -----
type AstroJsxA11YTabindexNoPositive = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/no-unsafe-inline-scripts -----
type AstroNoUnsafeInlineScripts = []|[{
  allowDefineVars?: boolean
  allowModuleScripts?: boolean
  allowNonExecutingTypes?: string[]
  allowNonce?: boolean
}]
// ----- astro/prefer-split-class-list -----
type AstroPreferSplitClassList = []|[{
  splitLiteral?: boolean
}]
// ----- astro/semi -----
type AstroSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- astro/sort-attributes -----
type AstroSortAttributes = []|[{
  type?: ("alphabetical" | "line-length")
  ignoreCase?: boolean
  order?: ("asc" | "desc")
}]
// ----- import-sort/imports -----
type ImportSortImports = []|[{
  groups?: string[][]
}]
// ----- import/consistent-type-specifier-style -----
type ImportConsistentTypeSpecifierStyle = []|[("prefer-top-level" | "prefer-inline")]
// ----- import/dynamic-import-chunkname -----
type ImportDynamicImportChunkname = []|[{
  importFunctions?: string[]
  allowEmpty?: boolean
  webpackChunknameFormat?: string
  [k: string]: unknown | undefined
}]
// ----- import/extensions -----
type ImportExtensions = ([]|[("always" | "ignorePackages" | "never")] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
  fix?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
  fix?: boolean
  [k: string]: unknown | undefined
}] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  [k: string]: ("always" | "ignorePackages" | "never")
}] | []|[{
  [k: string]: ("always" | "ignorePackages" | "never")
}])
// ----- import/first -----
type ImportFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import/imports-first -----
type ImportImportsFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import/max-dependencies -----
type ImportMaxDependencies = []|[{
  max?: number
  ignoreTypeImports?: boolean
}]
// ----- import/named -----
type ImportNamed = []|[{
  commonjs?: boolean
}]
// ----- import/namespace -----
type ImportNamespace = []|[{
  
  allowComputed?: boolean
}]
// ----- import/newline-after-import -----
type ImportNewlineAfterImport = []|[{
  count?: number
  exactCount?: boolean
  considerComments?: boolean
}]
// ----- import/no-absolute-path -----
type ImportNoAbsolutePath = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [unknown, ...(unknown)[]]
}]
// ----- import/no-anonymous-default-export -----
type ImportNoAnonymousDefaultExport = []|[{
  
  allowArray?: boolean
  
  allowArrowFunction?: boolean
  
  allowCallExpression?: boolean
  
  allowAnonymousClass?: boolean
  
  allowAnonymousFunction?: boolean
  
  allowLiteral?: boolean
  
  allowObject?: boolean
  
  allowNew?: boolean
}]
// ----- import/no-commonjs -----
type ImportNoCommonjs = ([]|["allow-primitive-modules"] | []|[{
  allowPrimitiveModules?: boolean
  allowRequire?: boolean
  allowConditionalRequire?: boolean
}])
// ----- import/no-cycle -----
type ImportNoCycle = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [unknown, ...(unknown)[]]
  maxDepth?: (number | "∞")
  
  ignoreExternal?: boolean
  
  allowUnsafeDynamicCyclicDependency?: boolean
}]
// ----- import/no-duplicates -----
type ImportNoDuplicates = []|[{
  considerQueryString?: boolean
  "prefer-inline"?: boolean
}]
// ----- import/no-dynamic-require -----
type ImportNoDynamicRequire = []|[{
  esmodule?: boolean
}]
// ----- import/no-extraneous-dependencies -----
type ImportNoExtraneousDependencies = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  bundledDependencies?: (boolean | unknown[])
  packageDir?: (string | unknown[])
  includeInternal?: boolean
  includeTypes?: boolean
  whitelist?: unknown[]
}]
// ----- import/no-import-module-exports -----
type ImportNoImportModuleExports = []|[{
  exceptions?: unknown[]
}]
// ----- import/no-internal-modules -----
type ImportNoInternalModules = []|[({
  allow?: string[]
} | {
  forbid?: string[]
})]
// ----- import/no-namespace -----
type ImportNoNamespace = []|[{
  ignore?: string[]
  [k: string]: unknown | undefined
}]
// ----- import/no-nodejs-modules -----
type ImportNoNodejsModules = []|[{
  allow?: string[]
}]
// ----- import/no-relative-packages -----
type ImportNoRelativePackages = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [unknown, ...(unknown)[]]
}]
// ----- import/no-relative-parent-imports -----
type ImportNoRelativeParentImports = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [unknown, ...(unknown)[]]
}]
// ----- import/no-rename-default -----
type ImportNoRenameDefault = []|[{
  commonjs?: boolean
  preventRenamingBindings?: boolean
}]
// ----- import/no-restricted-paths -----
type ImportNoRestrictedPaths = []|[{
  
  zones?: [{
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  }, ...({
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  })[]]
  basePath?: string
}]
// ----- import/no-unassigned-import -----
type ImportNoUnassignedImport = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  allow?: string[]
}]
// ----- import/no-unresolved -----
type ImportNoUnresolved = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [unknown, ...(unknown)[]]
  caseSensitive?: boolean
  caseSensitiveStrict?: boolean
}]
// ----- import/no-unused-modules -----
type ImportNoUnusedModules = []|[({
  unusedExports: true
  
  src?: [unknown, ...(unknown)[]]
  [k: string]: unknown | undefined
} | {
  missingExports: true
  [k: string]: unknown | undefined
})]
// ----- import/no-useless-path-segments -----
type ImportNoUselessPathSegments = []|[{
  commonjs?: boolean
  noUselessIndex?: boolean
}]
// ----- import/order -----
type ImportOrder = []|[{
  groups?: unknown[]
  pathGroupsExcludedImportTypes?: unknown[]
  distinctGroup?: boolean
  pathGroups?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    group: ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")
    position?: ("after" | "before")
  }[]
  "newlines-between"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  "newlines-between-types"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  consolidateIslands?: ("inside-groups" | "never")
  sortTypesGroup?: boolean
  named?: (boolean | {
    enabled?: boolean
    import?: boolean
    export?: boolean
    require?: boolean
    cjsExports?: boolean
    types?: ("mixed" | "types-first" | "types-last")
  })
  alphabetize?: {
    caseInsensitive?: boolean
    order?: ("ignore" | "asc" | "desc")
    orderImportKind?: ("ignore" | "asc" | "desc")
  }
  warnOnUnassignedImports?: boolean
}]
// ----- import/prefer-default-export -----
type ImportPreferDefaultExport = []|[{
  target?: ("single" | "any")
}]
// ----- import/prefer-namespace-import -----
type ImportPreferNamespaceImport = []|[{
  patterns?: string[]
}]
// ----- jsx-a11y/accessible-emoji -----
type JsxA11YAccessibleEmoji = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/alt-text -----
type JsxA11YAltText = []|[{
  elements?: string[]
  img?: string[]
  object?: string[]
  area?: string[]
  "input[type=\"image\"]"?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-ambiguous-text -----
type JsxA11YAnchorAmbiguousText = []|[{
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-has-content -----
type JsxA11YAnchorHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-is-valid -----
type JsxA11YAnchorIsValid = []|[{
  components?: string[]
  specialLink?: string[]
  
  aspects?: [("noHref" | "invalidHref" | "preferButton"), ...(("noHref" | "invalidHref" | "preferButton"))[]]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-activedescendant-has-tabindex -----
type JsxA11YAriaActivedescendantHasTabindex = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-props -----
type JsxA11YAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-proptypes -----
type JsxA11YAriaProptypes = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-role -----
type JsxA11YAriaRole = []|[{
  allowedInvalidRoles?: string[]
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-unsupported-elements -----
type JsxA11YAriaUnsupportedElements = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/autocomplete-valid -----
type JsxA11YAutocompleteValid = []|[{
  inputComponents?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/click-events-have-key-events -----
type JsxA11YClickEventsHaveKeyEvents = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/control-has-associated-label -----
type JsxA11YControlHasAssociatedLabel = []|[{
  labelAttributes?: string[]
  controlComponents?: string[]
  ignoreElements?: string[]
  ignoreRoles?: string[]
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/heading-has-content -----
type JsxA11YHeadingHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/html-has-lang -----
type JsxA11YHtmlHasLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/iframe-has-title -----
type JsxA11YIframeHasTitle = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/img-redundant-alt -----
type JsxA11YImgRedundantAlt = []|[{
  components?: string[]
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/interactive-supports-focus -----
type JsxA11YInteractiveSupportsFocus = []|[{
  
  tabbable?: ("button" | "checkbox" | "columnheader" | "combobox" | "grid" | "gridcell" | "link" | "listbox" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "radiogroup" | "row" | "rowheader" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "switch" | "tab" | "tablist" | "textbox" | "tree" | "treegrid" | "treeitem" | "doc-backlink" | "doc-biblioref" | "doc-glossref" | "doc-noteref")[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/label-has-associated-control -----
type JsxA11YLabelHasAssociatedControl = []|[{
  labelComponents?: string[]
  labelAttributes?: string[]
  controlComponents?: string[]
  
  assert?: ("htmlFor" | "nesting" | "both" | "either")
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/label-has-for -----
type JsxA11YLabelHasFor = []|[{
  components?: string[]
  required?: (("nesting" | "id") | {
    
    some: ("nesting" | "id")[]
    [k: string]: unknown | undefined
  } | {
    
    every: ("nesting" | "id")[]
    [k: string]: unknown | undefined
  })
  allowChildren?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/lang -----
type JsxA11YLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/media-has-caption -----
type JsxA11YMediaHasCaption = []|[{
  audio?: string[]
  video?: string[]
  track?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/mouse-events-have-key-events -----
type JsxA11YMouseEventsHaveKeyEvents = []|[{
  
  hoverInHandlers?: string[]
  
  hoverOutHandlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-access-key -----
type JsxA11YNoAccessKey = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-aria-hidden-on-focusable -----
type JsxA11YNoAriaHiddenOnFocusable = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-autofocus -----
type JsxA11YNoAutofocus = []|[{
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-distracting-elements -----
type JsxA11YNoDistractingElements = []|[{
  
  elements?: ("marquee" | "blink")[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-interactive-element-to-noninteractive-role -----
type JsxA11YNoInteractiveElementToNoninteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-noninteractive-element-interactions -----
type JsxA11YNoNoninteractiveElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-noninteractive-element-to-interactive-role -----
type JsxA11YNoNoninteractiveElementToInteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-noninteractive-tabindex -----
type JsxA11YNoNoninteractiveTabindex = []|[{
  
  roles?: string[]
  
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-onchange -----
type JsxA11YNoOnchange = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-redundant-roles -----
type JsxA11YNoRedundantRoles = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-static-element-interactions -----
type JsxA11YNoStaticElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/prefer-tag-over-role -----
type JsxA11YPreferTagOverRole = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/role-has-required-aria-props -----
type JsxA11YRoleHasRequiredAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/role-supports-aria-props -----
type JsxA11YRoleSupportsAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/scope -----
type JsxA11YScope = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/tabindex-no-positive -----
type JsxA11YTabindexNoPositive = []|[{
  [k: string]: unknown | undefined
}]
// ----- next/no-html-link-for-pages -----
type NextNoHtmlLinkForPages = []|[(string | string[])]
// ----- node/callback-return -----
type NodeCallbackReturn = []|[string[]]
// ----- node/exports-style -----
type NodeExportsStyle = []|[("module.exports" | "exports")]|[("module.exports" | "exports"), {
  allowBatchAssign?: boolean
}]
// ----- node/file-extension-in-import -----
type NodeFileExtensionInImport = []|[("always" | "never")]|[("always" | "never"), {
  [k: string]: ("always" | "never") | undefined
}]
// ----- node/handle-callback-err -----
type NodeHandleCallbackErr = []|[string]
// ----- node/hashbang -----
type NodeHashbang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]
// ----- node/no-deprecated-api -----
type NodeNoDeprecatedApi = []|[{
  version?: string
  ignoreModuleItems?: ("_linklist" | "_stream_wrap" | "async_hooks.currentId" | "async_hooks.triggerId" | "buffer.Buffer()" | "new buffer.Buffer()" | "buffer.SlowBuffer" | "constants" | "crypto._toBuf" | "crypto.Credentials" | "crypto.DEFAULT_ENCODING" | "crypto.createCipher" | "crypto.createCredentials" | "crypto.createDecipher" | "crypto.fips" | "crypto.prng" | "crypto.pseudoRandomBytes" | "crypto.rng" | "domain" | "events.EventEmitter.listenerCount" | "events.listenerCount" | "freelist" | "fs.SyncWriteStream" | "fs.exists" | "fs.lchmod" | "fs.lchmodSync" | "http.createClient" | "module.Module.createRequireFromPath" | "module.Module.requireRepl" | "module.Module._debug" | "module.createRequireFromPath" | "module.requireRepl" | "module._debug" | "net._setSimultaneousAccepts" | "os.getNetworkInterfaces" | "os.tmpDir" | "path._makeLong" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport" | "punycode" | "readline.codePointAt" | "readline.getStringWidth" | "readline.isFullWidthCodePoint" | "readline.stripVTControlCharacters" | "repl.REPLServer" | "repl.Recoverable" | "repl.REPL_MODE_MAGIC" | "repl.builtinModules" | "safe-buffer.Buffer()" | "new safe-buffer.Buffer()" | "safe-buffer.SlowBuffer" | "sys" | "timers.enroll" | "timers.unenroll" | "tls.CleartextStream" | "tls.CryptoStream" | "tls.SecurePair" | "tls.convertNPNProtocols" | "tls.createSecurePair" | "tls.parseCertString" | "tty.setRawMode" | "url.parse" | "url.resolve" | "util.debug" | "util.error" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util.print" | "util.pump" | "util.puts" | "util._extend" | "vm.runInDebugContext" | "zlib.BrotliCompress()" | "zlib.BrotliDecompress()" | "zlib.Deflate()" | "zlib.DeflateRaw()" | "zlib.Gunzip()" | "zlib.Gzip()" | "zlib.Inflate()" | "zlib.InflateRaw()" | "zlib.Unzip()")[]
  ignoreGlobalItems?: ("Buffer()" | "new Buffer()" | "COUNTER_NET_SERVER_CONNECTION" | "COUNTER_NET_SERVER_CONNECTION_CLOSE" | "COUNTER_HTTP_SERVER_REQUEST" | "COUNTER_HTTP_SERVER_RESPONSE" | "COUNTER_HTTP_CLIENT_REQUEST" | "COUNTER_HTTP_CLIENT_RESPONSE" | "GLOBAL" | "Intl.v8BreakIterator" | "require.extensions" | "root" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport")[]
  ignoreIndirectDependencies?: boolean
}]
// ----- node/no-extraneous-import -----
type NodeNoExtraneousImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
}]
// ----- node/no-extraneous-require -----
type NodeNoExtraneousRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
}]
// ----- node/no-hide-core-modules -----
type NodeNoHideCoreModules = []|[{
  allow?: ("assert" | "buffer" | "child_process" | "cluster" | "console" | "constants" | "crypto" | "dgram" | "dns" | "events" | "fs" | "http" | "https" | "module" | "net" | "os" | "path" | "querystring" | "readline" | "repl" | "stream" | "string_decoder" | "timers" | "tls" | "tty" | "url" | "util" | "vm" | "zlib")[]
  ignoreDirectDependencies?: boolean
  ignoreIndirectDependencies?: boolean
}]
// ----- node/no-missing-import -----
type NodeNoMissingImport = []|[{
  allowModules?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignoreTypeImport?: boolean
  tsconfigPath?: string
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
}]
// ----- node/no-missing-require -----
type NodeNoMissingRequire = []|[{
  allowModules?: string[]
  tryExtensions?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
  tsconfigPath?: string
}]
// ----- node/no-mixed-requires -----
type NodeNoMixedRequires = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]
// ----- node/no-process-env -----
type NodeNoProcessEnv = []|[{
  allowedVariables?: string[]
}]
// ----- node/no-restricted-import -----
type NodeNoRestrictedImport = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- node/no-restricted-require -----
type NodeNoRestrictedRequire = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- node/no-sync -----
type NodeNoSync = []|[{
  allowAtRootLevel?: boolean
  ignores?: (string | {
    from?: "file"
    path?: string
    name?: string[]
  } | {
    from?: "lib"
    name?: string[]
  } | {
    from?: "package"
    package?: string
    name?: string[]
  })[]
}]
// ----- node/no-top-level-await -----
type NodeNoTopLevelAwait = []|[{
  ignoreBin?: boolean
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
}]
// ----- node/no-unpublished-bin -----
type NodeNoUnpublishedBin = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  [k: string]: unknown | undefined
}]
// ----- node/no-unpublished-import -----
type NodeNoUnpublishedImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignoreTypeImport?: boolean
  ignorePrivate?: boolean
}]
// ----- node/no-unpublished-require -----
type NodeNoUnpublishedRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignorePrivate?: boolean
}]
// ----- node/no-unsupported-features/es-builtins -----
type NodeNoUnsupportedFeaturesEsBuiltins = []|[{
  version?: string
  ignores?: ("AggregateError" | "Array" | "Array.from" | "Array.isArray" | "Array.length" | "Array.of" | "Array.toLocaleString" | "ArrayBuffer" | "ArrayBuffer.isView" | "Atomics" | "Atomics.add" | "Atomics.and" | "Atomics.compareExchange" | "Atomics.exchange" | "Atomics.isLockFree" | "Atomics.load" | "Atomics.notify" | "Atomics.or" | "Atomics.store" | "Atomics.sub" | "Atomics.wait" | "Atomics.waitAsync" | "Atomics.xor" | "BigInt" | "BigInt.asIntN" | "BigInt.asUintN" | "BigInt64Array" | "BigInt64Array.BYTES_PER_ELEMENT" | "BigInt64Array.from" | "BigInt64Array.name" | "BigInt64Array.of" | "BigUint64Array" | "BigUint64Array.BYTES_PER_ELEMENT" | "BigUint64Array.from" | "BigUint64Array.name" | "BigUint64Array.of" | "Boolean" | "DataView" | "Date" | "Date.UTC" | "Date.now" | "Date.parse" | "Date.toLocaleDateString" | "Date.toLocaleString" | "Date.toLocaleTimeString" | "Error" | "Error.cause" | "EvalError" | "FinalizationRegistry" | "Float32Array" | "Float32Array.BYTES_PER_ELEMENT" | "Float32Array.from" | "Float32Array.name" | "Float32Array.of" | "Float64Array" | "Float64Array.BYTES_PER_ELEMENT" | "Float64Array.from" | "Float64Array.name" | "Float64Array.of" | "Function" | "Function.length" | "Function.name" | "Infinity" | "Int16Array" | "Int16Array.BYTES_PER_ELEMENT" | "Int16Array.from" | "Int16Array.name" | "Int16Array.of" | "Int32Array" | "Int32Array.BYTES_PER_ELEMENT" | "Int32Array.from" | "Int32Array.name" | "Int32Array.of" | "Int8Array" | "Int8Array.BYTES_PER_ELEMENT" | "Int8Array.from" | "Int8Array.name" | "Int8Array.of" | "Intl" | "Intl.Collator" | "Intl.DateTimeFormat" | "Intl.DisplayNames" | "Intl.ListFormat" | "Intl.Locale" | "Intl.NumberFormat" | "Intl.PluralRules" | "Intl.RelativeTimeFormat" | "Intl.Segmenter" | "Intl.Segments" | "Intl.getCanonicalLocales" | "Intl.supportedValuesOf" | "JSON" | "JSON.parse" | "JSON.stringify" | "Map" | "Map.groupBy" | "Math" | "Math.E" | "Math.LN10" | "Math.LN2" | "Math.LOG10E" | "Math.LOG2E" | "Math.PI" | "Math.SQRT1_2" | "Math.SQRT2" | "Math.abs" | "Math.acos" | "Math.acosh" | "Math.asin" | "Math.asinh" | "Math.atan" | "Math.atan2" | "Math.atanh" | "Math.cbrt" | "Math.ceil" | "Math.clz32" | "Math.cos" | "Math.cosh" | "Math.exp" | "Math.expm1" | "Math.floor" | "Math.fround" | "Math.hypot" | "Math.imul" | "Math.log" | "Math.log10" | "Math.log1p" | "Math.log2" | "Math.max" | "Math.min" | "Math.pow" | "Math.random" | "Math.round" | "Math.sign" | "Math.sin" | "Math.sinh" | "Math.sqrt" | "Math.tan" | "Math.tanh" | "Math.trunc" | "NaN" | "Number.EPSILON" | "Number.MAX_SAFE_INTEGER" | "Number.MAX_VALUE" | "Number.MIN_SAFE_INTEGER" | "Number.MIN_VALUE" | "Number.NEGATIVE_INFINITY" | "Number.NaN" | "Number.POSITIVE_INFINITY" | "Number.isFinite" | "Number.isInteger" | "Number.isNaN" | "Number.isSafeInteger" | "Number.parseFloat" | "Number.parseInt" | "Number.toLocaleString" | "Object.assign" | "Object.create" | "Object.defineGetter" | "Object.defineProperties" | "Object.defineProperty" | "Object.defineSetter" | "Object.entries" | "Object.freeze" | "Object.fromEntries" | "Object.getOwnPropertyDescriptor" | "Object.getOwnPropertyDescriptors" | "Object.getOwnPropertyNames" | "Object.getOwnPropertySymbols" | "Object.getPrototypeOf" | "Object.groupBy" | "Object.hasOwn" | "Object.is" | "Object.isExtensible" | "Object.isFrozen" | "Object.isSealed" | "Object.keys" | "Object.lookupGetter" | "Object.lookupSetter" | "Object.preventExtensions" | "Object.proto" | "Object.seal" | "Object.setPrototypeOf" | "Object.values" | "Promise" | "Promise.all" | "Promise.allSettled" | "Promise.any" | "Promise.race" | "Promise.reject" | "Promise.resolve" | "Proxy" | "Proxy.revocable" | "RangeError" | "ReferenceError" | "Reflect" | "Reflect.apply" | "Reflect.construct" | "Reflect.defineProperty" | "Reflect.deleteProperty" | "Reflect.get" | "Reflect.getOwnPropertyDescriptor" | "Reflect.getPrototypeOf" | "Reflect.has" | "Reflect.isExtensible" | "Reflect.ownKeys" | "Reflect.preventExtensions" | "Reflect.set" | "Reflect.setPrototypeOf" | "RegExp" | "RegExp.dotAll" | "RegExp.hasIndices" | "RegExp.input" | "RegExp.lastIndex" | "RegExp.lastMatch" | "RegExp.lastParen" | "RegExp.leftContext" | "RegExp.n" | "RegExp.rightContext" | "Set" | "SharedArrayBuffer" | "String" | "String.fromCharCode" | "String.fromCodePoint" | "String.length" | "String.localeCompare" | "String.raw" | "String.toLocaleLowerCase" | "String.toLocaleUpperCase" | "Symbol" | "Symbol.asyncIterator" | "Symbol.for" | "Symbol.hasInstance" | "Symbol.isConcatSpreadable" | "Symbol.iterator" | "Symbol.keyFor" | "Symbol.match" | "Symbol.matchAll" | "Symbol.replace" | "Symbol.search" | "Symbol.species" | "Symbol.split" | "Symbol.toPrimitive" | "Symbol.toStringTag" | "Symbol.unscopables" | "SyntaxError" | "TypeError" | "URIError" | "Uint16Array" | "Uint16Array.BYTES_PER_ELEMENT" | "Uint16Array.from" | "Uint16Array.name" | "Uint16Array.of" | "Uint32Array" | "Uint32Array.BYTES_PER_ELEMENT" | "Uint32Array.from" | "Uint32Array.name" | "Uint32Array.of" | "Uint8Array" | "Uint8Array.BYTES_PER_ELEMENT" | "Uint8Array.from" | "Uint8Array.name" | "Uint8Array.of" | "Uint8ClampedArray" | "Uint8ClampedArray.BYTES_PER_ELEMENT" | "Uint8ClampedArray.from" | "Uint8ClampedArray.name" | "Uint8ClampedArray.of" | "WeakMap" | "WeakRef" | "WeakSet" | "decodeURI" | "decodeURIComponent" | "encodeURI" | "encodeURIComponent" | "escape" | "eval" | "globalThis" | "isFinite" | "isNaN" | "parseFloat" | "parseInt" | "unescape")[]
}]
// ----- node/no-unsupported-features/es-syntax -----
type NodeNoUnsupportedFeaturesEsSyntax = []|[{
  version?: string
  ignores?: ("no-accessor-properties" | "accessor-properties" | "accessorProperties" | "no-arbitrary-module-namespace-names" | "arbitrary-module-namespace-names" | "arbitraryModuleNamespaceNames" | "no-array-from" | "array-from" | "arrayFrom" | "no-array-isarray" | "array-isarray" | "arrayIsarray" | "no-array-of" | "array-of" | "arrayOf" | "no-array-prototype-copywithin" | "array-prototype-copywithin" | "arrayPrototypeCopywithin" | "no-array-prototype-entries" | "array-prototype-entries" | "arrayPrototypeEntries" | "no-array-prototype-every" | "array-prototype-every" | "arrayPrototypeEvery" | "no-array-prototype-fill" | "array-prototype-fill" | "arrayPrototypeFill" | "no-array-prototype-filter" | "array-prototype-filter" | "arrayPrototypeFilter" | "no-array-prototype-find" | "array-prototype-find" | "arrayPrototypeFind" | "no-array-prototype-findindex" | "array-prototype-findindex" | "arrayPrototypeFindindex" | "no-array-prototype-findlast-findlastindex" | "array-prototype-findlast-findlastindex" | "arrayPrototypeFindlastFindlastindex" | "no-array-prototype-flat" | "array-prototype-flat" | "arrayPrototypeFlat" | "no-array-prototype-foreach" | "array-prototype-foreach" | "arrayPrototypeForeach" | "no-array-prototype-includes" | "array-prototype-includes" | "arrayPrototypeIncludes" | "no-array-prototype-indexof" | "array-prototype-indexof" | "arrayPrototypeIndexof" | "no-array-prototype-keys" | "array-prototype-keys" | "arrayPrototypeKeys" | "no-array-prototype-lastindexof" | "array-prototype-lastindexof" | "arrayPrototypeLastindexof" | "no-array-prototype-map" | "array-prototype-map" | "arrayPrototypeMap" | "no-array-prototype-reduce" | "array-prototype-reduce" | "arrayPrototypeReduce" | "no-array-prototype-reduceright" | "array-prototype-reduceright" | "arrayPrototypeReduceright" | "no-array-prototype-some" | "array-prototype-some" | "arrayPrototypeSome" | "no-array-prototype-toreversed" | "array-prototype-toreversed" | "arrayPrototypeToreversed" | "no-array-prototype-tosorted" | "array-prototype-tosorted" | "arrayPrototypeTosorted" | "no-array-prototype-tospliced" | "array-prototype-tospliced" | "arrayPrototypeTospliced" | "no-array-prototype-values" | "array-prototype-values" | "arrayPrototypeValues" | "no-array-prototype-with" | "array-prototype-with" | "arrayPrototypeWith" | "no-array-string-prototype-at" | "array-string-prototype-at" | "arrayStringPrototypeAt" | "no-arrow-functions" | "arrow-functions" | "arrowFunctions" | "no-async-functions" | "async-functions" | "asyncFunctions" | "no-async-iteration" | "async-iteration" | "asyncIteration" | "no-atomics-waitasync" | "atomics-waitasync" | "atomicsWaitasync" | "no-atomics" | "atomics" | "no-bigint" | "bigint" | "no-binary-numeric-literals" | "binary-numeric-literals" | "binaryNumericLiterals" | "no-block-scoped-functions" | "block-scoped-functions" | "blockScopedFunctions" | "no-block-scoped-variables" | "block-scoped-variables" | "blockScopedVariables" | "no-class-fields" | "class-fields" | "classFields" | "no-class-static-block" | "class-static-block" | "classStaticBlock" | "no-classes" | "classes" | "no-computed-properties" | "computed-properties" | "computedProperties" | "no-date-now" | "date-now" | "dateNow" | "no-date-prototype-getyear-setyear" | "date-prototype-getyear-setyear" | "datePrototypeGetyearSetyear" | "no-date-prototype-togmtstring" | "date-prototype-togmtstring" | "datePrototypeTogmtstring" | "no-default-parameters" | "default-parameters" | "defaultParameters" | "no-destructuring" | "destructuring" | "no-dynamic-import" | "dynamic-import" | "dynamicImport" | "no-error-cause" | "error-cause" | "errorCause" | "no-escape-unescape" | "escape-unescape" | "escapeUnescape" | "no-exponential-operators" | "exponential-operators" | "exponentialOperators" | "no-export-ns-from" | "export-ns-from" | "exportNsFrom" | "no-for-of-loops" | "for-of-loops" | "forOfLoops" | "no-function-declarations-in-if-statement-clauses-without-block" | "function-declarations-in-if-statement-clauses-without-block" | "functionDeclarationsInIfStatementClausesWithoutBlock" | "no-function-prototype-bind" | "function-prototype-bind" | "functionPrototypeBind" | "no-generators" | "generators" | "no-global-this" | "global-this" | "globalThis" | "no-hashbang" | "hashbang" | "no-import-meta" | "import-meta" | "importMeta" | "no-initializers-in-for-in" | "initializers-in-for-in" | "initializersInForIn" | "no-intl-datetimeformat-prototype-formatrange" | "intl-datetimeformat-prototype-formatrange" | "intlDatetimeformatPrototypeFormatrange" | "no-intl-datetimeformat-prototype-formattoparts" | "intl-datetimeformat-prototype-formattoparts" | "intlDatetimeformatPrototypeFormattoparts" | "no-intl-displaynames" | "intl-displaynames" | "intlDisplaynames" | "no-intl-getcanonicallocales" | "intl-getcanonicallocales" | "intlGetcanonicallocales" | "no-intl-listformat" | "intl-listformat" | "intlListformat" | "no-intl-locale" | "intl-locale" | "intlLocale" | "no-intl-numberformat-prototype-formatrange" | "intl-numberformat-prototype-formatrange" | "intlNumberformatPrototypeFormatrange" | "no-intl-numberformat-prototype-formatrangetoparts" | "intl-numberformat-prototype-formatrangetoparts" | "intlNumberformatPrototypeFormatrangetoparts" | "no-intl-numberformat-prototype-formattoparts" | "intl-numberformat-prototype-formattoparts" | "intlNumberformatPrototypeFormattoparts" | "no-intl-pluralrules-prototype-selectrange" | "intl-pluralrules-prototype-selectrange" | "intlPluralrulesPrototypeSelectrange" | "no-intl-pluralrules" | "intl-pluralrules" | "intlPluralrules" | "no-intl-relativetimeformat" | "intl-relativetimeformat" | "intlRelativetimeformat" | "no-intl-segmenter" | "intl-segmenter" | "intlSegmenter" | "no-intl-supportedvaluesof" | "intl-supportedvaluesof" | "intlSupportedvaluesof" | "no-json-superset" | "json-superset" | "jsonSuperset" | "no-json" | "json" | "no-keyword-properties" | "keyword-properties" | "keywordProperties" | "no-labelled-function-declarations" | "labelled-function-declarations" | "labelledFunctionDeclarations" | "no-legacy-object-prototype-accessor-methods" | "legacy-object-prototype-accessor-methods" | "legacyObjectPrototypeAccessorMethods" | "no-logical-assignment-operators" | "logical-assignment-operators" | "logicalAssignmentOperators" | "no-malformed-template-literals" | "malformed-template-literals" | "malformedTemplateLiterals" | "no-map" | "map" | "no-math-acosh" | "math-acosh" | "mathAcosh" | "no-math-asinh" | "math-asinh" | "mathAsinh" | "no-math-atanh" | "math-atanh" | "mathAtanh" | "no-math-cbrt" | "math-cbrt" | "mathCbrt" | "no-math-clz32" | "math-clz32" | "mathClz32" | "no-math-cosh" | "math-cosh" | "mathCosh" | "no-math-expm1" | "math-expm1" | "mathExpm1" | "no-math-fround" | "math-fround" | "mathFround" | "no-math-hypot" | "math-hypot" | "mathHypot" | "no-math-imul" | "math-imul" | "mathImul" | "no-math-log10" | "math-log10" | "mathLog10" | "no-math-log1p" | "math-log1p" | "mathLog1p" | "no-math-log2" | "math-log2" | "mathLog2" | "no-math-sign" | "math-sign" | "mathSign" | "no-math-sinh" | "math-sinh" | "mathSinh" | "no-math-tanh" | "math-tanh" | "mathTanh" | "no-math-trunc" | "math-trunc" | "mathTrunc" | "no-modules" | "modules" | "no-new-target" | "new-target" | "newTarget" | "new.target" | "no-nullish-coalescing-operators" | "nullish-coalescing-operators" | "nullishCoalescingOperators" | "no-number-epsilon" | "number-epsilon" | "numberEpsilon" | "no-number-isfinite" | "number-isfinite" | "numberIsfinite" | "no-number-isinteger" | "number-isinteger" | "numberIsinteger" | "no-number-isnan" | "number-isnan" | "numberIsnan" | "no-number-issafeinteger" | "number-issafeinteger" | "numberIssafeinteger" | "no-number-maxsafeinteger" | "number-maxsafeinteger" | "numberMaxsafeinteger" | "no-number-minsafeinteger" | "number-minsafeinteger" | "numberMinsafeinteger" | "no-number-parsefloat" | "number-parsefloat" | "numberParsefloat" | "no-number-parseint" | "number-parseint" | "numberParseint" | "no-numeric-separators" | "numeric-separators" | "numericSeparators" | "no-object-assign" | "object-assign" | "objectAssign" | "no-object-create" | "object-create" | "objectCreate" | "no-object-defineproperties" | "object-defineproperties" | "objectDefineproperties" | "no-object-defineproperty" | "object-defineproperty" | "objectDefineproperty" | "no-object-entries" | "object-entries" | "objectEntries" | "no-object-freeze" | "object-freeze" | "objectFreeze" | "no-object-fromentries" | "object-fromentries" | "objectFromentries" | "no-object-getownpropertydescriptor" | "object-getownpropertydescriptor" | "objectGetownpropertydescriptor" | "no-object-getownpropertydescriptors" | "object-getownpropertydescriptors" | "objectGetownpropertydescriptors" | "no-object-getownpropertynames" | "object-getownpropertynames" | "objectGetownpropertynames" | "no-object-getownpropertysymbols" | "object-getownpropertysymbols" | "objectGetownpropertysymbols" | "no-object-getprototypeof" | "object-getprototypeof" | "objectGetprototypeof" | "no-object-hasown" | "object-hasown" | "objectHasown" | "no-object-is" | "object-is" | "objectIs" | "no-object-isextensible" | "object-isextensible" | "objectIsextensible" | "no-object-isfrozen" | "object-isfrozen" | "objectIsfrozen" | "no-object-issealed" | "object-issealed" | "objectIssealed" | "no-object-keys" | "object-keys" | "objectKeys" | "no-object-map-groupby" | "object-map-groupby" | "objectMapGroupby" | "no-object-preventextensions" | "object-preventextensions" | "objectPreventextensions" | "no-object-seal" | "object-seal" | "objectSeal" | "no-object-setprototypeof" | "object-setprototypeof" | "objectSetprototypeof" | "no-object-super-properties" | "object-super-properties" | "objectSuperProperties" | "no-object-values" | "object-values" | "objectValues" | "no-octal-numeric-literals" | "octal-numeric-literals" | "octalNumericLiterals" | "no-optional-catch-binding" | "optional-catch-binding" | "optionalCatchBinding" | "no-optional-chaining" | "optional-chaining" | "optionalChaining" | "no-private-in" | "private-in" | "privateIn" | "no-promise-all-settled" | "promise-all-settled" | "promiseAllSettled" | "no-promise-any" | "promise-any" | "promiseAny" | "no-promise-prototype-finally" | "promise-prototype-finally" | "promisePrototypeFinally" | "no-promise-withresolvers" | "promise-withresolvers" | "promiseWithresolvers" | "no-promise" | "promise" | "no-property-shorthands" | "property-shorthands" | "propertyShorthands" | "no-proxy" | "proxy" | "no-reflect" | "reflect" | "no-regexp-d-flag" | "regexp-d-flag" | "regexpDFlag" | "no-regexp-lookbehind-assertions" | "regexp-lookbehind-assertions" | "regexpLookbehindAssertions" | "regexpLookbehind" | "no-regexp-named-capture-groups" | "regexp-named-capture-groups" | "regexpNamedCaptureGroups" | "no-regexp-prototype-compile" | "regexp-prototype-compile" | "regexpPrototypeCompile" | "no-regexp-prototype-flags" | "regexp-prototype-flags" | "regexpPrototypeFlags" | "no-regexp-s-flag" | "regexp-s-flag" | "regexpSFlag" | "regexpS" | "no-regexp-u-flag" | "regexp-u-flag" | "regexpUFlag" | "regexpU" | "no-regexp-unicode-property-escapes-2019" | "regexp-unicode-property-escapes-2019" | "regexpUnicodePropertyEscapes2019" | "no-regexp-unicode-property-escapes-2020" | "regexp-unicode-property-escapes-2020" | "regexpUnicodePropertyEscapes2020" | "no-regexp-unicode-property-escapes-2021" | "regexp-unicode-property-escapes-2021" | "regexpUnicodePropertyEscapes2021" | "no-regexp-unicode-property-escapes-2022" | "regexp-unicode-property-escapes-2022" | "regexpUnicodePropertyEscapes2022" | "no-regexp-unicode-property-escapes-2023" | "regexp-unicode-property-escapes-2023" | "regexpUnicodePropertyEscapes2023" | "no-regexp-unicode-property-escapes" | "regexp-unicode-property-escapes" | "regexpUnicodePropertyEscapes" | "regexpUnicodeProperties" | "no-regexp-v-flag" | "regexp-v-flag" | "regexpVFlag" | "no-regexp-y-flag" | "regexp-y-flag" | "regexpYFlag" | "regexpY" | "no-resizable-and-growable-arraybuffers" | "resizable-and-growable-arraybuffers" | "resizableAndGrowableArraybuffers" | "no-rest-parameters" | "rest-parameters" | "restParameters" | "no-rest-spread-properties" | "rest-spread-properties" | "restSpreadProperties" | "no-set" | "set" | "no-shadow-catch-param" | "shadow-catch-param" | "shadowCatchParam" | "no-shared-array-buffer" | "shared-array-buffer" | "sharedArrayBuffer" | "no-spread-elements" | "spread-elements" | "spreadElements" | "no-string-create-html-methods" | "string-create-html-methods" | "stringCreateHtmlMethods" | "no-string-fromcodepoint" | "string-fromcodepoint" | "stringFromcodepoint" | "no-string-prototype-codepointat" | "string-prototype-codepointat" | "stringPrototypeCodepointat" | "no-string-prototype-endswith" | "string-prototype-endswith" | "stringPrototypeEndswith" | "no-string-prototype-includes" | "string-prototype-includes" | "stringPrototypeIncludes" | "no-string-prototype-iswellformed-towellformed" | "string-prototype-iswellformed-towellformed" | "stringPrototypeIswellformedTowellformed" | "no-string-prototype-matchall" | "string-prototype-matchall" | "stringPrototypeMatchall" | "no-string-prototype-normalize" | "string-prototype-normalize" | "stringPrototypeNormalize" | "no-string-prototype-padstart-padend" | "string-prototype-padstart-padend" | "stringPrototypePadstartPadend" | "no-string-prototype-repeat" | "string-prototype-repeat" | "stringPrototypeRepeat" | "no-string-prototype-replaceall" | "string-prototype-replaceall" | "stringPrototypeReplaceall" | "no-string-prototype-startswith" | "string-prototype-startswith" | "stringPrototypeStartswith" | "no-string-prototype-substr" | "string-prototype-substr" | "stringPrototypeSubstr" | "no-string-prototype-trim" | "string-prototype-trim" | "stringPrototypeTrim" | "no-string-prototype-trimleft-trimright" | "string-prototype-trimleft-trimright" | "stringPrototypeTrimleftTrimright" | "no-string-prototype-trimstart-trimend" | "string-prototype-trimstart-trimend" | "stringPrototypeTrimstartTrimend" | "no-string-raw" | "string-raw" | "stringRaw" | "no-subclassing-builtins" | "subclassing-builtins" | "subclassingBuiltins" | "no-symbol-prototype-description" | "symbol-prototype-description" | "symbolPrototypeDescription" | "no-symbol" | "symbol" | "no-template-literals" | "template-literals" | "templateLiterals" | "no-top-level-await" | "top-level-await" | "topLevelAwait" | "no-trailing-commas" | "trailing-commas" | "trailingCommas" | "no-trailing-function-commas" | "trailing-function-commas" | "trailingFunctionCommas" | "trailingCommasInFunctions" | "no-typed-arrays" | "typed-arrays" | "typedArrays" | "no-unicode-codepoint-escapes" | "unicode-codepoint-escapes" | "unicodeCodepointEscapes" | "unicodeCodePointEscapes" | "no-weak-map" | "weak-map" | "weakMap" | "no-weak-set" | "weak-set" | "weakSet" | "no-weakrefs" | "weakrefs")[]
}]
// ----- node/no-unsupported-features/node-builtins -----
type NodeNoUnsupportedFeaturesNodeBuiltins = []|[{
  version?: string
  allowExperimental?: boolean
  ignores?: ("__filename" | "__dirname" | "require" | "require.cache" | "require.extensions" | "require.main" | "require.resolve" | "require.resolve.paths" | "module" | "module.children" | "module.exports" | "module.filename" | "module.id" | "module.isPreloading" | "module.loaded" | "module.parent" | "module.path" | "module.paths" | "module.require" | "exports" | "AbortController" | "AbortSignal" | "AbortSignal.abort" | "AbortSignal.timeout" | "AbortSignal.any" | "DOMException" | "FormData" | "Headers" | "MessageEvent" | "Navigator" | "Request" | "Response" | "WebAssembly" | "WebSocket" | "fetch" | "global" | "queueMicrotask" | "navigator" | "navigator.hardwareConcurrency" | "navigator.language" | "navigator.languages" | "navigator.platform" | "navigator.userAgent" | "structuredClone" | "localStorage" | "sessionStorage" | "Storage" | "Blob" | "new Buffer()" | "Buffer" | "Buffer.alloc" | "Buffer.allocUnsafe" | "Buffer.allocUnsafeSlow" | "Buffer.byteLength" | "Buffer.compare" | "Buffer.concat" | "Buffer.copyBytesFrom" | "Buffer.from" | "Buffer.isBuffer" | "Buffer.isEncoding" | "File" | "atob" | "btoa" | "console" | "console.profile" | "console.profileEnd" | "console.timeStamp" | "console.Console" | "console.assert" | "console.clear" | "console.count" | "console.countReset" | "console.debug" | "console.dir" | "console.dirxml" | "console.error" | "console.group" | "console.groupCollapsed" | "console.groupEnd" | "console.info" | "console.log" | "console.table" | "console.time" | "console.timeEnd" | "console.timeLog" | "console.trace" | "console.warn" | "crypto" | "crypto.subtle" | "crypto.subtle.decrypt" | "crypto.subtle.deriveBits" | "crypto.subtle.deriveKey" | "crypto.subtle.digest" | "crypto.subtle.encrypt" | "crypto.subtle.exportKey" | "crypto.subtle.generateKey" | "crypto.subtle.importKey" | "crypto.subtle.sign" | "crypto.subtle.unwrapKey" | "crypto.subtle.verify" | "crypto.subtle.wrapKey" | "crypto.getRandomValues" | "crypto.randomUUID" | "Crypto" | "CryptoKey" | "SubtleCrypto" | "CloseEvent" | "CustomEvent" | "Event" | "EventSource" | "EventTarget" | "PerformanceEntry" | "PerformanceMark" | "PerformanceMeasure" | "PerformanceObserver" | "PerformanceObserverEntryList" | "PerformanceResourceTiming" | "performance" | "performance.clearMarks" | "performance.clearMeasures" | "performance.clearResourceTimings" | "performance.eventLoopUtilization" | "performance.getEntries" | "performance.getEntriesByName" | "performance.getEntriesByType" | "performance.mark" | "performance.markResourceTiming" | "performance.measure" | "performance.nodeTiming" | "performance.nodeTiming.bootstrapComplete" | "performance.nodeTiming.environment" | "performance.nodeTiming.idleTime" | "performance.nodeTiming.loopExit" | "performance.nodeTiming.loopStart" | "performance.nodeTiming.nodeStart" | "performance.nodeTiming.uvMetricsInfo" | "performance.nodeTiming.v8Start" | "performance.now" | "performance.onresourcetimingbufferfull" | "performance.setResourceTimingBufferSize" | "performance.timeOrigin" | "performance.timerify" | "performance.toJSON" | "process" | "process.allowedNodeEnvironmentFlags" | "process.availableMemory" | "process.arch" | "process.argv" | "process.argv0" | "process.channel" | "process.config" | "process.connected" | "process.debugPort" | "process.env" | "process.execArgv" | "process.execPath" | "process.execve" | "process.exitCode" | "process.features.cached_builtins" | "process.features.debug" | "process.features.inspector" | "process.features.ipv6" | "process.features.require_module" | "process.features.tls" | "process.features.tls_alpn" | "process.features.tls_ocsp" | "process.features.tls_sni" | "process.features.typescript" | "process.features.uv" | "process.finalization.register" | "process.finalization.registerBeforeExit" | "process.finalization.unregister" | "process.getBuiltinModule" | "process.mainModule" | "process.noDeprecation" | "process.permission" | "process.pid" | "process.platform" | "process.ppid" | "process.ref" | "process.release" | "process.report" | "process.report.excludeEnv" | "process.sourceMapsEnabled" | "process.stdin" | "process.stdin.isRaw" | "process.stdin.isTTY" | "process.stdin.setRawMode" | "process.stdout" | "process.stdout.clearLine" | "process.stdout.clearScreenDown" | "process.stdout.columns" | "process.stdout.cursorTo" | "process.stdout.getColorDepth" | "process.stdout.getWindowSize" | "process.stdout.hasColors" | "process.stdout.isTTY" | "process.stdout.moveCursor" | "process.stdout.rows" | "process.stderr" | "process.stderr.clearLine" | "process.stderr.clearScreenDown" | "process.stderr.columns" | "process.stderr.cursorTo" | "process.stderr.getColorDepth" | "process.stderr.getWindowSize" | "process.stderr.hasColors" | "process.stderr.isTTY" | "process.stderr.moveCursor" | "process.stderr.rows" | "process.threadCpuUsage" | "process.throwDeprecation" | "process.title" | "process.traceDeprecation" | "process.version" | "process.versions" | "process.abort" | "process.chdir" | "process.constrainedMemory" | "process.cpuUsage" | "process.cwd" | "process.disconnect" | "process.dlopen" | "process.emitWarning" | "process.exit" | "process.getActiveResourcesInfo" | "process.getegid" | "process.geteuid" | "process.getgid" | "process.getgroups" | "process.getuid" | "process.hasUncaughtExceptionCaptureCallback" | "process.hrtime" | "process.hrtime.bigint" | "process.initgroups" | "process.kill" | "process.loadEnvFile" | "process.memoryUsage" | "process.rss" | "process.nextTick" | "process.resourceUsage" | "process.send" | "process.setegid" | "process.seteuid" | "process.setgid" | "process.setgroups" | "process.setuid" | "process.setSourceMapsEnabled" | "process.setUncaughtExceptionCaptureCallback" | "process.umask" | "process.unref" | "process.uptime" | "ReadableStream" | "ReadableStream.from" | "ReadableStreamDefaultReader" | "ReadableStreamBYOBReader" | "ReadableStreamDefaultController" | "ReadableByteStreamController" | "ReadableStreamBYOBRequest" | "WritableStream" | "WritableStreamDefaultWriter" | "WritableStreamDefaultController" | "TransformStream" | "TransformStreamDefaultController" | "ByteLengthQueuingStrategy" | "CountQueuingStrategy" | "TextEncoderStream" | "TextDecoderStream" | "CompressionStream" | "DecompressionStream" | "setInterval" | "clearInterval" | "setTimeout" | "clearTimeout" | "setImmediate" | "clearImmediate" | "URL" | "URL.canParse" | "URL.createObjectURL" | "URL.revokeObjectURL" | "URLSearchParams" | "TextDecoder" | "TextEncoder" | "BroadcastChannel" | "MessageChannel" | "MessagePort" | "assert" | "assert.Assert" | "assert.assert" | "assert.deepEqual" | "assert.deepStrictEqual" | "assert.doesNotMatch" | "assert.doesNotReject" | "assert.doesNotThrow" | "assert.equal" | "assert.fail" | "assert.ifError" | "assert.match" | "assert.notDeepEqual" | "assert.notDeepStrictEqual" | "assert.notEqual" | "assert.notStrictEqual" | "assert.ok" | "assert.partialDeepStrictEqual" | "assert.rejects" | "assert.strictEqual" | "assert.throws" | "assert.CallTracker" | "assert.strict" | "assert.strict.Assert" | "assert.strict.assert" | "assert.strict.deepEqual" | "assert.strict.deepStrictEqual" | "assert.strict.doesNotMatch" | "assert.strict.doesNotReject" | "assert.strict.doesNotThrow" | "assert.strict.equal" | "assert.strict.fail" | "assert.strict.ifError" | "assert.strict.match" | "assert.strict.notDeepEqual" | "assert.strict.notDeepStrictEqual" | "assert.strict.notEqual" | "assert.strict.notStrictEqual" | "assert.strict.ok" | "assert.strict.partialDeepStrictEqual" | "assert.strict.rejects" | "assert.strict.strictEqual" | "assert.strict.throws" | "assert.strict.CallTracker" | "assert/strict" | "assert/strict.Assert" | "assert/strict.assert" | "assert/strict.deepEqual" | "assert/strict.deepStrictEqual" | "assert/strict.doesNotMatch" | "assert/strict.doesNotReject" | "assert/strict.doesNotThrow" | "assert/strict.equal" | "assert/strict.fail" | "assert/strict.ifError" | "assert/strict.match" | "assert/strict.notDeepEqual" | "assert/strict.notDeepStrictEqual" | "assert/strict.notEqual" | "assert/strict.notStrictEqual" | "assert/strict.ok" | "assert/strict.partialDeepStrictEqual" | "assert/strict.rejects" | "assert/strict.strictEqual" | "assert/strict.throws" | "assert/strict.CallTracker" | "async_hooks" | "async_hooks.createHook" | "async_hooks.executionAsyncResource" | "async_hooks.executionAsyncId" | "async_hooks.triggerAsyncId" | "async_hooks.AsyncLocalStorage" | "async_hooks.AsyncLocalStorage.bind" | "async_hooks.AsyncLocalStorage.snapshot" | "async_hooks.AsyncResource" | "async_hooks.AsyncResource.bind" | "buffer" | "buffer.constants" | "buffer.INSPECT_MAX_BYTES" | "buffer.kMaxLength" | "buffer.kStringMaxLength" | "buffer.atob" | "buffer.btoa" | "buffer.isAscii" | "buffer.isUtf8" | "buffer.resolveObjectURL" | "buffer.transcode" | "buffer.SlowBuffer" | "buffer.Blob" | "new buffer.Buffer()" | "buffer.Buffer" | "buffer.Buffer.alloc" | "buffer.Buffer.allocUnsafe" | "buffer.Buffer.allocUnsafeSlow" | "buffer.Buffer.byteLength" | "buffer.Buffer.compare" | "buffer.Buffer.concat" | "buffer.Buffer.copyBytesFrom" | "buffer.Buffer.from" | "buffer.Buffer.isBuffer" | "buffer.Buffer.isEncoding" | "buffer.File" | "child_process" | "child_process.exec" | "child_process.execFile" | "child_process.fork" | "child_process.spawn" | "child_process.execFileSync" | "child_process.execSync" | "child_process.spawnSync" | "child_process.ChildProcess" | "cluster" | "cluster.isMaster" | "cluster.isPrimary" | "cluster.isWorker" | "cluster.schedulingPolicy" | "cluster.settings" | "cluster.worker" | "cluster.workers" | "cluster.disconnect" | "cluster.fork" | "cluster.setupMaster" | "cluster.setupPrimary" | "cluster.Worker" | "crypto.constants" | "crypto.fips" | "crypto.webcrypto" | "crypto.webcrypto.subtle" | "crypto.webcrypto.subtle.decrypt" | "crypto.webcrypto.subtle.deriveBits" | "crypto.webcrypto.subtle.deriveKey" | "crypto.webcrypto.subtle.digest" | "crypto.webcrypto.subtle.encrypt" | "crypto.webcrypto.subtle.exportKey" | "crypto.webcrypto.subtle.generateKey" | "crypto.webcrypto.subtle.importKey" | "crypto.webcrypto.subtle.sign" | "crypto.webcrypto.subtle.unwrapKey" | "crypto.webcrypto.subtle.verify" | "crypto.webcrypto.subtle.wrapKey" | "crypto.webcrypto.getRandomValues" | "crypto.webcrypto.randomUUID" | "crypto.checkPrime" | "crypto.checkPrimeSync" | "crypto.createCipher" | "crypto.createCipheriv" | "crypto.createDecipher" | "crypto.createDecipheriv" | "crypto.createDiffieHellman" | "crypto.createDiffieHellmanGroup" | "crypto.createECDH" | "crypto.createHash" | "crypto.createHmac" | "crypto.createPrivateKey" | "crypto.createPublicKey" | "crypto.createSecretKey" | "crypto.createSign" | "crypto.createVerify" | "crypto.diffieHellman" | "crypto.generateKey" | "crypto.generateKeyPair" | "crypto.generateKeyPairSync" | "crypto.generateKeySync" | "crypto.generatePrime" | "crypto.generatePrimeSync" | "crypto.getCipherInfo" | "crypto.getCiphers" | "crypto.getCurves" | "crypto.getDiffieHellman" | "crypto.getFips" | "crypto.getHashes" | "crypto.hash" | "crypto.hkdf" | "crypto.hkdfSync" | "crypto.pbkdf2" | "crypto.pbkdf2Sync" | "crypto.privateDecrypt" | "crypto.privateEncrypt" | "crypto.publicDecrypt" | "crypto.publicEncrypt" | "crypto.randomBytes" | "crypto.randomFillSync" | "crypto.randomFill" | "crypto.randomInt" | "crypto.scrypt" | "crypto.scryptSync" | "crypto.secureHeapUsed" | "crypto.setEngine" | "crypto.setFips" | "crypto.sign" | "crypto.timingSafeEqual" | "crypto.verify" | "crypto.Certificate" | "crypto.Certificate.exportChallenge" | "crypto.Certificate.exportPublicKey" | "crypto.Certificate.verifySpkac" | "crypto.Cipher" | "crypto.Decipher" | "crypto.DiffieHellman" | "crypto.DiffieHellmanGroup" | "crypto.ECDH" | "crypto.ECDH.convertKey" | "crypto.Hash()" | "new crypto.Hash()" | "crypto.Hash" | "crypto.Hmac()" | "new crypto.Hmac()" | "crypto.Hmac" | "crypto.KeyObject" | "crypto.KeyObject.from" | "crypto.Sign" | "crypto.Verify" | "crypto.X509Certificate" | "dgram" | "dgram.createSocket" | "dgram.Socket" | "diagnostics_channel" | "diagnostics_channel.hasSubscribers" | "diagnostics_channel.channel" | "diagnostics_channel.subscribe" | "diagnostics_channel.unsubscribe" | "diagnostics_channel.tracingChannel" | "diagnostics_channel.Channel" | "diagnostics_channel.TracingChannel" | "dns" | "dns.Resolver" | "dns.getServers" | "dns.lookup" | "dns.lookupService" | "dns.resolve" | "dns.resolve4" | "dns.resolve6" | "dns.resolveAny" | "dns.resolveCname" | "dns.resolveCaa" | "dns.resolveMx" | "dns.resolveNaptr" | "dns.resolveNs" | "dns.resolvePtr" | "dns.resolveSoa" | "dns.resolveSrv" | "dns.resolveTlsa" | "dns.resolveTxt" | "dns.reverse" | "dns.setDefaultResultOrder" | "dns.getDefaultResultOrder" | "dns.setServers" | "dns.promises" | "dns.promises.Resolver" | "dns.promises.cancel" | "dns.promises.getServers" | "dns.promises.lookup" | "dns.promises.lookupService" | "dns.promises.resolve" | "dns.promises.resolve4" | "dns.promises.resolve6" | "dns.promises.resolveAny" | "dns.promises.resolveCaa" | "dns.promises.resolveCname" | "dns.promises.resolveMx" | "dns.promises.resolveNaptr" | "dns.promises.resolveNs" | "dns.promises.resolvePtr" | "dns.promises.resolveSoa" | "dns.promises.resolveSrv" | "dns.promises.resolveTlsa" | "dns.promises.resolveTxt" | "dns.promises.reverse" | "dns.promises.setDefaultResultOrder" | "dns.promises.getDefaultResultOrder" | "dns.promises.setServers" | "dns/promises" | "dns/promises.Resolver" | "dns/promises.cancel" | "dns/promises.getServers" | "dns/promises.lookup" | "dns/promises.lookupService" | "dns/promises.resolve" | "dns/promises.resolve4" | "dns/promises.resolve6" | "dns/promises.resolveAny" | "dns/promises.resolveCaa" | "dns/promises.resolveCname" | "dns/promises.resolveMx" | "dns/promises.resolveNaptr" | "dns/promises.resolveNs" | "dns/promises.resolvePtr" | "dns/promises.resolveSoa" | "dns/promises.resolveSrv" | "dns/promises.resolveTlsa" | "dns/promises.resolveTxt" | "dns/promises.reverse" | "dns/promises.setDefaultResultOrder" | "dns/promises.getDefaultResultOrder" | "dns/promises.setServers" | "domain" | "domain.create" | "domain.Domain" | "events" | "events.Event" | "events.EventTarget" | "events.CustomEvent" | "events.NodeEventTarget" | "events.EventEmitter" | "events.EventEmitter.defaultMaxListeners" | "events.EventEmitter.errorMonitor" | "events.EventEmitter.captureRejections" | "events.EventEmitter.captureRejectionSymbol" | "events.EventEmitter.getEventListeners" | "events.EventEmitter.getMaxListeners" | "events.EventEmitter.once" | "events.EventEmitter.listenerCount" | "events.EventEmitter.on" | "events.EventEmitter.setMaxListeners" | "events.EventEmitter.addAbortListener" | "events.EventEmitterAsyncResource" | "events.EventEmitterAsyncResource.defaultMaxListeners" | "events.EventEmitterAsyncResource.errorMonitor" | "events.EventEmitterAsyncResource.captureRejections" | "events.EventEmitterAsyncResource.captureRejectionSymbol" | "events.EventEmitterAsyncResource.getEventListeners" | "events.EventEmitterAsyncResource.getMaxListeners" | "events.EventEmitterAsyncResource.once" | "events.EventEmitterAsyncResource.listenerCount" | "events.EventEmitterAsyncResource.on" | "events.EventEmitterAsyncResource.setMaxListeners" | "events.EventEmitterAsyncResource.addAbortListener" | "events.defaultMaxListeners" | "events.errorMonitor" | "events.captureRejections" | "events.captureRejectionSymbol" | "events.getEventListeners" | "events.getMaxListeners" | "events.once" | "events.listenerCount" | "events.on" | "events.setMaxListeners" | "events.addAbortListener" | "fs" | "fs.promises" | "fs.promises.FileHandle" | "fs.promises.access" | "fs.promises.appendFile" | "fs.promises.chmod" | "fs.promises.chown" | "fs.promises.constants" | "fs.promises.copyFile" | "fs.promises.cp" | "fs.promises.glob" | "fs.promises.lchmod" | "fs.promises.lchown" | "fs.promises.link" | "fs.promises.lstat" | "fs.promises.lutimes" | "fs.promises.mkdir" | "fs.promises.mkdtemp" | "fs.promises.open" | "fs.promises.opendir" | "fs.promises.readFile" | "fs.promises.readdir" | "fs.promises.readlink" | "fs.promises.realpath" | "fs.promises.rename" | "fs.promises.rm" | "fs.promises.rmdir" | "fs.promises.stat" | "fs.promises.statfs" | "fs.promises.symlink" | "fs.promises.truncate" | "fs.promises.unlink" | "fs.promises.utimes" | "fs.promises.watch" | "fs.promises.writeFile" | "fs.access" | "fs.appendFile" | "fs.chmod" | "fs.chown" | "fs.close" | "fs.copyFile" | "fs.cp" | "fs.createReadStream" | "fs.createWriteStream" | "fs.exists" | "fs.fchmod" | "fs.fchown" | "fs.fdatasync" | "fs.fstat" | "fs.fsync" | "fs.ftruncate" | "fs.futimes" | "fs.glob" | "fs.lchmod" | "fs.lchown" | "fs.link" | "fs.lstat" | "fs.lutimes" | "fs.mkdir" | "fs.mkdtemp" | "fs.native" | "fs.open" | "fs.openAsBlob" | "fs.opendir" | "fs.read" | "fs.readdir" | "fs.readFile" | "fs.readlink" | "fs.readv" | "fs.realpath" | "fs.realpath.native" | "fs.rename" | "fs.rm" | "fs.rmdir" | "fs.stat" | "fs.statfs" | "fs.symlink" | "fs.truncate" | "fs.unlink" | "fs.unwatchFile" | "fs.utimes" | "fs.watch" | "fs.watchFile" | "fs.write" | "fs.writeFile" | "fs.writev" | "fs.accessSync" | "fs.appendFileSync" | "fs.chmodSync" | "fs.chownSync" | "fs.closeSync" | "fs.copyFileSync" | "fs.cpSync" | "fs.existsSync" | "fs.fchmodSync" | "fs.fchownSync" | "fs.fdatasyncSync" | "fs.fstatSync" | "fs.fsyncSync" | "fs.ftruncateSync" | "fs.futimesSync" | "fs.globSync" | "fs.lchmodSync" | "fs.lchownSync" | "fs.linkSync" | "fs.lstatSync" | "fs.lutimesSync" | "fs.mkdirSync" | "fs.mkdtempSync" | "fs.opendirSync" | "fs.openSync" | "fs.readdirSync" | "fs.readFileSync" | "fs.readlinkSync" | "fs.readSync" | "fs.readvSync" | "fs.realpathSync" | "fs.realpathSync.native" | "fs.renameSync" | "fs.rmdirSync" | "fs.rmSync" | "fs.statfsSync" | "fs.statSync" | "fs.symlinkSync" | "fs.truncateSync" | "fs.unlinkSync" | "fs.utimesSync" | "fs.writeFileSync" | "fs.writeSync" | "fs.writevSync" | "fs.constants" | "fs.Dir" | "fs.Dirent" | "fs.FSWatcher" | "fs.StatWatcher" | "fs.ReadStream" | "fs.Stats()" | "new fs.Stats()" | "fs.Stats" | "fs.StatFs" | "fs.WriteStream" | "fs.common_objects" | "fs/promises" | "fs/promises.FileHandle" | "fs/promises.access" | "fs/promises.appendFile" | "fs/promises.chmod" | "fs/promises.chown" | "fs/promises.constants" | "fs/promises.copyFile" | "fs/promises.cp" | "fs/promises.glob" | "fs/promises.lchmod" | "fs/promises.lchown" | "fs/promises.link" | "fs/promises.lstat" | "fs/promises.lutimes" | "fs/promises.mkdir" | "fs/promises.mkdtemp" | "fs/promises.open" | "fs/promises.opendir" | "fs/promises.readFile" | "fs/promises.readdir" | "fs/promises.readlink" | "fs/promises.realpath" | "fs/promises.rename" | "fs/promises.rm" | "fs/promises.rmdir" | "fs/promises.stat" | "fs/promises.statfs" | "fs/promises.symlink" | "fs/promises.truncate" | "fs/promises.unlink" | "fs/promises.utimes" | "fs/promises.watch" | "fs/promises.writeFile" | "http2" | "http2.constants" | "http2.sensitiveHeaders" | "http2.createServer" | "http2.createSecureServer" | "http2.connect" | "http2.getDefaultSettings" | "http2.getPackedSettings" | "http2.getUnpackedSettings" | "http2.performServerHandshake" | "http2.Http2Session" | "http2.ServerHttp2Session" | "http2.ClientHttp2Session" | "http2.Http2Stream" | "http2.ClientHttp2Stream" | "http2.ServerHttp2Stream" | "http2.Http2Server" | "http2.Http2SecureServer" | "http2.Http2ServerRequest" | "http2.Http2ServerResponse" | "http" | "http.METHODS" | "http.STATUS_CODES" | "http.globalAgent" | "http.maxHeaderSize" | "http.createServer" | "http.get" | "http.request" | "http.validateHeaderName" | "http.validateHeaderValue" | "http.setMaxIdleHTTPParsers" | "http.Agent" | "http.ClientRequest" | "http.Server" | "http.ServerResponse" | "http.IncomingMessage" | "http.OutgoingMessage" | "http.WebSocket" | "_http_agent" | "_http_client" | "_http_common" | "_http_incoming" | "_http_outgoing" | "_http_server" | "https" | "https.globalAgent" | "https.createServer" | "https.get" | "https.request" | "https.Agent" | "https.Server" | "inspector" | "inspector.Session" | "inspector.Network.dataReceived" | "inspector.Network.dataSent" | "inspector.Network.loadingFailed" | "inspector.Network.loadingFinished" | "inspector.Network.requestWillBeSent" | "inspector.Network.responseReceived" | "inspector.NetworkResources.put" | "inspector.console" | "inspector.close" | "inspector.open" | "inspector.url" | "inspector.waitForDebugger" | "inspector/promises" | "inspector/promises.Session" | "inspector/promises.Network.dataReceived" | "inspector/promises.Network.dataSent" | "inspector/promises.Network.loadingFailed" | "inspector/promises.Network.loadingFinished" | "inspector/promises.Network.requestWillBeSent" | "inspector/promises.Network.responseReceived" | "inspector/promises.NetworkResources.put" | "inspector/promises.console" | "inspector/promises.close" | "inspector/promises.open" | "inspector/promises.url" | "inspector/promises.waitForDebugger" | "module.builtinModules" | "module.constants.compileCacheStatus" | "module.createRequire" | "module.createRequireFromPath" | "module.enableCompileCache" | "module.findPackageJSON" | "module.flushCompileCache" | "module.getCompileCacheDir" | "module.getSourceMapsSupport" | "module.isBuiltin" | "module.registerHooks" | "module.register" | "module.setSourceMapsSupport" | "module.stripTypeScriptTypes" | "module.syncBuiltinESMExports" | "module.findSourceMap" | "module.SourceMap" | "module.Module.builtinModules" | "module.Module.createRequire" | "module.Module.createRequireFromPath" | "module.Module.enableCompileCache" | "module.Module.findPackageJSON" | "module.Module.flushCompileCache" | "module.Module.getCompileCacheDir" | "module.Module.getSourceMapsSupport" | "module.Module.isBuiltin" | "module.Module.registerHooks" | "module.Module.register" | "module.Module.setSourceMapsSupport" | "module.Module.stripTypeScriptTypes" | "module.Module.syncBuiltinESMExports" | "module.Module.findSourceMap" | "module.Module.SourceMap" | "net" | "net.connect" | "net.createConnection" | "net.createServer" | "net.getDefaultAutoSelectFamily" | "net.setDefaultAutoSelectFamily" | "net.getDefaultAutoSelectFamilyAttemptTimeout" | "net.setDefaultAutoSelectFamilyAttemptTimeout" | "net.isIP" | "net.isIPv4" | "net.isIPv6" | "net.BlockList" | "net.BlockList.isBlockList" | "net.SocketAddress" | "net.SocketAddress.parse" | "net.Server" | "net.Socket" | "os" | "os.EOL" | "os.constants" | "os.constants.priority" | "os.devNull" | "os.availableParallelism" | "os.arch" | "os.cpus" | "os.endianness" | "os.freemem" | "os.getPriority" | "os.homedir" | "os.hostname" | "os.loadavg" | "os.machine" | "os.networkInterfaces" | "os.platform" | "os.release" | "os.setPriority" | "os.tmpdir" | "os.totalmem" | "os.type" | "os.uptime" | "os.userInfo" | "os.version" | "path" | "path.posix" | "path.posix.delimiter" | "path.posix.sep" | "path.posix.basename" | "path.posix.dirname" | "path.posix.extname" | "path.posix.format" | "path.posix.matchesGlob" | "path.posix.isAbsolute" | "path.posix.join" | "path.posix.normalize" | "path.posix.parse" | "path.posix.relative" | "path.posix.resolve" | "path.posix.toNamespacedPath" | "path.win32" | "path.win32.delimiter" | "path.win32.sep" | "path.win32.basename" | "path.win32.dirname" | "path.win32.extname" | "path.win32.format" | "path.win32.matchesGlob" | "path.win32.isAbsolute" | "path.win32.join" | "path.win32.normalize" | "path.win32.parse" | "path.win32.relative" | "path.win32.resolve" | "path.win32.toNamespacedPath" | "path.delimiter" | "path.sep" | "path.basename" | "path.dirname" | "path.extname" | "path.format" | "path.matchesGlob" | "path.isAbsolute" | "path.join" | "path.normalize" | "path.parse" | "path.relative" | "path.resolve" | "path.toNamespacedPath" | "path/posix" | "path/posix.delimiter" | "path/posix.sep" | "path/posix.basename" | "path/posix.dirname" | "path/posix.extname" | "path/posix.format" | "path/posix.matchesGlob" | "path/posix.isAbsolute" | "path/posix.join" | "path/posix.normalize" | "path/posix.parse" | "path/posix.relative" | "path/posix.resolve" | "path/posix.toNamespacedPath" | "path/win32" | "path/win32.delimiter" | "path/win32.sep" | "path/win32.basename" | "path/win32.dirname" | "path/win32.extname" | "path/win32.format" | "path/win32.matchesGlob" | "path/win32.isAbsolute" | "path/win32.join" | "path/win32.normalize" | "path/win32.parse" | "path/win32.relative" | "path/win32.resolve" | "path/win32.toNamespacedPath" | "perf_hooks" | "perf_hooks.performance" | "perf_hooks.performance.clearMarks" | "perf_hooks.performance.clearMeasures" | "perf_hooks.performance.clearResourceTimings" | "perf_hooks.performance.eventLoopUtilization" | "perf_hooks.performance.getEntries" | "perf_hooks.performance.getEntriesByName" | "perf_hooks.performance.getEntriesByType" | "perf_hooks.performance.mark" | "perf_hooks.performance.markResourceTiming" | "perf_hooks.performance.measure" | "perf_hooks.performance.nodeTiming" | "perf_hooks.performance.nodeTiming.bootstrapComplete" | "perf_hooks.performance.nodeTiming.environment" | "perf_hooks.performance.nodeTiming.idleTime" | "perf_hooks.performance.nodeTiming.loopExit" | "perf_hooks.performance.nodeTiming.loopStart" | "perf_hooks.performance.nodeTiming.nodeStart" | "perf_hooks.performance.nodeTiming.uvMetricsInfo" | "perf_hooks.performance.nodeTiming.v8Start" | "perf_hooks.performance.now" | "perf_hooks.performance.onresourcetimingbufferfull" | "perf_hooks.performance.setResourceTimingBufferSize" | "perf_hooks.performance.timeOrigin" | "perf_hooks.performance.timerify" | "perf_hooks.performance.toJSON" | "perf_hooks.createHistogram" | "perf_hooks.monitorEventLoopDelay" | "perf_hooks.PerformanceEntry" | "perf_hooks.PerformanceMark" | "perf_hooks.PerformanceMeasure" | "perf_hooks.PerformanceNodeEntry" | "perf_hooks.PerformanceNodeTiming" | "perf_hooks.PerformanceResourceTiming" | "perf_hooks.PerformanceObserver" | "perf_hooks.PerformanceObserverEntryList" | "perf_hooks.Histogram" | "perf_hooks.IntervalHistogram" | "perf_hooks.RecordableHistogram" | "punycode" | "punycode.ucs2" | "punycode.version" | "punycode.decode" | "punycode.encode" | "punycode.toASCII" | "punycode.toUnicode" | "querystring" | "querystring.decode" | "querystring.encode" | "querystring.escape" | "querystring.parse" | "querystring.stringify" | "querystring.unescape" | "readline" | "readline.promises" | "readline.promises.createInterface" | "readline.promises.Interface" | "readline.promises.Readline" | "readline.clearLine" | "readline.clearScreenDown" | "readline.createInterface" | "readline.cursorTo" | "readline.moveCursor" | "readline.Interface" | "readline.emitKeypressEvents" | "readline.InterfaceConstructor" | "readline/promises" | "readline/promises.createInterface" | "readline/promises.Interface" | "readline/promises.Readline" | "repl" | "repl.start" | "repl.writer" | "repl.REPLServer()" | "repl.REPLServer" | "repl.REPL_MODE_MAGIC" | "repl.REPL_MODE_SLOPPY" | "repl.REPL_MODE_STRICT" | "repl.Recoverable()" | "repl.Recoverable" | "repl.builtinModules" | "sea" | "sea.isSea" | "sea.getAsset" | "sea.getAssetAsBlob" | "sea.getRawAsset" | "sea.sea.isSea" | "sea.sea.getAsset" | "sea.sea.getAssetAsBlob" | "sea.sea.getRawAsset" | "stream" | "stream.promises" | "stream.promises.pipeline" | "stream.promises.finished" | "stream.finished" | "stream.pipeline" | "stream.compose" | "stream.duplexPair" | "stream.Readable" | "stream.Readable.from" | "stream.Readable.isDisturbed" | "stream.Readable.fromWeb" | "stream.Readable.toWeb" | "stream.Writable" | "stream.Writable.fromWeb" | "stream.Writable.toWeb" | "stream.Duplex" | "stream.Duplex.from" | "stream.Duplex.fromWeb" | "stream.Duplex.toWeb" | "stream.Transform" | "stream.isErrored" | "stream.isReadable" | "stream.addAbortSignal" | "stream.getDefaultHighWaterMark" | "stream.setDefaultHighWaterMark" | "stream/promises.pipeline" | "stream/promises.finished" | "stream/web" | "stream/web.ReadableStream" | "stream/web.ReadableStream.from" | "stream/web.ReadableStreamDefaultReader" | "stream/web.ReadableStreamBYOBReader" | "stream/web.ReadableStreamDefaultController" | "stream/web.ReadableByteStreamController" | "stream/web.ReadableStreamBYOBRequest" | "stream/web.WritableStream" | "stream/web.WritableStreamDefaultWriter" | "stream/web.WritableStreamDefaultController" | "stream/web.TransformStream" | "stream/web.TransformStreamDefaultController" | "stream/web.ByteLengthQueuingStrategy" | "stream/web.CountQueuingStrategy" | "stream/web.TextEncoderStream" | "stream/web.TextDecoderStream" | "stream/web.CompressionStream" | "stream/web.DecompressionStream" | "stream/consumers" | "stream/consumers.arrayBuffer" | "stream/consumers.blob" | "stream/consumers.buffer" | "stream/consumers.json" | "stream/consumers.text" | "string_decoder" | "string_decoder.StringDecoder" | "sqlite" | "sqlite.constants" | "sqlite.constants.SQLITE_CHANGESET_OMIT" | "sqlite.constants.SQLITE_CHANGESET_REPLACE" | "sqlite.constants.SQLITE_CHANGESET_ABORT" | "sqlite.backup" | "sqlite.DatabaseSync" | "sqlite.StatementSync" | "sqlite.SQLITE_CHANGESET_OMIT" | "sqlite.SQLITE_CHANGESET_REPLACE" | "sqlite.SQLITE_CHANGESET_ABORT" | "test" | "test.after" | "test.afterEach" | "test.assert" | "test.assert.register" | "test.before" | "test.beforeEach" | "test.describe" | "test.describe.only" | "test.describe.skip" | "test.describe.todo" | "test.it" | "test.it.only" | "test.it.skip" | "test.it.todo" | "test.mock" | "test.mock.fn" | "test.mock.getter" | "test.mock.method" | "test.mock.module" | "test.mock.reset" | "test.mock.restoreAll" | "test.mock.setter" | "test.mock.timers" | "test.mock.timers.enable" | "test.mock.timers.reset" | "test.mock.timers.tick" | "test.only" | "test.run" | "test.snapshot" | "test.snapshot.setDefaultSnapshotSerializers" | "test.snapshot.setResolveSnapshotPath" | "test.skip" | "test.suite" | "test.test" | "test.test.only" | "test.test.skip" | "test.test.todo" | "test.todo" | "timers" | "timers.Immediate" | "timers.Timeout" | "timers.setImmediate" | "timers.clearImmediate" | "timers.setInterval" | "timers.clearInterval" | "timers.setTimeout" | "timers.clearTimeout" | "timers.promises" | "timers.promises.setTimeout" | "timers.promises.setImmediate" | "timers.promises.setInterval" | "timers.promises.scheduler.wait" | "timers.promises.scheduler.yield" | "timers/promises" | "timers/promises.setTimeout" | "timers/promises.setImmediate" | "timers/promises.setInterval" | "timers/promises.scheduler.wait" | "timers/promises.scheduler.yield" | "tls" | "tls.checkServerIdentity" | "tls.connect" | "tls.createSecureContext" | "tls.createSecurePair" | "tls.createServer" | "tls.CryptoStream" | "tls.DEFAULT_CIPHERS" | "tls.DEFAULT_ECDH_CURVE" | "tls.DEFAULT_MAX_VERSION" | "tls.DEFAULT_MIN_VERSION" | "tls.getCACertificates" | "tls.getCiphers" | "tls.rootCertificates" | "tls.SecureContext" | "tls.SecurePair" | "tls.Server" | "tls.setDefaultCACertificates" | "tls.TLSSocket" | "trace_events" | "trace_events.createTracing" | "trace_events.getEnabledCategories" | "tty" | "tty.isatty" | "tty.ReadStream" | "tty.WriteStream" | "url" | "url.domainToASCII" | "url.domainToUnicode" | "url.fileURLToPath" | "url.format" | "url.pathToFileURL" | "url.urlToHttpOptions" | "url.URL" | "url.URL.canParse" | "url.URL.createObjectURL" | "url.URL.revokeObjectURL" | "url.URLPattern" | "url.URLSearchParams" | "url.Url" | "util.promisify" | "util.promisify.custom" | "util.callbackify" | "util.debuglog" | "util.debug" | "util.deprecate" | "util.diff" | "util.format" | "util.formatWithOptions" | "util.getCallSite" | "util.getCallSites" | "util.getSystemErrorName" | "util.getSystemErrorMap" | "util.getSystemErrorMessage" | "util.inherits" | "util.inspect" | "util.inspect.custom" | "util.inspect.defaultOptions" | "util.inspect.replDefaults" | "util.isDeepStrictEqual" | "util.parseArgs" | "util.parseEnv" | "util.setTraceSigInt" | "util.stripVTControlCharacters" | "util.styleText" | "util.toUSVString" | "util.transferableAbortController" | "util.transferableAbortSignal" | "util.aborted" | "util.MIMEType" | "util.MIMEParams" | "util.TextDecoder" | "util.TextEncoder" | "util.types" | "util.types.isExternal" | "util.types.isDate" | "util.types.isArgumentsObject" | "util.types.isBigIntObject" | "util.types.isBooleanObject" | "util.types.isNumberObject" | "util.types.isStringObject" | "util.types.isSymbolObject" | "util.types.isNativeError" | "util.types.isRegExp" | "util.types.isAsyncFunction" | "util.types.isGeneratorFunction" | "util.types.isGeneratorObject" | "util.types.isPromise" | "util.types.isMap" | "util.types.isSet" | "util.types.isMapIterator" | "util.types.isSetIterator" | "util.types.isWeakMap" | "util.types.isWeakSet" | "util.types.isArrayBuffer" | "util.types.isDataView" | "util.types.isSharedArrayBuffer" | "util.types.isProxy" | "util.types.isModuleNamespaceObject" | "util.types.isAnyArrayBuffer" | "util.types.isBoxedPrimitive" | "util.types.isArrayBufferView" | "util.types.isTypedArray" | "util.types.isUint8Array" | "util.types.isUint8ClampedArray" | "util.types.isUint16Array" | "util.types.isUint32Array" | "util.types.isInt8Array" | "util.types.isInt16Array" | "util.types.isInt32Array" | "util.types.isFloat16Array" | "util.types.isFloat32Array" | "util.types.isFloat64Array" | "util.types.isBigInt64Array" | "util.types.isBigUint64Array" | "util.types.isKeyObject" | "util.types.isCryptoKey" | "util.types.isWebAssemblyCompiledModule" | "util._extend" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util" | "util/types" | "util/types.isExternal" | "util/types.isDate" | "util/types.isArgumentsObject" | "util/types.isBigIntObject" | "util/types.isBooleanObject" | "util/types.isNumberObject" | "util/types.isStringObject" | "util/types.isSymbolObject" | "util/types.isNativeError" | "util/types.isRegExp" | "util/types.isAsyncFunction" | "util/types.isGeneratorFunction" | "util/types.isGeneratorObject" | "util/types.isPromise" | "util/types.isMap" | "util/types.isSet" | "util/types.isMapIterator" | "util/types.isSetIterator" | "util/types.isWeakMap" | "util/types.isWeakSet" | "util/types.isArrayBuffer" | "util/types.isDataView" | "util/types.isSharedArrayBuffer" | "util/types.isProxy" | "util/types.isModuleNamespaceObject" | "util/types.isAnyArrayBuffer" | "util/types.isBoxedPrimitive" | "util/types.isArrayBufferView" | "util/types.isTypedArray" | "util/types.isUint8Array" | "util/types.isUint8ClampedArray" | "util/types.isUint16Array" | "util/types.isUint32Array" | "util/types.isInt8Array" | "util/types.isInt16Array" | "util/types.isInt32Array" | "util/types.isFloat16Array" | "util/types.isFloat32Array" | "util/types.isFloat64Array" | "util/types.isBigInt64Array" | "util/types.isBigUint64Array" | "util/types.isKeyObject" | "util/types.isCryptoKey" | "util/types.isWebAssemblyCompiledModule" | "v8" | "v8.serialize" | "v8.deserialize" | "v8.Serializer" | "v8.Deserializer" | "v8.DefaultSerializer" | "v8.DefaultDeserializer" | "v8.promiseHooks" | "v8.promiseHooks.onInit" | "v8.promiseHooks.onSettled" | "v8.promiseHooks.onBefore" | "v8.promiseHooks.onAfter" | "v8.promiseHooks.createHook" | "v8.startupSnapshot" | "v8.startupSnapshot.addSerializeCallback" | "v8.startupSnapshot.addDeserializeCallback" | "v8.startupSnapshot.setDeserializeMainFunction" | "v8.startupSnapshot.isBuildingSnapshot" | "v8.cachedDataVersionTag" | "v8.getHeapCodeStatistics" | "v8.getHeapSnapshot" | "v8.getHeapSpaceStatistics" | "v8.getHeapStatistics" | "v8.isStringOneByteRepresentation" | "v8.queryObjects" | "v8.setFlagsFromString" | "v8.stopCoverage" | "v8.takeCoverage" | "v8.writeHeapSnapshot" | "v8.setHeapSnapshotNearHeapLimit" | "v8.GCProfiler" | "vm.constants" | "vm.compileFunction" | "vm.createContext" | "vm.isContext" | "vm.measureMemory" | "vm.runInContext" | "vm.runInNewContext" | "vm.runInThisContext" | "vm.Script" | "vm.Module" | "vm.SourceTextModule" | "vm.SyntheticModule" | "vm" | "wasi.WASI" | "wasi" | "worker_threads" | "worker_threads.parentPort" | "worker_threads.resourceLimits" | "worker_threads.SHARE_ENV" | "worker_threads.threadId" | "worker_threads.workerData" | "worker_threads.getEnvironmentData" | "worker_threads.getHeapStatistics" | "worker_threads.markAsUncloneable" | "worker_threads.markAsUntransferable" | "worker_threads.isInternalThread" | "worker_threads.isMainThread" | "worker_threads.isMarkedAsUntransferable" | "worker_threads.moveMessagePortToContext" | "worker_threads.postMessageToThread" | "worker_threads.receiveMessageOnPort" | "worker_threads.setEnvironmentData" | "worker_threads.BroadcastChannel" | "worker_threads.MessageChannel" | "worker_threads.MessagePort" | "worker_threads.Worker" | "zlib.brotliCompress" | "zlib.brotliCompressSync" | "zlib.brotliDecompress" | "zlib.brotliDecompressSync" | "zlib.constants" | "zlib.constants.ZSTD_e_continue" | "zlib.constants.ZSTD_e_flush" | "zlib.constants.ZSTD_e_end" | "zlib.constants.ZSTD_fast" | "zlib.constants.ZSTD_dfast" | "zlib.constants.ZSTD_greedy" | "zlib.constants.ZSTD_lazy" | "zlib.constants.ZSTD_lazy2" | "zlib.constants.ZSTD_btlazy2" | "zlib.constants.ZSTD_btopt" | "zlib.constants.ZSTD_btultra" | "zlib.constants.ZSTD_btultra2" | "zlib.constants.ZSTD_c_compressionLevel" | "zlib.constants.ZSTD_c_windowLog" | "zlib.constants.ZSTD_c_hashLog" | "zlib.constants.ZSTD_c_chainLog" | "zlib.constants.ZSTD_c_searchLog" | "zlib.constants.ZSTD_c_minMatch" | "zlib.constants.ZSTD_c_targetLength" | "zlib.constants.ZSTD_c_strategy" | "zlib.constants.ZSTD_c_enableLongDistanceMatching" | "zlib.constants.ZSTD_c_ldmHashLog" | "zlib.constants.ZSTD_c_ldmMinMatch" | "zlib.constants.ZSTD_c_ldmBucketSizeLog" | "zlib.constants.ZSTD_c_ldmHashRateLog" | "zlib.constants.ZSTD_c_contentSizeFlag" | "zlib.constants.ZSTD_c_checksumFlag" | "zlib.constants.ZSTD_c_dictIDFlag" | "zlib.constants.ZSTD_c_nbWorkers" | "zlib.constants.ZSTD_c_jobSize" | "zlib.constants.ZSTD_c_overlapLog" | "zlib.constants.ZSTD_d_windowLogMax" | "zlib.constants.ZSTD_CLEVEL_DEFAULT" | "zlib.constants.ZSTD_error_no_error" | "zlib.constants.ZSTD_error_GENERIC" | "zlib.constants.ZSTD_error_prefix_unknown" | "zlib.constants.ZSTD_error_version_unsupported" | "zlib.constants.ZSTD_error_frameParameter_unsupported" | "zlib.constants.ZSTD_error_frameParameter_windowTooLarge" | "zlib.constants.ZSTD_error_corruption_detected" | "zlib.constants.ZSTD_error_checksum_wrong" | "zlib.constants.ZSTD_error_literals_headerWrong" | "zlib.constants.ZSTD_error_dictionary_corrupted" | "zlib.constants.ZSTD_error_dictionary_wrong" | "zlib.constants.ZSTD_error_dictionaryCreation_failed" | "zlib.constants.ZSTD_error_parameter_unsupported" | "zlib.constants.ZSTD_error_parameter_combination_unsupported" | "zlib.constants.ZSTD_error_parameter_outOfBound" | "zlib.constants.ZSTD_error_tableLog_tooLarge" | "zlib.constants.ZSTD_error_maxSymbolValue_tooLarge" | "zlib.constants.ZSTD_error_maxSymbolValue_tooSmall" | "zlib.constants.ZSTD_error_stabilityCondition_notRespected" | "zlib.constants.ZSTD_error_stage_wrong" | "zlib.constants.ZSTD_error_init_missing" | "zlib.constants.ZSTD_error_memory_allocation" | "zlib.constants.ZSTD_error_workSpace_tooSmall" | "zlib.constants.ZSTD_error_dstSize_tooSmall" | "zlib.constants.ZSTD_error_srcSize_wrong" | "zlib.constants.ZSTD_error_dstBuffer_null" | "zlib.constants.ZSTD_error_noForwardProgress_destFull" | "zlib.constants.ZSTD_error_noForwardProgress_inputEmpty" | "zlib.crc32" | "zlib.createBrotliCompress" | "zlib.createBrotliDecompress" | "zlib.createDeflate" | "zlib.createDeflateRaw" | "zlib.createGunzip" | "zlib.createGzip" | "zlib.createInflate" | "zlib.createInflateRaw" | "zlib.createUnzip" | "zlib.createZstdCompress" | "zlib.createZstdDecompress" | "zlib.deflate" | "zlib.deflateRaw" | "zlib.deflateRawSync" | "zlib.deflateSync" | "zlib.gunzip" | "zlib.gunzipSync" | "zlib.gzip" | "zlib.gzipSync" | "zlib.inflate" | "zlib.inflateRaw" | "zlib.inflateRawSync" | "zlib.inflateSync" | "zlib.unzip" | "zlib.unzipSync" | "zlib.zstdCompress" | "zlib.zstdCompressSync" | "zlib.zstdDecompress" | "zlib.zstdDecompressSync" | "zlib.BrotliCompress()" | "zlib.BrotliCompress" | "zlib.BrotliDecompress()" | "zlib.BrotliDecompress" | "zlib.Deflate()" | "zlib.Deflate" | "zlib.DeflateRaw()" | "zlib.DeflateRaw" | "zlib.Gunzip()" | "zlib.Gunzip" | "zlib.Gzip()" | "zlib.Gzip" | "zlib.Inflate()" | "zlib.Inflate" | "zlib.InflateRaw()" | "zlib.InflateRaw" | "zlib.Unzip()" | "zlib.Unzip" | "zlib.ZstdCompress" | "zlib.ZstdDecompress" | "zlib.ZstdOptions" | "zlib" | "import.meta.resolve" | "import.meta.dirname" | "import.meta.filename" | "import.meta.main")[]
}]
// ----- node/prefer-global/buffer -----
type NodePreferGlobalBuffer = []|[("always" | "never")]
// ----- node/prefer-global/console -----
type NodePreferGlobalConsole = []|[("always" | "never")]
// ----- node/prefer-global/crypto -----
type NodePreferGlobalCrypto = []|[("always" | "never")]
// ----- node/prefer-global/process -----
type NodePreferGlobalProcess = []|[("always" | "never")]
// ----- node/prefer-global/text-decoder -----
type NodePreferGlobalTextDecoder = []|[("always" | "never")]
// ----- node/prefer-global/text-encoder -----
type NodePreferGlobalTextEncoder = []|[("always" | "never")]
// ----- node/prefer-global/timers -----
type NodePreferGlobalTimers = []|[("always" | "never")]
// ----- node/prefer-global/url -----
type NodePreferGlobalUrl = []|[("always" | "never")]
// ----- node/prefer-global/url-search-params -----
type NodePreferGlobalUrlSearchParams = []|[("always" | "never")]
// ----- node/prefer-node-protocol -----
type NodePreferNodeProtocol = []|[{
  version?: string
}]
// ----- node/shebang -----
type NodeShebang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]
// ----- qwik/jsx-key -----
type QwikJsxKey = []|[{
  checkFragmentShorthand?: boolean
  checkKeyMustBeforeSpread?: boolean
  warnOnDuplicates?: boolean
}]
// ----- qwik/loader-location -----
type QwikLoaderLocation = []|[{
  routesDir?: string
}]
// ----- qwik/prefer-classlist -----
type QwikPreferClasslist = []|[{
  
  classnames?: string[]
}]
// ----- qwik/valid-lexical-scope -----
type QwikValidLexicalScope = []|[{
  allowAny?: boolean
}]
// ----- react/dom-no-unknown-property -----
type ReactDomNoUnknownProperty = []|[{
  
  ignore?: string[]
  
  requireDataLowercase?: boolean
}]
// ----- react/exhaustive-deps -----
type ReactExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react/jsx-no-useless-fragment -----
type ReactJsxNoUselessFragment = []|[{
  
  allowEmptyFragment?: boolean
  
  allowExpressions?: boolean
}]
// ----- react/no-unstable-default-props -----
type ReactNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react/rules-of-hooks -----
type ReactRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react/use-state -----
type ReactUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react/x-exhaustive-deps -----
type ReactXExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react/x-no-unstable-default-props -----
type ReactXNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react/x-rules-of-hooks -----
type ReactXRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react/x-use-state -----
type ReactXUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- regexp/hexadecimal-escape -----
type RegexpHexadecimalEscape = []|[("always" | "never")]
// ----- regexp/letter-case -----
type RegexpLetterCase = []|[{
  caseInsensitive?: ("lowercase" | "uppercase" | "ignore")
  unicodeEscape?: ("lowercase" | "uppercase" | "ignore")
  hexadecimalEscape?: ("lowercase" | "uppercase" | "ignore")
  controlEscape?: ("lowercase" | "uppercase" | "ignore")
}]
// ----- regexp/match-any -----
type RegexpMatchAny = []|[{
  
  allows?: [("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"), ...(("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"))[]]
}]
// ----- regexp/no-dupe-disjunctions -----
type RegexpNoDupeDisjunctions = []|[{
  report?: ("all" | "trivial" | "interesting")
  reportExponentialBacktracking?: ("none" | "certain" | "potential")
  reportUnreachable?: ("certain" | "potential")
}]
// ----- regexp/no-lazy-ends -----
type RegexpNoLazyEnds = []|[{
  ignorePartial?: boolean
}]
// ----- regexp/no-legacy-features -----
type RegexpNoLegacyFeatures = []|[{
  staticProperties?: ("input" | "$_" | "lastMatch" | "$&" | "lastParen" | "$+" | "leftContext" | "$`" | "rightContext" | "$'" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9")[]
  prototypeMethods?: ("compile")[]
}]
// ----- regexp/no-misleading-capturing-group -----
type RegexpNoMisleadingCapturingGroup = []|[{
  reportBacktrackingEnds?: boolean
}]
// ----- regexp/no-misleading-unicode-character -----
type RegexpNoMisleadingUnicodeCharacter = []|[{
  fixable?: boolean
}]
// ----- regexp/no-missing-g-flag -----
type RegexpNoMissingGFlag = []|[{
  strictTypes?: boolean
}]
// ----- regexp/no-obscure-range -----
type RegexpNoObscureRange = []|[{
  allowed?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
}]
// ----- regexp/no-super-linear-backtracking -----
type RegexpNoSuperLinearBacktracking = []|[{
  report?: ("certain" | "potential")
}]
// ----- regexp/no-super-linear-move -----
type RegexpNoSuperLinearMove = []|[{
  report?: ("certain" | "potential")
  ignoreSticky?: boolean
  ignorePartial?: boolean
}]
// ----- regexp/no-unused-capturing-group -----
type RegexpNoUnusedCapturingGroup = []|[{
  fixable?: boolean
  allowNamed?: boolean
}]
// ----- regexp/no-useless-character-class -----
type RegexpNoUselessCharacterClass = []|[{
  ignores?: string[]
}]
// ----- regexp/no-useless-flag -----
type RegexpNoUselessFlag = []|[{
  ignore?: ("i" | "m" | "s" | "g" | "y")[]
  strictTypes?: boolean
}]
// ----- regexp/no-useless-non-capturing-group -----
type RegexpNoUselessNonCapturingGroup = []|[{
  allowTop?: (boolean | ("always" | "never" | "partial"))
}]
// ----- regexp/optimal-quantifier-concatenation -----
type RegexpOptimalQuantifierConcatenation = []|[{
  capturingGroups?: ("ignore" | "report")
}]
// ----- regexp/prefer-character-class -----
type RegexpPreferCharacterClass = []|[{
  minAlternatives?: number
}]
// ----- regexp/prefer-d -----
type RegexpPreferD = []|[{
  insideCharacterClass?: ("ignore" | "range" | "d")
}]
// ----- regexp/prefer-lookaround -----
type RegexpPreferLookaround = []|[{
  lookbehind?: boolean
  strictTypes?: boolean
}]
// ----- regexp/prefer-named-replacement -----
type RegexpPreferNamedReplacement = []|[{
  strictTypes?: boolean
}]
// ----- regexp/prefer-quantifier -----
type RegexpPreferQuantifier = []|[{
  allows?: string[]
}]
// ----- regexp/prefer-range -----
type RegexpPreferRange = []|[{
  target?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
}]
// ----- regexp/prefer-result-array-groups -----
type RegexpPreferResultArrayGroups = []|[{
  strictTypes?: boolean
}]
// ----- regexp/sort-character-class-elements -----
type RegexpSortCharacterClassElements = []|[{
  order?: ("\\s" | "\\w" | "\\d" | "\\p" | "*" | "\\q" | "[]")[]
}]
// ----- regexp/unicode-escape -----
type RegexpUnicodeEscape = []|[("unicodeCodePointEscape" | "unicodeEscape")]
// ----- regexp/unicode-property -----
type RegexpUnicodeProperty = []|[{
  generalCategory?: ("always" | "never" | "ignore")
  key?: ("short" | "long" | "ignore")
  property?: (("short" | "long" | "ignore") | {
    binary?: ("short" | "long" | "ignore")
    generalCategory?: ("short" | "long" | "ignore")
    script?: ("short" | "long" | "ignore")
  })
}]
// ----- storybook/meta-inline-properties -----
type StorybookMetaInlineProperties = []|[{
  csfVersion?: number
}]
// ----- storybook/no-uninstalled-addons -----
type StorybookNoUninstalledAddons = []|[{
  packageJsonLocation?: string
  ignore?: string[]
}]
// ----- unicorn/catch-error-name -----
type UnicornCatchErrorName = []|[{
  
  name?: string
  
  ignore?: (string | {
    [k: string]: unknown | undefined
  })[]
}]
// ----- unicorn/class-reference-in-static-methods -----
type UnicornClassReferenceInStaticMethods = []|[{
  
  preferThis?: boolean
  
  preferSuper?: boolean
}]
// ----- unicorn/comment-content -----
type UnicornCommentContent = []|[{
  
  checkUniformCase?: boolean
  
  extendDefaultReplacements?: boolean
  
  replacements?: {
    [k: string]: (false | string | {
      replacement: string
      caseSensitive?: boolean
    }) | undefined
  }
}]
// ----- unicorn/consistent-boolean-name -----
type UnicornConsistentBooleanName = []|[{
  
  checkVariables?: ("always" | "prohibit" | "never")
  
  checkArguments?: ("always" | "prohibit" | "never")
  
  checkFunctions?: ("always" | "prohibit" | "never")
  
  checkMethods?: ("always" | "prohibit" | "never")
  
  checkFields?: ("always" | "prohibit" | "never")
  
  prefixes?: {
    
    [k: string]: boolean | undefined
  }
  
  wrappers?: {
    
    [k: string]: string | undefined
  }
  
  ignore?: unknown[]
  [k: string]: unknown
}]
// ----- unicorn/consistent-class-member-order -----
type UnicornConsistentClassMemberOrder = []|[{
  
  order?: [("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method")]
}]
// ----- unicorn/consistent-compound-words -----
type UnicornConsistentCompoundWords = []|[{
  
  checkProperties?: boolean
  
  checkVariables?: boolean
  
  checkDefaultAndNamespaceImports?: (boolean | "internal")
  
  checkShorthandImports?: (boolean | "internal")
  
  checkShorthandProperties?: boolean
  
  extendDefaultReplacements?: boolean
  replacements?: _UnicornConsistentCompoundWords_Replacements
  allowList?: _UnicornConsistentCompoundWords_TrueObject
}]
interface _UnicornConsistentCompoundWords_Replacements {
  [k: string]: (false | string) | undefined
}
interface _UnicornConsistentCompoundWords_TrueObject {
  [k: string]: true | undefined
}
// ----- unicorn/consistent-conditional-object-spread -----
type UnicornConsistentConditionalObjectSpread = []|[("logical" | "ternary")]
// ----- unicorn/consistent-export-decorator-position -----
type UnicornConsistentExportDecoratorPosition = []|[("above" | "before" | "after")]
// ----- unicorn/consistent-function-scoping -----
type UnicornConsistentFunctionScoping = []|[{
  
  checkArrowFunctions?: boolean
}]
// ----- unicorn/consistent-function-style -----
type UnicornConsistentFunctionStyle = []|[{
  default?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  defaultExport?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  namedFunctions?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  namedExports?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  callbacks?: ("function-expression" | "arrow-function" | "ignore")
  objectProperties?: ("method" | "function-expression" | "arrow-function" | "ignore")
  reassignedVariables?: ("function-expression" | "arrow-function" | "ignore")
  typedVariables?: ("function-expression" | "arrow-function" | "ignore")
}]
// ----- unicorn/consistent-json-file-read -----
type UnicornConsistentJsonFileRead = []|[("string" | "buffer")]
// ----- unicorn/default-export-style -----
type UnicornDefaultExportStyle = []|[{
  functions?: ("inline" | "separate" | "ignore")
  classes?: ("inline" | "separate" | "ignore")
}]
// ----- unicorn/dom-node-dataset -----
type UnicornDomNodeDataset = []|[{
  
  preferAttributes?: boolean
}]
// ----- unicorn/escape-case -----
type UnicornEscapeCase = []|[("uppercase" | "lowercase")]
// ----- unicorn/expiring-todo-comments -----
type UnicornExpiringTodoComments = []|[{
  
  terms?: string[]
  
  ignore?: (string | {
    [k: string]: unknown | undefined
  })[]
  
  checkDates?: boolean
  
  checkDatesOnPullRequests?: boolean
  
  allowWarningComments?: boolean
  
  date?: string
}]
// ----- unicorn/explicit-length-check -----
type UnicornExplicitLengthCheck = []|[{
  "non-zero"?: ("greater-than" | "not-equal")
}]
// ----- unicorn/explicit-timer-delay -----
type UnicornExplicitTimerDelay = []|[("always" | "never")]
// ----- unicorn/filename-case -----
type UnicornFilenameCase = []|[({
  
  case?: ("camelCase" | "camelCaseWithAcronyms" | "snakeCase" | "kebabCase" | "pascalCase")
  
  ignore?: (string | {
    [k: string]: unknown | undefined
  })[]
  
  multipleFileExtensions?: boolean
  
  checkDirectories?: boolean
  
  directoryRoots?: (string | {
    [k: string]: unknown | undefined
  })[]
} | {
  
  cases?: {
    
    camelCase?: boolean
    
    camelCaseWithAcronyms?: boolean
    
    snakeCase?: boolean
    
    kebabCase?: boolean
    
    pascalCase?: boolean
  }
  
  ignore?: (string | {
    [k: string]: unknown | undefined
  })[]
  
  multipleFileExtensions?: boolean
  
  checkDirectories?: boolean
  
  directoryRoots?: (string | {
    [k: string]: unknown | undefined
  })[]
})]
// ----- unicorn/id-match -----
type UnicornIdMatch = []|[string]|[string, {
  properties?: boolean
  classFields?: boolean
  onlyDeclarations?: boolean
  ignoreDestructuring?: boolean
  
  checkNamedSpecifiers?: boolean
}]
// ----- unicorn/import-style -----
type UnicornImportStyle = []|[{
  
  checkImport?: boolean
  
  checkDynamicImport?: boolean
  
  checkExportFrom?: boolean
  
  checkRequire?: boolean
  
  extendDefaultStyles?: boolean
  styles?: _UnicornImportStyle_ModuleStyles
}]
type _UnicornImportStyleStyles = (false | _UnicornImportStyle_BooleanObject) | undefined
interface _UnicornImportStyle_ModuleStyles {
  [k: string]: _UnicornImportStyleStyles | undefined
}
interface _UnicornImportStyle_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/indent -----
type UnicornIndent = []|[{
  
  indent?: ("tab" | number)
  
  tabWidth?: number
}]
// ----- unicorn/isolated-functions -----
type UnicornIsolatedFunctions = []|[{
  
  overrideGlobals?: {
    [k: string]: (boolean | ("readonly" | "writable" | "writeable" | "off")) | undefined
  }
  
  functions?: string[]
  
  selectors?: string[]
  
  comments?: string[]
}]
// ----- unicorn/iteration-fallback-style -----
type UnicornIterationFallbackStyle = []|[("guard" | "fallback")]
// ----- unicorn/key-name-casing -----
type UnicornKeyNameCasing = []|[{
  
  camelCase?: boolean
  
  PascalCase?: boolean
  
  SCREAMING_SNAKE_CASE?: boolean
  
  "kebab-case"?: boolean
  
  snake_case?: boolean
  
  ignore?: string[]
}]
// ----- unicorn/logical-assignment-operators -----
type UnicornLogicalAssignmentOperators = (([]|["always"]|["always", {
  enforceForIfStatements?: boolean
}] | ["never"]) & unknown[])
// ----- unicorn/max-nested-calls -----
type UnicornMaxNestedCalls = []|[{
  
  max?: number
}]
// ----- unicorn/name-replacements -----
type UnicornNameReplacements = []|[{
  
  checkProperties?: boolean
  
  checkVariables?: boolean
  
  checkDefaultAndNamespaceImports?: (boolean | string)
  
  checkShorthandImports?: (boolean | string)
  
  checkShorthandProperties?: boolean
  
  checkFilenames?: boolean
  
  extendDefaultReplacements?: boolean
  replacements?: _UnicornNameReplacements_NameReplacements
  
  extendDefaultAllowList?: boolean
  allowList?: _UnicornNameReplacements_BooleanObject
  
  ignore?: (string | {
    [k: string]: unknown | undefined
  })[]
}]
type _UnicornNameReplacementsReplacements = (false | _UnicornNameReplacements_BooleanObject) | undefined
interface _UnicornNameReplacements_NameReplacements {
  [k: string]: _UnicornNameReplacementsReplacements | undefined
}
interface _UnicornNameReplacements_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/no-array-callback-reference -----
type UnicornNoArrayCallbackReference = []|[{
  
  ignore?: string[]
}]
// ----- unicorn/no-array-reduce -----
type UnicornNoArrayReduce = []|[{
  
  allowSimpleOperations?: boolean
}]
// ----- unicorn/no-array-reverse -----
type UnicornNoArrayReverse = []|[{
  allowExpressionStatement?: boolean
}]
// ----- unicorn/no-array-sort -----
type UnicornNoArraySort = []|[{
  allowExpressionStatement?: boolean
}]
// ----- unicorn/no-break-in-nested-loop -----
type UnicornNoBreakInNestedLoop = []|[{
  
  checkContinue?: boolean
}]
// ----- unicorn/no-empty-file -----
type UnicornNoEmptyFile = []|[{
  
  allowComments?: boolean
}]
// ----- unicorn/no-immediate-mutation -----
type UnicornNoImmediateMutation = []|[{
  
  checkConditionals?: boolean
}]
// ----- unicorn/no-instanceof-builtins -----
type UnicornNoInstanceofBuiltins = []|[{
  useErrorIsError?: boolean
  strategy?: ("loose" | "strict")
  include?: string[]
  exclude?: string[]
}]
// ----- unicorn/no-invalid-argument-count -----
type UnicornNoInvalidArgumentCount = []|[{
  [k: string]: (number | [number, ...(number)[]] | {
    min?: number
    max?: number
  }) | undefined
}]
// ----- unicorn/no-keyword-prefix -----
type UnicornNoKeywordPrefix = []|[{
  
  disallowedPrefixes?: string[]
  
  checkProperties?: boolean
  
  onlyCamelCase?: boolean
}]
// ----- unicorn/no-negated-comparison -----
type UnicornNoNegatedComparison = []|[{
  
  checkLogicalExpressions?: boolean
}]
// ----- unicorn/no-non-function-verb-prefix -----
type UnicornNoNonFunctionVerbPrefix = []|[{
  
  verbs?: string[]
  
  ignore?: (string | {
    [k: string]: unknown | undefined
  })[]
}]
// ----- unicorn/no-null -----
type UnicornNoNull = []|[{
  
  checkArguments?: boolean
  
  checkStrictEquality?: boolean
}]
// ----- unicorn/no-typeof-undefined -----
type UnicornNoTypeofUndefined = []|[{
  
  checkGlobalVariables?: boolean
}]
// ----- unicorn/no-unnecessary-parameters -----
type UnicornNoUnnecessaryParameters = []|[{
  
  minimumCallCount?: number
}]
// ----- unicorn/no-unnecessary-polyfills -----
type UnicornNoUnnecessaryPolyfills = []|[{
  
  targets?: (string | string[] | {
    [k: string]: unknown | undefined
  })
}]
// ----- unicorn/no-unreadable-array-destructuring -----
type UnicornNoUnreadableArrayDestructuring = []|[{
  
  maximumIgnoredElements?: number
}]
// ----- unicorn/no-useless-undefined -----
type UnicornNoUselessUndefined = []|[{
  
  checkArguments?: boolean
  
  checkArrowFunctionBody?: boolean
}]
// ----- unicorn/number-literal-case -----
type UnicornNumberLiteralCase = []|[{
  hexadecimalValue?: ("uppercase" | "lowercase")
}]
// ----- unicorn/numeric-separators-style -----
type UnicornNumericSeparatorsStyle = []|[{
  binary?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  octal?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  hexadecimal?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  number?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
    
    fractionGroupLength?: number
  }
  
  onlyIfContainsSeparator?: boolean
}]
// ----- unicorn/operator-assignment -----
type UnicornOperatorAssignment = []|[("always" | "never")]
// ----- unicorn/prefer-add-event-listener -----
type UnicornPreferAddEventListener = []|[{
  
  excludedPackages?: string[]
}]
// ----- unicorn/prefer-array-find -----
type UnicornPreferArrayFind = []|[{
  
  checkFromLast?: boolean
}]
// ----- unicorn/prefer-array-flat -----
type UnicornPreferArrayFlat = []|[{
  
  functions?: string[]
}]
// ----- unicorn/prefer-at -----
type UnicornPreferAt = []|[{
  
  getLastElementFunctions?: string[]
  
  checkAllIndexAccess?: boolean
}]
// ----- unicorn/prefer-combined-guards -----
type UnicornPreferCombinedGuards = []|[{
  
  checkCompoundConditions?: boolean
  
  checkMultiStatementBodies?: boolean
}]
// ----- unicorn/prefer-continue -----
type UnicornPreferContinue = []|[{
  
  maximumStatements?: number
  
  checkShortBodies?: boolean
}]
// ----- unicorn/prefer-dom-node-html-methods -----
type UnicornPreferDomNodeHtmlMethods = []|[{
  
  checkGetHTML?: boolean
  
  checkSetHTML?: boolean
}]
// ----- unicorn/prefer-early-return -----
type UnicornPreferEarlyReturn = []|[{
  
  maximumStatements?: number
  
  checkShortBodies?: boolean
}]
// ----- unicorn/prefer-export-from -----
type UnicornPreferExportFrom = []|[{
  
  checkUsedVariables?: boolean
}]
// ----- unicorn/prefer-https -----
type UnicornPreferHttps = []|[{
  
  ignore?: (string | {
    [k: string]: unknown | undefined
  })[]
}]
// ----- unicorn/prefer-includes-over-repeated-comparisons -----
type UnicornPreferIncludesOverRepeatedComparisons = []|[{
  
  minimumComparisons?: number
}]
// ----- unicorn/prefer-minimal-ternary -----
type UnicornPreferMinimalTernary = []|[{
  
  checkVaryingBase?: boolean
  
  checkComputedMemberAccess?: boolean
}]
// ----- unicorn/prefer-number-properties -----
type UnicornPreferNumberProperties = []|[{
  
  checkInfinity?: boolean
  
  checkNaN?: boolean
}]
// ----- unicorn/prefer-object-from-entries -----
type UnicornPreferObjectFromEntries = []|[{
  
  functions?: string[]
}]
// ----- unicorn/prefer-query-selector -----
type UnicornPreferQuerySelector = []|[{
  
  allowWithVariables?: boolean
}]
// ----- unicorn/prefer-queue-microtask -----
type UnicornPreferQueueMicrotask = []|[{
  
  checkSetImmediate?: boolean
  
  checkSetTimeout?: boolean
}]
// ----- unicorn/prefer-set-has -----
type UnicornPreferSetHas = []|[{
  
  minimumItems?: number
}]
// ----- unicorn/prefer-short-arrow-method -----
type UnicornPreferShortArrowMethod = []|[("always" | "consistent-as-needed")]
// ----- unicorn/prefer-simplified-conditions -----
type UnicornPreferSimplifiedConditions = []|[{
  
  negatedConditions?: ("simplify" | "expand")
}]
// ----- unicorn/prefer-single-call -----
type UnicornPreferSingleCall = []|[{
  
  ignore?: string[]
}]
// ----- unicorn/prefer-string-repeat -----
type UnicornPreferStringRepeat = []|[{
  
  minimumRepetitions?: number
}]
// ----- unicorn/prefer-structured-clone -----
type UnicornPreferStructuredClone = []|[{
  
  functions?: string[]
}]
// ----- unicorn/prefer-switch -----
type UnicornPreferSwitch = []|[{
  
  minimumCases?: number
  
  emptyDefaultCase?: ("no-default-comment" | "do-nothing-comment" | "no-default-case")
}]
// ----- unicorn/prefer-temporal -----
type UnicornPreferTemporal = []|[{
  
  checkDateNow?: boolean
  
  checkReferences?: boolean
  
  checkMethods?: boolean
}]
// ----- unicorn/prefer-ternary -----
type UnicornPreferTernary = []|[("always" | "only-single-line")]
// ----- unicorn/relative-url-style -----
type UnicornRelativeUrlStyle = []|[("never" | "always")]
// ----- unicorn/require-css-escape -----
type UnicornRequireCssEscape = []|[{
  
  checkAllSelectors?: boolean
}]
// ----- unicorn/require-frontmatter-fields -----
type UnicornRequireFrontmatterFields = []|[{
  
  fields?: string[]
}]
// ----- unicorn/single-line-block-comment-style -----
type UnicornSingleLineBlockCommentStyle = []|[("multiline" | "single-line")]|[("multiline" | "single-line"), {
  
  ignore?: (string | {
    [k: string]: unknown | undefined
  })[]
}]
// ----- unicorn/string-content -----
type UnicornStringContent = []|[{
  
  patterns?: {
    [k: string]: (string | {
      suggest: string
      fix?: boolean
      caseSensitive?: boolean
      message?: string
    }) | undefined
  }
  
  selectors?: string[]
}]
// ----- unicorn/switch-case-braces -----
type UnicornSwitchCaseBraces = []|[("always" | "avoid" | "single-statement")]
// ----- unicorn/template-indent -----
type UnicornTemplateIndent = []|[{
  
  indent?: (string | number)
  
  tags?: string[]
  
  functions?: string[]
  
  selectors?: string[]
  
  comments?: string[]
}]
// ----- unicorn/text-encoding-identifier-case -----
type UnicornTextEncodingIdentifierCase = []|[{
  
  withDash?: boolean
}]
// ----- unicorn/try-complexity -----
type UnicornTryComplexity = []|[{
  
  max?: number
}]
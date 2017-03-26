const postcssCLIConfig = require('./postcss-cli');

const order = postcssCLIConfig['postcss-sorting']['sort-order'][2];

module.exports = {
  'plugins': [
    'stylelint-order'
  ],
  'rules': {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin'] }],
    'block-no-empty': true,
    'color-hex-case': 'lower',
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'function-comma-space-after': 'always',
    'function-url-quotes': 'always',
    'indentation': [2, { ignore: ['value'] }],
    'length-zero-no-unit': true,
    'max-nesting-depth': [3, { 'ignore': ['blockless-at-rules'] }],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,
    'order/properties-order': [order, { unspecified: 'bottom' }],
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-no-id': true,
    'selector-no-qualifying-type': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'string-no-newline': true,
    'string-quotes': 'double',
    'time-min-milliseconds': 100,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true
  }
};

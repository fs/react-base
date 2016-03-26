import autoprefixer from 'autoprefixer';
import postcssSorting from 'postcss-sorting';
import postcssInlineComment from 'postcss-inline-comment';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssColorFunction from 'postcss-color-function';
import postcssPxtorem from 'postcss-pxtorem';

import postcssSortingConfig from './sorting';
import postcssGlobalVariables from './variables';

export default function() {
  return [
    // postcssSorting(postcssSortingConfig),
    postcssInlineComment,
    postcssImport,
    postcssMixins,
    postcssNested,
    postcssSimpleVars({
      variables: postcssGlobalVariables
    }),
    postcssColorFunction,
    postcssPxtorem({
      root_value: 13,
      replace: false
    }),
    autoprefixer({ browsers: ['last 2 versions'] })
  ];
}

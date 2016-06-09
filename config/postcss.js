import autoprefixer from 'autoprefixer';
import postcssInlineComment from 'postcss-inline-comment';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssColorFunction from 'postcss-color-function';
import postcssPxtorem from 'postcss-pxtorem';

const variables = {
  'screen-xs': '480px',
  'screen-sm': '768px',
  'screen-md': '992px',
  'screen-lg': '1200px',
  'default-grey': '#e7e7e7'
};

export default function() {
  return [
    postcssInlineComment,
    postcssImport,
    postcssMixins,
    postcssNested,
    postcssSimpleVars({
      variables
    }),
    postcssColorFunction,
    postcssPxtorem({
      root_value: 13,
      replace: false
    }),
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ];
}

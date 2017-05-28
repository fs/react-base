const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssColorFunction = require('postcss-color-function');
const postcssPxtorem = require('postcss-pxtorem');

const variables = {
  'screen-xs': '480px',
  'screen-sm': '768px',
  'screen-md': '992px',
  'screen-lg': '1200px',
  'default-grey': '#e7e7e7'
};

module.exports = () => ({
  plugins: [
    postcssImport({
      addDependencyTo: webpack
    }),
    postcssMixins,
    postcssNested,
    postcssSimpleVars({
      variables
    }),
    postcssColorFunction,
    postcssPxtorem,
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
});

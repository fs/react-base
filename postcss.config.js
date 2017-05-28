const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssExtend = require('postcss-extend');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssColorFunction = require('postcss-color-function');
const postcssPxtorem = require('postcss-pxtorem');

module.exports = () => ({
  plugins: [
    postcssImport({
      addDependencyTo: webpack
    }),
    postcssMixins,
    postcssNested,
    postcssExtend,
    postcssSimpleVars,
    postcssColorFunction,
    postcssPxtorem,
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
});

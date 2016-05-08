# Skeleton for React based application

[![Build Status](https://travis-ci.org/fs/react-base.svg?branch=master)](https://travis-ci.org/fs/react-base)
[![Dependency Status](https://david-dm.org/fs/react-base.svg?branch=master)](https://david-dm.org/fs/react-base)
[![devDependency Status](https://david-dm.org/fs/react-base/dev-status.svg?branch=master)](https://david-dm.org/fs/react-base#info=devDependencies)

Kick-start your new web application based on React and Flux technologies. It also includes Gulp, Webpack, React hot loader, PostCSS, JSON-server tools for even more rapid development.

## NPM Dependencies:
    "alt"
    "alt-utils"
    "bootstrap"
    "core-decorators"
    "deep-assign"
    "es6-promise"
    "react"
    "react-addons-css-transition-group"
    "react-bootstrap"
    "react-dom"
    "react-router"
    "whatwg-fetch"

## NPM Dev Dependencies:
    "autoprefixer"
    "babel-core"
    "babel-eslint"
    "babel-loader"
    "babel-plugin-transform-decorators-legacy"
    "babel-preset-es2015"
    "babel-preset-react"
    "babel-preset-stage-0"
    "connect"
    "connect-history-api-fallback"
    "css-loader"
    "dotenv"
    "eslint-plugin-react"
    "extract-text-webpack-plugin"
    "file-loader"
    "gulp"
    "gulp-eslint"
    "gulp-json-srv"
    "gulp-jsonlint"
    "gulp-postcss"
    "gutil"
    "html-webpack-plugin"
    "lodash"
    "postcss-color-function"
    "postcss-import"
    "postcss-inline-comment"
    "postcss-loader"
    "postcss-mixins"
    "postcss-nested"
    "postcss-pxtorem"
    "postcss-reporter"
    "postcss-simple-vars"
    "postcss-sorting"
    "react-hot-loader"
    "require-dir"
    "run-sequence"
    "serve-static"
    "style-loader"
    "stylelint"
    "stylelint-statement-max-nesting-depth"
    "url-loader"
    "webpack"
    "webpack-dev-server"

## Install
### OSX

Install Node.js

Via brew:
```bash
brew install node
```

Via nvm:
```bash
brew install nvm
nvm install node
nvm alias default node
```

## Quick start

Clone application as new project with original repository named "react-base"

```bash
git clone git@github.com:fs/react-base.git --origin react-base [MY-NEW-PROJECT]
```

Create your new repo on GitHub and push master into it.
Make sure master branch is tracking origin repo.

```bash
git remote add origin git@github.com:[MY-GITHUB-ACCOUNT]/[MY-NEW-PROJECT].git
git push -u origin master
```

Run bootstrap script

```bash
bin/setup
```

## Run application

Run app (by default environment is 'development', port is 8000)

```bash
gulp
```

Run app with options

```bash
[<options>] gulp
```

```bash
NODE_ENV=development # build app with development environment
NODE_ENV=production # build app with production environment
NODE_ENV=test # build app with test environment
PORT=8000 # run server on 8000 port
```

Start to use application in browser:

```bash
localhost:8000
```

## Code linting tasks

Run javascript linter
```bash
gulp eslint
```

Run json linter
```bash
gulp jsonlint
```

Run stylesheets linter
```bash
gulp stylelint
```

## Credits

React base is maintained by [Marat Fakhreev](http://github.com/maratfakhreev).
It was written by [Flatstack](http://www.flatstack.com) with the help of our
[contributors](http://github.com/fs/react-base/contributors).

[<img src="http://www.flatstack.com/logo.svg" width="100"/>](http://www.flatstack.com)

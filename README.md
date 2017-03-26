# Skeleton for React based application

[![Build Status](https://travis-ci.org/fs/react-base.svg?branch=master)](https://travis-ci.org/fs/react-base)
[![Dependency Status](https://david-dm.org/fs/react-base.svg?branch=master)](https://david-dm.org/fs/react-base)
[![devDependency Status](https://david-dm.org/fs/react-base/dev-status.svg?branch=master)](https://david-dm.org/fs/react-base#info=devDependencies)

Kick-start your new web application based on React and Redux technologies. It also includes Webpack 2, React hot loader, PostCSS, JSON-server tools for even more rapid development.

## Dependencies:

List of all dependencies is presented [here](https://github.com/fs/react-base/blob/master/package.json)

## Install
### OSX

Install Node.js

Via brew:
```bash
brew install node yarn
```

Via nvm:
```bash
brew install nvm yarn
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
yarn start
```

Run app with options

```bash
[<options>] yarn start
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

## Run tests and linters

```bash
yarn test
```

## Code linting tasks

Run javascript linter
```bash
yarn run eslint
```

Run stylesheets linter
```bash
yarn run stylelint
```

Run all linters
```bash
yarn run lint
```

## Test tasks

Run jest tests
```bash
yarn run jest
```

## Credits

React base is maintained by [Marat Fakhreev](http://github.com/maratfakhreev).
It was written by [Flatstack](http://www.flatstack.com) with the help of our
[contributors](http://github.com/fs/react-base/contributors).

[<img src="http://www.flatstack.com/logo.svg" width="100"/>](http://www.flatstack.com)

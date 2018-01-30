# Changelog

## Unreleased
- Introduce async/await for async requests. Use axios instead of j-fetch. Move json-server logic to separated module
([#100](https://github.com/fs/react-base/pull/100))
- Add "env" preset and move some plugins to production environment
([#98](https://github.com/fs/react-base/pull/98))
- Setup HMR for reducers
([#96](https://github.com/fs/react-base/pull/96))
- Setup env variable usage on client side
([#95](https://github.com/fs/react-base/pull/95))
- Require reducers automatically via webpack require.context
([#94](https://github.com/fs/react-base/pull/94))

## 2.0.0 - 2017-11-12
- Upgrade Node.js to version 9. Update hmr setup code regarding to webpack 3
([#92](https://github.com/fs/react-base/pull/92))
- Remove mirror-creator. Move constants declaration to actions. Refactor actions and reducers.
([#91](https://github.com/fs/react-base/pull/91))
- Add test environment, snapshot and unit tests. Refactor containers.
([#79](https://github.com/fs/react-base/pull/79))
- Upgrade dependencies. Remove react-transition-group. Remove webpack-dashboard
([#88](https://github.com/fs/react-base/pull/88))
- Add localization using i18next and react-i18next
([#83](https://github.com/fs/react-base/pull/83))
- Use j-fetch library as main request library
([#85](https://github.com/fs/react-base/pull/85))
- Use major version of Node.js in .nvmrc and package.json
([#82](https://github.com/fs/react-base/pull/82))
- Cleanup postcss config
([#81](https://github.com/fs/react-base/pull/81))
- Refactor stylesheets. Add react-transition-group, postcss-extend
([#80](https://github.com/fs/react-base/pull/80))
- Remove deprecated postcss-inline-comment and react-addons-css-transition-group.
([#80](https://github.com/fs/react-base/pull/80))
- Upgrade dependencies
([#80](https://github.com/fs/react-base/pull/80))
- Upgrade dependencies
([#77](https://github.com/fs/react-base/pull/77))
- Make improvements in the http lib
([#77](https://github.com/fs/react-base/pull/77))
- Use stylelint-config-fs for linting CSS
([#76](https://github.com/fs/react-base/pull/76))
- Migrate to React 15.5.x
([#76](https://github.com/fs/react-base/pull/76))
- Upgrade dependencies
([#76](https://github.com/fs/react-base/pull/76))
- Upgrade Node.js to 7.8.x
([#68](https://github.com/fs/react-base/pull/68))
- Upgrade dependencies
([#68](https://github.com/fs/react-base/pull/68))
- Cleanup eslint config
([#68](https://github.com/fs/react-base/pull/68))
- Introduce Redux as a main unidirectional architecture realization
([#60](https://github.com/fs/react-base/pull/60))
- Introduce custom http lib based on fetch-api as a main tool for server requests
([#60](https://github.com/fs/react-base/pull/60))
- Introduce yarn
([#67](https://github.com/fs/react-base/pull/67))

## 1.1.0 - 2017-01-24
- Upgrade dependencies
([#65](https://github.com/fs/react-base/pull/65))
- Upgrade Node.js to 7.4.x
([#63](https://github.com/fs/react-base/pull/63))
- Add transform-react-constant-elements, transform-react-inline-elements babel plugins
([#63](https://github.com/fs/react-base/pull/63))
- Setup jest as default testing framework instead of karma
([#63](https://github.com/fs/react-base/pull/63))
- Upgrade dependencies
([#63](https://github.com/fs/react-base/pull/63))
- Add webpack dashboard
([#63](https://github.com/fs/react-base/pull/63))
- Migrate to Webpack 2. Setup React-hot-loader 3
([#63](https://github.com/fs/react-base/pull/63))
- Upgrade Node.js to 7.2.x
([#62](https://github.com/fs/react-base/pull/62))
- Upgrade dependencies
([#62](https://github.com/fs/react-base/pull/62))
- Use eslint-config-fs for linting javascript
([#62](https://github.com/fs/react-base/pull/62))
- Upgrade Node.js to 6.7.x
([#57](https://github.com/fs/react-base/pull/57))
- Upgrade eslint rules
([#57](https://github.com/fs/react-base/pull/57))
- Upgrade dependencies
([#57](https://github.com/fs/react-base/pull/57))
- Add json loader. Cleanup webpack config files
([#57](https://github.com/fs/react-base/pull/57))
- Use react entities as self imported
([#56](https://github.com/fs/react-base/pull/56))

## 1.0.0 - 2016-09-15
- Upgrade dependencies
([#55](https://github.com/fs/react-base/pull/55))
- Upgrade dependencies
([#54](https://github.com/fs/react-base/pull/54))
- Add Todo Modal test
([#53](https://github.com/fs/react-base/pull/53))
- Add Sign Up Modal test
([#52](https://github.com/fs/react-base/pull/52))
- Add Sign In Modal test
([#51](https://github.com/fs/react-base/pull/51))
- Bring eslint rules to general view
([#50](https://github.com/fs/react-base/pull/50))
- Add assets compression.
([#49](https://github.com/fs/react-base/pull/49))
- Upgrade dependencies. Add new stylelint/eslint rules.
([#48](https://github.com/fs/react-base/pull/48))
- Upgrade Node.js to 6.5.x
([#47](https://github.com/fs/react-base/pull/47))
- Prefer camelCase to js files
([#47](https://github.com/fs/react-base/pull/47))
- Add new rules to stylelint config
([#47](https://github.com/fs/react-base/pull/47))
- Upgrade dependencies
([#46](https://github.com/fs/react-base/pull/46))
- Remove functions binding inside jsx
([#46](https://github.com/fs/react-base/pull/46))
- Upgrade Node.js to 6.4.x
([#44](https://github.com/fs/react-base/pull/44))
- Add .gitattributes to avoid merge conflicts
([#44](https://github.com/fs/react-base/pull/44))
- Upgrade dependencies. Simplify environment configs
([#43](https://github.com/fs/react-base/pull/43))
- Introduce appHistory service. Update custom request lib. Update routes helper
([#42](https://github.com/fs/react-base/pull/42))
- Extract session actions into session service
([#41](https://github.com/fs/react-base/pull/41))
- Add new rules in postcss sorting config
([#39](https://github.com/fs/react-base/pull/39))
- Upgrade Node.js to 6.3.x
([#38](https://github.com/fs/react-base/pull/38))
- Upgrade dependencies
([#37](https://github.com/fs/react-base/pull/37))
- Remove warnings in production build and update react-bootstrap
([#36](https://github.com/fs/react-base/pull/36))
- Add postcss sorting config and rule for stylelint properties order
([#35](https://github.com/fs/react-base/pull/35))
- Rewrite modals logic and add main Modals component. Clean up code
([#33](https://github.com/fs/react-base/pull/33))
- Upgrade dependencies
([#31](https://github.com/fs/react-base/pull/31))
- Add qs lib. Add ability to pass query parameters into request url
([#32](https://github.com/fs/react-base/pull/32))
- Add classnames utility for conditionally joining classNames together
([#32](https://github.com/fs/react-base/pull/32))
- Reorganize components structure
([#29](https://github.com/fs/react-base/pull/29))
- Change javascript files extensions from .jsx to .js
([#29](https://github.com/fs/react-base/pull/29))
- Fix stylesheets hot reloading issue
([#29](https://github.com/fs/react-base/pull/29))
- Fix issue related to server port for production server
([#28](https://github.com/fs/react-base/pull/28))
- Rewrite all scripts without usage of gulp. Remove gulp from project
([#27](https://github.com/fs/react-base/pull/27))
- Upgrade Node.js to 6.2.x
([#26](https://github.com/fs/react-base/pull/26))
- Lock core-decorators package version to avoid tests errors
- Upgrade dependencies
([#25](https://github.com/fs/react-base/pull/25))
- Upgrade dependencies
([#20](https://github.com/fs/react-base/pull/20))
- Upgrade es6-promise polyfill lib
([#19](https://github.com/fs/react-base/pull/19))
- Setup karma and jasmine for test environment
([#11](https://github.com/fs/react-base/pull/11))
- Upgrade Node.js version to 6.1.0
([#18](https://github.com/fs/react-base/pull/18))
- Remove stylelint-statement-max-nesting-depth since stylelint contains this option
([#17](https://github.com/fs/react-base/pull/17))
- Upgrade dependencies
([#17](https://github.com/fs/react-base/pull/17))
- Replace abstract actions/stores with their decorator analogs
([#12](https://github.com/fs/react-base/pull/12))
- Add lodash to the devDependencies to avoid problem with json-server's resolved lodash version
([#16](https://github.com/fs/react-base/pull/16))
- Add sign up functionality
([#8](https://github.com/fs/react-base/pull/8))
- Introduce abstract actions and stores
([#8](https://github.com/fs/react-base/pull/8))
- Introduce props validation for components
([#10](https://github.com/fs/react-base/pull/10))
- Upgrade Node.js version to 6.0.0
([#9](https://github.com/fs/react-base/pull/9))
- Replace deprecated Input on FormGroup in react-bootstrap
([#7](https://github.com/fs/react-base/pull/7))
- Implement sign in form validation
([#7](https://github.com/fs/react-base/pull/7))
- Fix setup script to avoid issue with application bootstraping
([#6](https://github.com/fs/react-base/pull/6))
- Upgrade dependencies
([#5](https://github.com/fs/react-base/pull/5))
- Upgrade React to 15.0.0
([#2](https://github.com/fs/react-base/pull/2))

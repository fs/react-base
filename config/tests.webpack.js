var testsContext = require.context('../app', true, /.test\.js$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('../app', true, /.*\/__tests__\/.*.js$/);
srcContext.keys().forEach(srcContext);

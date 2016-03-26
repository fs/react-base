var gulp = require('gulp');
var jsonServer = require('gulp-json-srv');

gulp.task('json-server', function () {
  jsonServer.start({
    port: 8001
  });
});

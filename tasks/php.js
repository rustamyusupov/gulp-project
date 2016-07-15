'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function php(options) {

  return function() {
    return gulp.src(options.src, {since: gulp.lastRun(php)})
      .pipe($.newer(options.build))
      .pipe($.debug({title: 'php'}))
      .pipe(gulp.dest(options.build));
  };

};

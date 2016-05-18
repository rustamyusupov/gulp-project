'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function ghpages(options) {

  return function() {
    return gulp.src(options.src)
      .pipe($.gh-pages());
  };

};

'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    requireDir = require('require-dir')('./gulp_tasks');

var $ = require('gulp-load-plugins')();
var config = require('./config.js');

gulp.task('server', function() {
    browserSync({
      notify: false,
      port: 9000,
      online: false,
      open: false,
      server: {
        baseDir: [config.server.baseDir]
      }
    });
});

gulp.task('watch', [
  'styles:watch',
  'js:watch',
  'icons:watch',
  'images:watch',
  'styleguide:watch',
  'mockups:watch'
]);

gulp.task('default', function(done) {
  runSequence(
    ['server', 'build'],
    'watch',
    done);
});

gulp.task('build', function(done) {
  runSequence(
    ['images', 'styles', 'js', 'icons'],
    ['styleguide', 'mockups'],
    done);
});

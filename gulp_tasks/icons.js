var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('../config.js');

gulp.task('icons', function() {
  return gulp.src(config.icons.src)
      .pipe(imagemin([
        imagemin.svgo({
          js2svg: {pretty: true},
          plugins: [{removeTitle: true}]
        })
      ]))
      .pipe(gulp.dest(config.icons.dest));
});

gulp.task('icons:watch', function() {
  gulp.watch(config.icons.src, ['icons'], reload);
});

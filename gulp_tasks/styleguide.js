'use strict';

var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    nn = require('node-notifier'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')(),
    config = require('../config.js');

var watchFiles = [config.styleguide.srcFiles, config.styles.srcFiles];

var srcMainFiles = config.styleguide.styles.srcFiles,
    dest = config.styleguide.styles.dest;

gulp.task('styleguide', function(done) {
    var hologram = spawn('hologram', [], { stdio: 'inherit' });

    hologram.on('close', function(code) {
        if (code > 0) {
          nn.notify({
            title: "styleguide",
            message: "Error de compilación, revisa la consola"
          });
          return done('Error al generar la guia de estilos');
        }
        return done();
    });
});

function errorHandler(error, error_type) {
	var notifier = new nn.NotificationCenter();
	notifier.notify({
		title: "¡¡ERROR!!",
		message: error.message
	});
	console.error("\n" + error.message);
	this.emit('end');
}

gulp.task('styleguide:styles', function () {
  var cb = gulp
    .src(srcMainFiles)
    .pipe($.plumber({ errorHandler: errorHandler }))
    .pipe($.sass({ precision: 10 }))
    .pipe($.autoprefixer('last 2 version', '> 1%', 'ie >= 8', 'Opera 12.1'))
    .pipe(gulp.dest(dest))
    .pipe($.notify("Compilación CSS terminada"));
  return cb;
});

gulp.task('styleguide:watch', function () {
  gulp.watch(watchFiles,
    ['styles', 'styleguide', reload]);
});

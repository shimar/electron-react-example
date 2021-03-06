'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

// gulp.task('jade', function() {
//   gulp.src('renderer/views/jade/**/*.jade')
//   .pipe($.jade({
//     pretty: true
//   }))
//   .pipe(gulp.dest('renderer/views'));
// });

gulp.task('styles', function() {
  return gulp.src('renderer/less/main.less')
          .pipe($.plumber())
          .pipe($.less({ paths: ['.'] }))
          .pipe(gulp.dest('renderer/styles'));
});

gulp.task('watch', function() {
  // gulp.watch('renderer/views/**/*.jade',  ['jade']);
  // gulp.watch('renderer/styles/**/*.less', ['styles']);
});

// gulp.task('run', [ 'jade', 'styles', 'watch' ], function() {
//   return $.run('electron .').exec();
// });

gulp.task('browserify', function() {
  return gulp.src('renderer/scripts/*.js')
    .pipe($.browserify({
      transform: ['reactify']
    }))
    .pipe($.rename('bundle.js'))
    .pipe(gulp.dest('renderer/scripts'))
});

gulp.task('build', ['browserify', 'styles'], function() {
  console.log('building done.');
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist', 'renderer/scripts/bundle.js']));

gulp.task('default', ['clean', 'build'], function () {
  console.log('this default task.');
});

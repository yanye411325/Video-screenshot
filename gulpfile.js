

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');



gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})


gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/css/**/*.css', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', function (callback) {
  runSequence(['browserSync', 'watch'],
    callback
  )
})
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function () {
  return gulp.src('./dist/**/*.js')
    .pipe(concat('star-rating.js'))
    .pipe(gulp.dest('./dist/element'));
});

gulp.task('rename', function () {
  return gulp.src('./dist/**/*.css')
    .pipe(rename('star-rating.css'))
    .pipe(gulp.dest('./dist/element'));
});

gulp.task('fonts', function() {
  return gulp.src(['./dist/star-rating/fontawesome-webfont.*'])
      .pipe(gulp.dest('./dist/element'));
})

gulp.task('default', ['concat', 'rename', 'fonts']);
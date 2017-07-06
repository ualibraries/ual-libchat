const postcss = require('gulp-postcss')
const gulp = require('gulp')

gulp.task('css', () => {
  return gulp.src('./src/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('./css'))
})

gulp.task('default', ['css'])

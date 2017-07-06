const connect = require('gulp-connect')
const localtunnel = require('localtunnel')
const postcss = require('gulp-postcss')
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('css', () => {
  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
})

gulp.task('serve', () => {
  const tunnel = localtunnel(8000, (err, tunnel) => {
    if (err) {
      console.error(err)
    }

    console.log(`\nStatic server running at ${tunnel.url}\n`)
    console.log(`Copy the following css into the 'Custom CSS' field:`)
    console.log(`@import url("${tunnel.url}/ual-libchat.css");\n`)
  })

  tunnel.on('close', () => {
    console.log(`Tunnels are closed`)
  })

  connect.server({
    root: 'css',
    port: 8000
  })
})

gulp.task('watch', ['serve'], () => {
  gulp.watch('./src/**/*.css', ['css'])
})

gulp.task('default', ['css'])

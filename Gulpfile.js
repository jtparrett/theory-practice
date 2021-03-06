const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sassGlob = require('gulp-sass-glob')

gulp.task('styles', function() {
    gulp.src('src/stylesheets/*.sass')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./src/'))
});

gulp.task('default',function() {
    gulp.watch('src/stylesheets/**/*.sass', ['styles'])
})
let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', ()=> {
  browserSync.init({
    server: "./app"
  });

  gulp.watch("app/scss/**/*.scss",  gulp.series('sass'));
  gulp.watch("app/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));

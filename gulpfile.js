var gulp =  require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var mustache = require('gulp-mustache');

//Copy all HTML to dist
gulp.task('copyHTML',function () {
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
});

//Optimize images
gulp.task('imagemin', function () {
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'));
});

//Minify JS
gulp.task('minifyJS',function () {
  gulp.src('src/assets/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/assets/js'));
});

//Compile SASS
gulp.task('sass',function () {
  gulp.src('src/assets/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/assets/css'));
});

//Copy Vendor
gulp.task('copyVendor',function() {
  gulp.src('src/vendor/**/*')
  .pipe(gulp.dest('dist/vendor/'));
});

//Copy fonts
gulp.task('copyFonts',function() {
  gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('default', [/*'copyHTML',*/ 'mustache', 'imagemin', 'minifyJS', 'sass', 'copyVendor','serve','watch']);

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: "./dist"
    });
});

//Convert template to html
gulp.task('mustache', function() {
    gulp.src('src/*.html')
        .pipe(mustache('src/data.json'))
        .pipe(gulp.dest('./dist'));
});

//Task to watch any changes in real time in Devlopment
gulp.task('watch',  function () {
  gulp.watch('src/assets/js/*.js', ['minifyJS']);
  gulp.watch('src/assets/img/*', ['imagemin']);
  gulp.watch('src/assets/scss/*.scss', ['sass']);
  gulp.watch('src/*.html', ['mustache']);
  // gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch(['src/index.html', 'src/assets/scss/*', 'src/assets/js/*']).on('change', browserSync.reload);
});

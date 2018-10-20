const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const imageMin    = require('gulp-imagemin');

gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('app/js'));
});

gulp.task('sass', function() {
    return gulp.src("src/css/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('views', function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("app/"));
});

gulp.task('fonts', function() {
    return gulp.src("src/css/fonts/*")
        .pipe(gulp.dest("app/css/fonts"));
});

gulp.task('images', function() {
    gulp.src('src/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('app/img'))
});

gulp.task('default', ['views', 'scripts', 'images', 'sass', 'fonts'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("src/css/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['scripts']).on('change', browserSync.reload);
    gulp.watch("src/img/*", ['images']).on('change', browserSync.reload);
    gulp.watch("src/*.html", ['views']).on('change', browserSync.reload);
});
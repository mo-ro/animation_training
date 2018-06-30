var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserify = require('browserify');


gulp.task('html', function() {
  gulp.src(['./dev/src/**/*.html', '!./dev/src/**/_*.html'])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(browser.reload({
    stream: true
  }))
});



gulp.task("sass", function() {
  gulp.src(["./*.scss", "!./node_modules/*"])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("."))
    .pipe(browser.reload({
      stream: true
    }))
});


// gulp.task("default", function() {
//   gulp.watch(["./"], ["js"]);
//   gulp.watch("./dev/src/style/**/*scss", ["sass"]);
// });



gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./"
    }
  });
});
gulp.task("js", function() {
  gulp.src(["./**/*.js", "!./node_modules/"])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
    // .pipe(uglify())
    .pipe(browser.reload({
      stream: true
    }))
});



gulp.task("default", ['server'], function() {
    gulp.watch(["./**/*.js", "!./node_modules/"], ["js"]);
  gulp.watch(["./**/*.scss", "!./node_modules/"], ["sass"]);
  gulp.watch(["./**/*.html", "!./node_modules/"], ["html"]);
});

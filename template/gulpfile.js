var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task("html", function() {
  gulp.src("**/*.html")
    .pipe(browser.reload({stream:true}))
});

gulp.task("sass", function() {
  gulp.src("**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("."))
    .pipe(browser.reload({stream:true}))
});

gulp.task("js", function() {
  gulp.src("**/*.js")
    .pipe(browser.reload({stream:true}))
});

gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("default",['server'], function() {
  gulp.watch("**/*.html",["html"]);
  gulp.watch("**/*.js",["js"]);
  gulp.watch("**/*.scss",["sass"]);
});
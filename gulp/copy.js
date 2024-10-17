// packages
const gulp = require("gulp");
const newer = require("gulp-newer");
const fileinclude = require("gulp-file-include");
const path = require("path");

// Copy fonts
function copyFonts() {
  return gulp
    .src("./fonts/**/*")
    .pipe(newer("./dist/fonts/"))
    .pipe(gulp.dest("./dist/fonts/"));
}

// Copy html
function copyHtml() {
  return gulp
    .src(["./**/*.html", "!./parts/**/*.html", "!./node_modules/**/*.html", "!./dist/**/*"])
    .pipe(fileinclude({
      context: {
        name: "html"
      },
      prefix: "@@",
      basepath: "@file"
    }))
    .pipe(newer({
      dest: path.resolve("./dist/"),
      ext: ".html"
    }))
    .pipe(gulp.dest(path.resolve("./dist/")));
}

//copy favicon
function copyFavicon() {
  return gulp
    .src(
      "./favicon/**/*")
    .pipe(gulp.dest("./dist/"));
}

function copyPhp() {
  return gulp
    .src(["./*.php", "!./node_modules/**/*.php"])
    .pipe(fileinclude({
      context: {
        name: "php"
      },
      prefix: "@@",
      basepath: "@file"
    }))
    .pipe(newer("./dist/"))
    .pipe(gulp.dest("./dist/"));
}

function copyPhpConfig() {
  return gulp
    .src("./config/**/*.php")
    .pipe(newer("./dist/"))
    .pipe(gulp.dest("./dist/config/"));
}

function copyPhpLib() {
  return gulp
    .src("./lib/**/*.php")
    .pipe(newer("./dist/"))
    .pipe(gulp.dest("./dist/lib/"));
}
function copyJs() {
  return gulp
    .src("./js/**/*.js")
    .pipe(newer("./dist/"))
    .pipe(gulp.dest("./dist/js_new/"));
}

// exports
module.exports = {
  copyFonts: copyFonts,
  copyHtml: copyHtml,
  copyFavicon: copyFavicon,
  copyPhp: copyPhp,
  copyPhpConfig: copyPhpConfig,
  copyPhpLib: copyPhpLib,
copyJs:copyJs
};
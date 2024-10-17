const gulp = require("gulp");

// packages
const uglify = require("gulp-uglify");
const eslint = require("gulp-eslint");
const webpack = require("webpack");
const webpackconfig = require("../webpack.config");
const webpackstream = require("webpack-stream");

// Lint scripts
function lint() {
    return gulp
        .src([
            "./js/components/**/*",
            "./js/app.js",
            "./gulpfile.js",
            "!./node_modules/"
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function build() {
    return (
        gulp
        .src([
            "./js/**/*",
            "!./node_modules/"
        ])
        .pipe(webpackstream(webpackconfig, webpack))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
    );
}

// exports (Common JS)
module.exports = {
    lint: lint,
    build: build
};
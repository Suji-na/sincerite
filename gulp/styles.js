// packages
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const purgecss = require("gulp-purgecss");
const gcmq = require("gulp-group-css-media-queries");

const combine = require("gulp-scss-combine");

// CSS task
function buildCss() {
    return gulp
        .src(["./scss/**/*.scss"])
        .pipe(sourcemaps.init())
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(
            sass({
                outputStyle: "expanded",
            }).on("error", sass.logError)
        )
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist/scss_new/"))
        .pipe(
            browserSync.stream({
                match: "**/*.css",
            })
        );
}

function minifyCSS() {
    return gulp
        .src("./scss/**/*.scss")
        .pipe(plumber())
        .pipe(
            sass({
                outputStyle: "expanded",
            }).on("error", sass.logError)
        )
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(
            rename({
                suffix: ".min",
            })
        )
        .pipe(
            cleanCSS({
                compatibility: "ie8",
            })
        )
        .pipe(gulp.dest("dist/scss_new"));
}
function purge() {
    return gulp
        .src("dist/**/*.css")
        .pipe(
            purgecss({
                content: ["dist/*.html", "dist/*.php"],
            })
        )
        .pipe(gcmq())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist/"));
}

// function cpyscss() {
//     return gulp
//         .src(["./scss/**/*.scss", "!./scss/**/_*.scss"])
//         .pipe(sourcemaps.init())
//         .pipe(
//             plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
//           )
//         .pipe(sass({
//             outputStyle: "expanded"
//         }).on("error", sass.logError))
//         .pipe(autoprefixer({
//             cascade: false
//         }))
//         .pipe(sourcemaps.write("./"))
//         .pipe(cssScss())
//         .pipe(gulp.dest("dist/scss/"));
// }
// exports
function copySass() {
    return gulp
        .src("./scss/**/*.scss")
        .pipe(combine())
        .pipe(gulp.dest("./dist/scss_new/"));
}


module.exports = {
    copySass: copySass,
    buildCss: buildCss,
    minifyCSS: minifyCSS,
    purge: purge,
    // cpyscss: cpyscss
};

// packages
const gulp = require("gulp");
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");


// Optimize Images
function optimizeImages() {
    return gulp
        .src("./images_new/**/*")
        .pipe(plumber())
        .pipe(newer("dist/images_new"))
        .pipe(
            imagemin([
                imagemin.gifsicle({
                    interlaced: true
                }),
                imagemin.jpegtran({
                    progressive: true
                }),
                // imagemin.optipng({
                //     optimizationLevel: 5
                // }),
                imagemin.svgo({
                    plugins: [{
                        removeViewBox: false,
                        collapseGroups: true
                    }]
                })
            ])
        )
        .pipe(gulp.dest("dist/images_new"));
}

// exports
module.exports = {
    optimizeImages: optimizeImages
};
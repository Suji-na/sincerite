//load plugins
const gulp = require("gulp");

// import tasks
const copy = require("./gulp/copy");
const clean = require("./gulp/clean");
const css = require("./gulp/styles");
const server = require("./gulp/browserSync");
const images = require("./gulp/images");
const js = require("./gulp/scripts");

// Watch files
function watchFiles() {
    gulp.watch("./scss/**/*", css.buildCss);
    gulp.watch("./js/**/*", scripts);
    gulp.watch("./images_new/**/*", images.optimizeImages);
    gulp.watch("./**/index.html", copy.copyHtml);
    gulp.watch("./fonts/**/*", copy.copyFonts);
    gulp.watch("./*.php", copy.copyPhp);
}

// define complex tasks
const scripts = gulp.series(js.lint, js.build);
const watch = gulp.parallel(watchFiles, server.init, server.reload);
const build = gulp.series(
    clean.all,
    gulp.parallel(copy.copyHtml,copy.copyJs, copy.copyFonts, copy.copyFavicon, copy.copyPhp, copy.copyPhpConfig, copy.copyPhpLib, css.copySass, css.buildCss, css.minifyCSS, images.optimizeImages, scripts)
);
const purge = gulp.series(scripts, css.purge); // Purge CSS with media query concat
const run = gulp.series(build, watch); // Merge Build and Watch command

// expose tasks to CLI
exports.run 	= run;
exports.build 	= build;
exports.watch 	= watch;
exports.purge 	= purge;
exports.default = build;
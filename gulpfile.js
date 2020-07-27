const { src, dest, task, series, parallel } = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify-es').default;
const del = require('del');

const clean = async function (cb) {
  return await del([
    'dist',
  ], cb);
}

const buildDev = function () {
  return src(["./**/*.js", "!node_modules/**/*.js", "!gulpfile.js", "!dist"])
    .pipe(babel({
      babelrc: false,
      "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-transform-modules-commonjs"]
    }))
    .pipe(dest('dist'));
}
const watchDev = function () {
  return watch(["./**/*.js", "!node_modules", "!gulpfile.js", "!dist"], buildDev)
}

const buildProd = function () {
  return src(["./**/*.js", "!node_modules/**/*.js", "!gulpfile.js", "!dist"])
    .pipe(babel({
      babelrc: false,
      "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-transform-modules-commonjs"]
    }))
    .pipe(uglify(/* options */))
    .pipe(dest('dist'));
}

let build = null
if (process.env.NODE_ENV === 'development') {
  build = parallel(buildDev, watchDev)
}
if (process.env.NODE_ENV === 'production') {
  build = parallel(buildProd)
}

task('default', series(clean, build));

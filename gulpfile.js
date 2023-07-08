const livereload = require("gulp-livereload");
const gulp = require("gulp");
// to move css
const cleanCSS = require('gulp-clean-css');
// to make all css in one file
const concat = require('gulp-concat');
// for the pug
const { src, dest } = require('gulp');
// for converting pug into html
const pug = require('gulp-pug');
// Minify JavaScript with terser.
const minify = require('gulp-minify');








function minifycss() {
  return gulp.src(['./src/public/stylesheets/css/style.css'])
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(concat('all.css'))
  .pipe(gulp.dest('dist'))
  .pipe(livereload());
}



function forPug() {
  return src(['./src/views/index.pug', './src/views/cart.pug', './src/views/index.pug', './src/views/products-list.pug', './src/views/edit-product.pug', './src/views/settings.pug', './src/views/not-found.pug'])
  .pipe(
    pug({})
  )
  .pipe(dest('./dist/views'))
  .pipe(livereload());
}



function minifyJs() {
  return gulp
  .src(['src/public/scripts/js/main.js', 'src/public/scripts/js/cart.js', 'src/public/scripts/js/product-page.js', 'src/public/scripts/js/edit-product.js', 'src/public/scripts/js/search-id.js', 'src/public/scripts/js/products.js'])
  .pipe(minify())
  .pipe(gulp.dest('dist'))
  .pipe(livereload());
}



// make the color thing with the promise



exports.default = function () {

  gulp.watch( ["./src/public/stylesheets/scss/style.scss"]  ,  minifycss );
  gulp.watch(["./src/views/index.pug", "./src/views/cart.pug", "./src/views/product.pug", "./src/views/products-list.pug", "./src/views/edit-product.pug", "./src/views/settings.pug", "./src/views/not-found.pug"], forPug)
  gulp.watch(["./src/public/scripts/js/main.js", "./src/public/scripts/js/cart.js", "./src/public/scripts/js/product-page.js", "src/public/scripts/js/edit-product.js", "src/public/scripts/js/search-id.js", "./src/public/scripts/js/products.js"], minifyJs)

}
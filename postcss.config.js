// postcss.config.js
module.exports = {
  plugins : [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
  ],
}
/*var postcss = require('gulp-postcss');
var gulp = require('gulp');

gulp.task('css', function() {
  return gulp.src('./src/*.css').pipe(postcss()).pipe(gulp.dest('./dest'));
});
*/

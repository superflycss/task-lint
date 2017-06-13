var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcss_reporter = require('postcss-reporter');
var stylelint = require('stylelint');
var stylelint_config = require('stylelint-config-standard');

var PLI = require('@superflycss/pli');

var processors = [stylelint(stylelint_config), postcss_reporter({
  clearMessages: true
})];

gulp.task('lint:css', function() {
  return gulp.src(PLI.TARGET_MAIN_CSS)
    .pipe(postcss(processors));
});

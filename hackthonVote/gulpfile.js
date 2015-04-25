//gulpfile.js
//require gulp module
var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('bundle-js', function(){
	return gulp.src('private/js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('public/javascripts'));
});


gulp.task('default', ['bundle-js']);
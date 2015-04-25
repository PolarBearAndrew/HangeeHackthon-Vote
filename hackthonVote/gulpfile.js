//
//require gulp module
//
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

//
//tasks
//
gulp.task('bundle-js', function(){
	return gulp.src('private/js/*.js')
		.pipe( concat('main.js') )
		.pipe( rename( { suffix : '.min' } ) )
		.pipe( uglify() )
		.pipe( gulp.dest('public/javascripts') )
})


gulp.task('default', ['bundle-js']);
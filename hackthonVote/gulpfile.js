//
//require gulp module
//
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var batch = require('gulp-batch'); 

//
//tasks
//
gulp.task('bundle-js', function () {
	return gulp.src('private/js/*.js')
		.pipe(concat('main.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('public/javascripts'))
})

gulp.task('watch', function () {
    watch('private/js/*.js', batch(function () {
        gulp.start('bundle-js').start('watch');
    }));
});


gulp.task('default', ['watch']);
//
//require gulp module
//
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');

var jshint = require('gulp-jshint');

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

//gulp.task('lint', function () {
//  gulp.src('./**/*.js')
//    .pipe(jshint())
//})

gulp.task('develop', function () {
  nodemon({ script: 'app.js'
          , ext: 'html js jade'
          , ignore: ['ignored.js']
					, tasks: ['bundle-js']})
    .on('restart', function () {
      console.log('--------  restarted  --------');
    });
})


gulp.task('default', [
	'develop']);
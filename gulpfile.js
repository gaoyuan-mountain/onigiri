var gulp = require('gulp');
var webserver  = require('gulp-webserver');

gulp.task('webserver', function () {
	gulp.src('./').pipe(webserver({
		host: 'localhost',
		port: 3000,
		path: '/',
		fallback: 'index.html'
	}));
});

gulp.task('default', function () {
	console.log('hello world');
});

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var karma = require('karma').server;

gulp.task('webserver', function () {
	gulp.src('./').pipe(webserver({
		host: 'localhost',
		port: 3000,
		path: '/',
		fallback: 'index.html'
	}));
});

gulp.task('test', function (done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done);
});

gulp.task('default', function () {
	console.log('hello world');
});

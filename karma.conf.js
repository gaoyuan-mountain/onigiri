// Karma configuration
// Generated on Fri Jul 03 2015 17:05:32 GMT+0800 (中国标准时间)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: './',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine', 'requirejs'],


		// list of files / patterns to load in the browser
		files: [
			{
				pattern: 'bower_components/**/*.js',
				included: false
			},
			{
				pattern: 'app/**/*.js',
				included: false
			},
			{
				pattern: 'test/**/*.spec.js',
				included: false
			},
			'test/main.js'
		],

		// list of files to exclude
		exclude: ['app/main.js'],

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		reporters: ['progress', 'coverage'],

		preprocessors: {
			'app/**/*.js': ['coverage']
		},

		plugins: [
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-requirejs',
			'karma-coverage'
		],

		// tell karma how you want the coverage results
		coverageReporter: {
			type: 'html',
			// where to store the report
			dir: 'coverage/'
		}
	})
}

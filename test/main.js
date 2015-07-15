var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}
console.log(tests);

requirejs.config({
	// Karma serves files from '/base'
	baseUrl: '/base/app',

	paths: {
		angular: '../bower_components/angular/angular.min',
		ngAnimate: '../bower_components/angular-animate/angular-animate.min',
		ngSanitize: '../bower_components/angular-sanitize/angular-sanitize.min',
		ngAria: '../bower_components/angular-aria/angular-aria.min',
		ngRoute: '../bower_components/angular-route/angular-route.min',
		ngUIRouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',
		ngBindonce: '../bower_components/angular-bindonce/bindonce.min',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',

		//all controllers
		appControllers: '../app/loader/controller.all',
		//all routes
		appRoutes: '../app/loader/route.all',

		startup: '../app/app'
	},

	shim: {
		angular: {
			exports: 'angular'
		},
		ngSanitize: {
			exports: 'ngSanitize',
			deps: ['angular']
		},
		ngAnimate: {
			exports: 'ngAnimate',
			deps: ['angular']
		},
		ngAria: {
			exports: 'ngAria',
			deps: ['angular']
		},
		angularMocks: {
			exports: 'angularMocks',
			deps: ['angular']
		},
		ngRoute: {
			exports: 'ngRoute',
			deps: ['angular']
		},
		ngUIRouter: {
			exports: 'ngUIRouter',
			deps: ['ngRoute']
		},
		ngBindonce: {
			exports: 'ngBindonce',
			deps: ['angular']
		},
		startup: {
			exports: 'startup',
			deps: [
				'angular', 'ngUIRouter', 'ngSanitize', 'ngBindonce'
			]
		}
	},

	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});

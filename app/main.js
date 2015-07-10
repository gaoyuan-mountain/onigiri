require.config({
	baseUrl: '/',
	paths: {
		angular: '../bower_components/angular/angular.min',
		ngAnimate: '../bower_components/angular-animate/angular-animate.min',
		ngSanitize: '../bower_components/angular-sanitize/angular-sanitize.min',
		ngAria: '../bower_components/angular-aria/angular-aria.min',
		ngMaterial: '../bower_components/angular-material/angular-material.min',
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
		ngMaterial: {
			exports: 'ngMaterial',
			deps: ['angular', 'ngAnimate', 'ngAria']
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
				'angular', 'ngUIRouter', 'ngSanitize', 'ngBindonce', 'ngMaterial'
			]
		}
	}
});

require(['startup'], function (app) {
	app.startup();
});
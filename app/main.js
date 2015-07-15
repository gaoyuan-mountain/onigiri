require.config({
	baseUrl: '/',
	paths: {
		angular: '../bower_components/angular/angular.min',
		ngAnimate: '../bower_components/angular-animate/angular-animate.min',
		ngSanitize: '../bower_components/angular-sanitize/angular-sanitize.min',
		ngRoute: '../bower_components/angular-route/angular-route.min',
		ngUIRouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',
		ngBindonce: '../bower_components/angular-bindonce/bindonce.min',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		ngStrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
		
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
		ngStrap: {
			exports: "ngStrap",
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
				'angular', 'ngAnimate', 'ngUIRouter', 'ngSanitize', 'ngBindonce', 'ngStrap'
			]
		}
	}
});

require(['startup'], function (app) {
	app.startup();
});
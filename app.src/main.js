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
		
		//all controllers
		appControllers: '../app.src/loader/controller.all',
		//all routes
		appRoutes: '../app.src/loader/route.all',
		
		startup: '../app.src/app'
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
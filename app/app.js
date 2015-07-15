define([
	'angular',
	'appControllers',
	'appRoutes'
], function (angular, controllers, routes) {
	return {
		startup: function () {
			angular.module('Controllers', []);
			angular.module('Directives', []);
			angular.module('Services', []);
			angular.module('Filters', []);
			angular.module('Routes', ['ui.router']);
			angular.module('app', [
				'ngSanitize',
				//'ngAnimate',
				'ui.bootstrap',
				'pasvaz.bindonce',
				'Controllers',
				'Directives',
				'Services',
				'Filters',
				'Routes'
			]).config([
				'$locationProvider',
				function ($locationProvider) {
					//$locationProvider.html5Mode(true);
				}
			]);

			controllers.inject();
			routes.inject();

			angular.element(document).ready(function () {
				angular.bootstrap(document, ['app']);
			});
		}
	};
});

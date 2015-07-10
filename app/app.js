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
				'ngMaterial',
				'pasvaz.bindonce',
				'Controllers',
				'Directives',
				'Services',
				'Filters',
				'Routes'
			]).config([
				'$locationProvider',
				'$mdThemingProvider',
				function ($locationProvider, $mdThemingProvider) {
					$locationProvider.html5Mode(true);

					$mdThemingProvider.theme('default')
						.primaryPalette('pink')
						.accentPalette('orange');
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

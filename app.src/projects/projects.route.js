define([], function () {
	return {
		inject: function () {
			var module = angular.module('Routes');
			module.config([
				'$stateProvider',
				'$urlRouterProvider',
				function ($stateProvider, $urlRouterProvider) {
					$stateProvider
						.state('projects', {
						url: '/projects',
						templateUrl: 'app.src/projects/projects.html'
					});
				}
			]);
		}
	};
});

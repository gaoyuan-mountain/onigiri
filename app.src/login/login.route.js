define([], function () {
	return {
		inject: function () {
			var module = angular.module('Routes');
			module.config([
				'$stateProvider',
				'$urlRouterProvider',
				function ($stateProvider, $urlRouterProvider) {
					$stateProvider
						.state('login', {
						url: '/login',
						templateUrl: 'app.src/login/login.html'
					})
						.state('default', {
						url: '/',
						templateUrl: 'app.src/login/login.html'
					});
				}
			]);
		}
	};
});

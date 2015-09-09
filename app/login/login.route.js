module.exports = {
	inject: function () {
		var module = angular.module('Routes');
		module.config([
			'$stateProvider',
			'$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				$stateProvider
					.state('login', {
					url: '/login',
					templateUrl: 'app/login/login.html'
				})
					.state('default', {
					url: '/',
					templateUrl: 'app/login/login.html'
				});
			}
		]);
	}
};

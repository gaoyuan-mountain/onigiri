'use strict';

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
					templateUrl: 'partials/login'
				})
				.state('default', {
					url: '/',
					templateUrl: 'partials/login'
				});
			}
		]);
	}
};

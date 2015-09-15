'use strict';

module.exports = {
	inject: function () {
		var module = angular.module('Routes');
		module.config([
			'$stateProvider',
			'$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				$stateProvider
					.state('milestone', {
						url: '/milestone',
						templateUrl: 'partials/milestone/index'
					});
			}
		]);
	}
};

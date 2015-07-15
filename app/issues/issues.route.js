define([], function () {
	return {
		inject: function () {
			var module = angular.module('Routes');
			module.config([
				'$stateProvider',
				'$urlRouterProvider',
				function ($stateProvider, $urlRouterProvider) {
					$stateProvider
						.state('issues', {
							url: '/issues',
							templateUrl: 'app/issues/issues.html'
						})
						.state('issues.list', {
							url: '/:id',
							templateUrl: 'app/issues/list/list.html'	
						});
				}
			]);
		}
	};
});

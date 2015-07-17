define([], function () {
	return {
		inject: function () {
			var module = angular.module('Routes');
			module.config([
				'$stateProvider',
				'$urlRouterProvider',
				function ($stateProvider, $urlRouterProvider) {
					$stateProvider
						.state('milestone', {
							url: '/milestone',
							templateUrl: 'app/milestone/milestone.html'
						})
						.state('issues.detail', {
							url: '/:id',
							templateUrl: 'app/issues/list/list.html'	
						});
				}
			]);
		}
	};
});

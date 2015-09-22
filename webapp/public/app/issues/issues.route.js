module.exports = {
	inject: function () {
		var module = angular.module('Routes');
		module.config([
			'$stateProvider',
			'$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				$stateProvider
					.state('issues', {
						url: '/issues',
						templateUrl: '/app/issues/index.html'
					})
					.state('issues.list', {
						url: '/:projectId',
						templateUrl: '/app/issues/list.html'
					})
					.state('issues.detail', {
						url: '/:projectId/detail/:issueId',
						templateUrl: '/app/issues/detail.html'
					})
					.state('issues.create', {
						url: '/:projectId/create',
						templateUrl: '/app/issues/create.html'
					});
			}
		]);
	}
};

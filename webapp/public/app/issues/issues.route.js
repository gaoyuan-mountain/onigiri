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
						templateUrl: 'partials/issues/index'
					})
					.state('issues.list', {
						url: '/:projectId',
						templateUrl: 'partials/issues/list'
					})
					.state('issues.detail', {
						url: '/:projectId/detail/:issueId',
						templateUrl: 'partials/issues/detail'
					})
					.state('issues.create', {
						url: '/:projectId/create',
						templateUrl: 'partials/issues/create'
					});
			}
		]);
	}
};

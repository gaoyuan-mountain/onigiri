'use strict';

module.exports = {
	inject: function () {
		var module = angular.module('Routes');
		module.config([
			'$stateProvider',
			'$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				$stateProvider
					.state('project', {
						url: '/project',
						templateUrl: 'partials/project'
					})
					.state('project.list', {
						url: '/list',
						templateUrl: 'partials/project/list'
					})
					.state('project.create', {
						url: '/create',
						templateUrl: 'partials/project/create'
					});
			}
		]);
	}
};

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
						templateUrl: '/app/project/project.html'
					})
					.state('project.list', {
						url: '/list',
						templateUrl: '/app/project/list/list.html'
					})
					.state('project.create', {
						url: '/create',
						templateUrl: '/app/project/create/create.html'
					});
			}
		]);
	}
};

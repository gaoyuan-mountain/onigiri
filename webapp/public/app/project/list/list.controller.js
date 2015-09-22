'use strict';

module.exports = {
	inject: function () {
		var module = angular.module('Controllers');
		module.controller('projectListController', [
			'$scope',
			'ProjectService',
			function ($scope, ProjectService) {
				$scope.projects = [];

				$scope.getAllProjects = function () {
					ProjectService.getAll().then(function (response) {
						$scope.projects = response.data || [];
					});
				};

				$scope.getAllProjects();
			}
		]);
	}
};
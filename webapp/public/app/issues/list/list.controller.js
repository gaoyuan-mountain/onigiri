'use strict';

module.exports = {
	inject: function () {
		var module = angular.module('Controllers');
		module.controller('issuesListController', [
			'$scope',
			'$state',
			'$stateParams',
			function ($scope, $state, $stateParams) {
				$scope.openIssueDetail = function (issueId) {
					$state.go('issues.detail', {
						projectId: $stateParams.projectId,
						issueId: issueId
					});
				};

				$scope.openIssueCreate = function () {
					$state.go('issues.create', {
						projectId: $stateParams.projectId
					});
				};
			}
		]);
	}
};

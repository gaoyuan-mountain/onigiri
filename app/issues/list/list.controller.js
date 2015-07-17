define([], function () {
	return {
		inject: function () {
			var module = angular.module('Controllers');
			module.controller('issuesListController', [
				'$scope',
				'$modal',
				function ($scope, $modal) {
					$scope.openIssueDetail = function (issueId) {
						var modalInstance = $modal.open({
							windowClass: 'issue-edit-popover',
							templateUrl: 'app/issues/detail/detail.html',
							controller: 'issuesDetailController',
							size: 'lg',
							resolve: {
								data: issueId
							}
						});
					};
				}
			]);
		}
	};
});

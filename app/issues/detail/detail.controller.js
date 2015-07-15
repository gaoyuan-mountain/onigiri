define([], function () {
	return {
		inject: function () {
			var module = angular.module('Controllers');
			module.controller('issuesDetailController', [
				'$scope',
				'$modal',
				'$modalInstance',
				'data',
				function ($scope, $modal, $modalInstance, data) {
					$scope.issue = {
						assignee: null
					};
					$scope.members = [
						{id: 0, name: 'gaoyuan', email: 'dp.gaoyuan@gmail.com', figure: 0},
						{id: 0, name: 'wufang', email: 'dp.gaoyuan@gmail.com', figure: 1},
						{id: 0, name: 'fantuan', email: 'dp.gaoyuan@gmail.com', figure: 2},
						{id: 0, name: 'shixi', email: 'dp.gaoyuan@gmail.com', figure: 3}
					];

					$scope.cancel = function () {
						$modalInstance.dismiss();
					};
				}
			]);
		}
	};
});

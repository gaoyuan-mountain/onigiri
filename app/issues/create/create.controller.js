'use strict';

module.exports = {
	inject: function () {
		var module = angular.module('Controllers');
		module.controller('issuesCreateController', [
			'$scope',
			'$state',
			'$stateParams',
			function ($scope, $state, $stateParams) {
				$scope.issue = {
					assignee: null
				};

				$scope.issueStausConfig = [
					{name: 'Open', active: true},
					{name: 'Doing', active: false},
					{name: 'Checking', active: false},
					{name: 'Closed', active: false}
				];

				$scope.members = [{
					id: 0,
					name: 'gaoyuan',
					email: 'dp.gaoyuan@gmail.com',
					figure: '/style/image/avatar.png'
				}, {
					id: 0,
					name: 'wufang',
					email: 'dp.gaoyuan@gmail.com',
					figure: '/style/image/avatar2.png'
				}, {
					id: 0,
					name: 'fantuan',
					email: 'dp.gaoyuan@gmail.com',
					figure: '/style/image/avatar3.png'
				}, {
					id: 0,
					name: 'shixi',
					email: 'dp.gaoyuan@gmail.com',
					figure: '/style/image/avatar4.png'
				}];

				$scope.cancel = function () {
					$state.go('issues.list', {
						projectId: $stateParams.projectId
					})
				};

				$scope.selectAssignee = function (member) {
					if ($scope.assignee === member) {
						$scope.assignee = null;
					} else {
						$scope.assignee = member;
					}
				};
			}
		]);
	}
};

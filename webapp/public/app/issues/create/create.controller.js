'use strict';

module.exports = {
	inject: function () {
		var module = angular.module('Controllers');
		module.controller('issuesCreateController', [
			'$scope',
			'$state',
			'$stateParams',
			'IssueService',
			function ($scope, $state, $stateParams, IssueService) {
				$scope.issue = IssueService.instance();

				$scope.issueStatusConfig = [
					{name: 'Open', active: true, val: 0},
					{name: 'Doing', active: false, val: 1},
					{name: 'Checking', active: false, val: 2},
					{name: 'Closed', active: false, val: 3}
				];
				
				$scope.browsers = [
					{name: 'Chrome'}, {name: 'Firefox'}, {name: 'Safari'}, 
					{name: '360'}, {name: 'IE'}, {name: 'Sougou'}
				];
				
				$scope.attachment = null;

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
				
				$scope.addBrowser = function () {
					$scope.issue.props.browsers.push({
						name: 'Chrome',
						version: '',
						system: ''
					});
				};

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
				
				$scope.$watch('attachment', function (attachment) {
					if (!attachment) {
						return;
					}
					IssueService.uploadAttachment(attachment).then(function (response) {
						console.log(response);
					});
				});
			}
		]);
	}
};

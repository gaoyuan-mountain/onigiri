'use strict';

module.exports = {
	inject: function () {
		var module = angular.module('Controllers');
		module.controller('projectCreateController', [
			'$scope',
			'ProjectService',
			'$state',
			function ($scope, ProjectService, $state) {
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

				$scope.project = ProjectService.instance({});

				$scope.create = function () {
					ProjectService.create($scope.project).then(function (response) {
						if (response.data._id) {
							$state.go('project.list');
						}
					});
				};
			}
		]);
	}
};
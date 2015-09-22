'use strict';

module.exports = {
	inject: function () {
		var module = angular.module('Controllers');
		module.controller('loginController', [
			'$scope',
			'UserService',
			'$state',
			function ($scope, UserService, $state) {
				$scope.user = UserService.instance();

				$scope.login = function () {
					console.log($scope.loginForm);
					if ($scope.loginForm.$invalid) {
						return;
					}
					UserService.login($scope.user).then(function (response) {
						if (response.data._id) {
							$state.go('project.list');
						} else {
							$state.reload();
						}
					});
				};
			}
		]);
	}
};
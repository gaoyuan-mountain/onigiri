module.exports = {
	inject: function () {
		var module = angular.module('Controllers');
		module.controller('loginController', [
			'$scope',
			function ($scope) {
				$scope.page = 'Login page';
			}
		]);
	}
};
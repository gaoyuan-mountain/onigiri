module.exports = {
	inject: function () {
		var module = angular.module('Controllers');
		module.controller('headerController', [
			'$scope',
			'$modal',
			function ($scope, $modal) {
				$scope.createPopover = {
					templateUrl: 'app/common/header/create.html'
				};

				$scope.showProjectCreatePopover = function () {
					var modalInstance = $modal.open({
						windowClass: 'project-create-popover',
						templateUrl: 'app/common/project-create/project.html',
						controller: 'projectCreateController',
						size: 'lg',
						resolve: {
							
						}
					});
				};
			}
		]);
	}
};

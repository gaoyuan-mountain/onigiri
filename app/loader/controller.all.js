define([
	'../app/login/login.controller',
	'../app/projects/projects.controller'
], function () {
	var controllers = arguments;
	return {
		inject: function () {
			angular.forEach(controllers, function (controller) {
				controller.inject();
			});
		}
	}
});

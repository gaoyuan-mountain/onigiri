define([
	'../app.src/login/login.controller',
	'../app.src/projects/projects.controller'
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
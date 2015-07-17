define([
	'../app/login/login.controller',
	'../app/common/header/header.controller',
	'../app/projects/projects.controller',
	'../app/issues/list/list.controller',
	'../app/issues/detail/detail.controller'
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

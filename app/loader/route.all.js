define([
	'../app/login/login.route',
	'../app/projects/projects.route',
	'../app/issues/issues.route',
	'../app/milestone/milestone.route'
], function () {
		var routes = arguments;
		return {
			inject: function () {
				angular.forEach(routes, function (router) {
					router.inject();
				});
			}
		}
	});

define([
	'../app.src/login/login.route',
	'../app.src/projects/projects.route'
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

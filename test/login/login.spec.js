define(['startup', 'appControllers', 'angular', 'angularMocks'], function (app, controllers) {
	app.startup();
	describe('loginController', function () {
		var $rootScope, scope, loginController;
		beforeEach(module('app'));
		beforeEach(module('Controllers'));

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			loginController = $controller('loginController', {
				$scope: scope
			});
		}));

		it('is defined', function () {
			expect(loginController).toBeDefined();
		});

		it('is page corrent', function () {
			expect(scope.page).toBe('Login page');
		});
	});
});

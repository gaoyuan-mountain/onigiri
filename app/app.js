'use strict';

import 'angular';
import 'angular-route';
import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-sanitize';
import 'angular-bindonce';
import controllers from './loader/controller.all';
import routes from './loader/route.all';
import './components/step/step.module';


import './login/login.css';
import './projects/projects.css';
import './common/header/header.css';
import './issues/issues.css';
import './milestone/milestone.css';

angular.module('Controllers', []);
angular.module('Directives', []);
angular.module('Services', []);
angular.module('Filters', []);
angular.module('Routes', ['ui.router']);
angular.module('app', [
	'ngSanitize',
	'ui.bootstrap',
	'pasvaz.bindonce',
	'Controllers',
	'Directives',
	'Services',
	'Filters',
	'Routes',
	'gy.step'
]).config([
	'$locationProvider',
	function ($locationProvider) {
		//$locationProvider.html5Mode(true);
	}
]);

controllers.inject();
routes.inject();

angular.element(document).ready(function () {
	angular.bootstrap(document, ['app']);
});

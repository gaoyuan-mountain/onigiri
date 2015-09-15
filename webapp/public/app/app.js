'use strict';

import 'angular';
import 'angular-route';
import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-sanitize';
import 'angular-bindonce';
import  * as controllers from './loader/controller.all';
import * as services from './loader/service.all';
import * as routes from './loader/route.all';
import './components/step/step.module';


import './login/login.css';
import './project/project.css';
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
	'$interpolateProvider',
	function ($locationProvider, $interpolateProvider) {
		$locationProvider.html5Mode(true);
		$interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
	}
]);

controllers.inject();
services.inject();
routes.inject();

angular.element(document).ready(function () {
	angular.bootstrap(document, ['app']);
});

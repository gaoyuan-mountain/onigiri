'use strict';

import 'angular';

import './step.css';

const module = angular.module('gy.step', []);

module.directive('gyStep', [
	function () {
		return {
			restrict: 'EA',
			replace: true,
			template: '' +
				'<div class="step-constraint">' +
					'<div class="step-line"></div>' +
					'<div ng-repeat="step in gyStep" style="left:{{nodeOffset * $index}}%" class="step-node" ng-class="{active: step.active}" ng-click="changeActiveStep(step)">' + 
						'<div>{{step.name}}</div>' + 
					'</div>' +
				'</div>',
			scope: {
				'gyStep': '=gyStep'
			},
			link: function (scope, element, attrs) {
				if (scope.gyStep.length !== 1) {
					scope.nodeOffset = 100 / (scope.gyStep.length - 1);
				} else {
					scope.nodeOffset = 100;
				}

				scope.changeActiveStep = function (step) {
					scope.gyStep.forEach(function (_step) {
							_step.active = (_step === step);
					});
				};
			}
		}
	}
]);

module.exports = module;
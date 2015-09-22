module.exports = {
	inject: function () {
		var module = angular.module('Services');

		var Project = function (prop) {
			var _prop = prop || {};
			this.props = angular.extend({
				_id: null,
				title: '',
				description: ''
			}, _prop);
		};

		Project.prototype.reset = function () {
			this.props._id = null;
		};

		Project.prototype.get = function (key) {
			return this.props[key];
		};

		Project.prototype.set = function (prop) {
			angular.extend(this.props, prop);
		};

		module.service('ProjectService', [
			'$http',
			function ($http) {
				this.instance = function (props) {
					return new Project(props);
				};

				this.create = function (project) {
					return $http.post('/api/project/create', {
						title: project.get('title'),
						description: project.get('description')
					});
				};

				this.getAll = function () {
					return $http.get('/api/project/getAll');
				}
			}
		]);
	}
};
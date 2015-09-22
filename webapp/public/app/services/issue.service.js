module.exports = {
	inject: function () {
		var module = angular.module('Services');
		
		/**
		* issue model definition
		* @props
		*   _id {String}
		*   title {String}
		*   url {String}
		*   assignee {Integer}
		*	browsers {Array[Object]}
		*		name {String}
		*		version {String}
		*		system {String}
		*	account {Object}
		*		name {String}
		*		password {String}
		*	description {String}
		*	attachments {Array[Object]}
		*		name {String}
		*		size {String}
		*		_id	{String}
		*	prior {Integer}
		*	status {Integer} 0:open / 1:doing / 2:checking / 3:closed
		*/
		var Issue = function (prop) {
			var _prop = prop || {};
			this.props = angular.extend({
				_id: null,
				title: '',
				url: '',
				assignee: null,
				browsers: [{
					name: 'Chrome',
					version: '',
					system: ''
				}],
				account: {},
				description: '',
				attachments: [],
				prior: 0,
				status: 0
			}, _prop);
		};

		Issue.prototype.reset = function () {
			this.props._id = null;
		};

		Issue.prototype.get = function (key) {
			return this.props[key];
		};

		Issue.prototype.set = function (prop) {
			angular.extend(this.props, prop);
		};

		module.service('IssueService', [
			'$http',
			function ($http) {
				this.instance = function (props) {
					return new Issue(props);
				};

				this.create = function (issue) {
					// return $http.post('/api/project/create', {
					// 	title: project.get('title'),
					// 	description: project.get('description')
					// });
				};

				this.getAll = function () {
					// return $http.get('/api/project/getAll');
				};
				
				this.uploadAttachment = function (file) {
					var form = new FormData();
					form.append('file', file);
					return $http.post('/api/attachment/upload', form, {
						transformRequest: angular.identity,
						headers: {'Content-Type': undefined}
					});
				};
			}
		]);
	}
};
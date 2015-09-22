module.exports = {
	inject: function () {
		var module = angular.module('Services');

		var User = function (prop) {
			var _prop = prop || {};
			this.props = angular.extend({
				_id: null,
				name: '',
				tel: '',
				avatar: '',
				password: ''
			}, _prop);
		};

		User.prototype.reset = function () {
			this.props._id = null;
		};

		User.prototype.get = function (key) {
			return this.props[key];
		};

		User.prototype.set = function (prop) {
			angular.extend(this.props, prop);
		};

		User.prototype.isLogin = function () {
			return this.props._id != null;
		};

		module.service('UserService', [
			'$http',
			function ($http) {
				var self = this;

				this.instance = function (props) {
					return new User(props);
				};

				this.login = function (user) {
					return $http.post('/api/login', {
						email: user.get('email'),
						password: user.get('password')
					});
				}
			}
		]);
	}
};
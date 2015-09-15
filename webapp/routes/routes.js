var user = require('../controllers/users.controller');
var common = require('../controllers/common.controller');
var login = require('../controllers/login.controller');
var project = require('../controllers/project.controller');
var issues = require('../controllers/issues.controller');
var milestone = require('../controllers/milestone.controller');

module.exports = function (app) {
	app.get('/', common.index);
	app.get('/index', common.index);
	app.get('/login', common.index);
	app.get('/project', common.index);
	app.get('/project/list', common.index);
	app.get('/project/create', common.index);
	app.get('/issues', common.index);
	app.get('/issues/:projectId', common.index);
	app.get('/issues/:projectId/create', common.index);
	app.get('/issues/:projectId/detail/:issueId', common.index);
	
	//app initialization
	app.get('/init/superadmin', user.setSuperAdmin);

	//common
	app.get('/partials/common/header', common.header.template)
	
	//login
	app.get('/partials/login', login.template);
	app.post('/api/login', login.login);
	
	//project
	app.get('/partials/project', project.template.index);
	app.get('/partials/project/list', project.template.list);
	app.get('/partials/project/create', project.template.create);
	
	//issues
	app.get('/partials/issues/index', issues.template.index);
	app.get('/partials/issues/list', issues.template.list);
	app.get('/partials/issues/create', issues.template.create);
	app.get('/partials/issues/detail', issues.template.detail);
	
	//milestone
	app.get('/partials/milestone/index', milestone.template.index);

	/*
	app.post('/user/create', user.create);
	app.get('/user/all', user.getAll);
	app.post('/user/remove', user.remove);
	app.post('/user/update', user.update);
	*/
};

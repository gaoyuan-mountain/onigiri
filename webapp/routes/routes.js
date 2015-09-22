/* global . */
var user = require('./users.route');
var index = require('./index.route');
var login = require('./login.route');
var project = require('./project.route');
var issues = require('./issues.route');
var milestone = require('./milestone.route');
var attachment = require('./attachment.route');

var multer  = require('multer');
var upload = multer({ dest: '/uploads/' });

module.exports = function (app) {
	app.get('/', index.view);
	app.get('/index', index.view);
	app.get('/login', index.view);
	app.get('/project', index.view);
	app.get('/project/list', index.view);
	app.get('/project/create', index.view);
	app.get('/issues', index.view);
	app.get('/issues/:projectId', index.view);
	app.get('/issues/:projectId/create', index.view);
	app.get('/issues/:projectId/detail/:issueId', index.view);
	
	//app initialization
	app.get('/init/superadmin', user.setSuperAdmin);
	
	//login
	app.post('/api/login', login.login);
	
	//project
	app.post('/api/project/create', project.create);
	app.get('/api/project/getAll', project.getAll);
	
	//issues
	
	//attachment
	app.post('/api/attachment/upload', upload.single('file'), attachment.create);
	
	//milestone

	/*
	app.post('/user/create', user.create);
	app.get('/user/all', user.getAll);
	app.post('/user/remove', user.remove);
	app.post('/user/update', user.update);
	*/
};

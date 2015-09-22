var session = require('express-session');
var parseurl = require('parseurl');

exports.view = function (req, res) {
	var user = req.session.user;
	var pathname = parseurl(req).pathname;
	if (!user && pathname !== '/' && pathname !== '/login' && pathname !== '/index') {
		res.status(403).redirect('/login');
	}
    res.render('index');
};
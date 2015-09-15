var session = require('express-session');
var parseurl = require('parseurl');

exports.index = function (req, res) {
	var user = req.session.user;
	var pathname = parseurl(req).pathname;
	if (!user && pathname !== '/' && pathname !== '/login' && pathname !== '/index') {
		res.status(403).redirect('/login');
	}
    res.render('index');
};

exports.header = {
	template: function (req, res) {
		res.render('partials/common/header/header');
	}
};
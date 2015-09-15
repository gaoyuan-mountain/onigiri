var user = require('./../models').user;
var userDao = require('./../dao/user.dao');
var crypto = require('crypto');
var session = require('express-session');

exports.template = function (req, res) {
    res.render('partials/login/login');
};

exports.login = function (req, res) {
    user.findOne({
        email: req.body.email,
        password: crypto.createHash('md5').update(req.body.password).digest('base64')
    }, function (err, user) {
        if (err) {
            return res.json({
                err: err
            });
        } else {
            req.session.user = user;
            res.json(req.session.user);
        }
    });
};
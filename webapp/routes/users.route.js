var User = require('./../models').user;
var userDao = require('./../dao/user.dao');
var crypto = require('crypto');

exports.setSuperAdmin = function (req, res) {
    var admin = new User({
        name: 'gaoyuan',
        email: 'dp.gaoyuan@gmail.com',
        tel: '13980949948',
        avatar: '0',
        password: crypto.createHash('md5').update('111111').digest('base64')
    });
    admin.save(function (err, admin) {
         if (err) {
            return res.json({
                err: err
            });
        }
        res.json(admin);
    });
};

exports.create = function (req, res) {
    var createUser = new User(req.body);
    User.findOne({
        name: req.body.name
    }, function (err, user) {
        if (err) {
            return res.json({
                err: err
            });
        }
        if (user) {
            return res.json({
                err: '用户名已经存在'
            });
        }
        createUser.save(function (err, user) {
            if (err) {
                return res.json({
                    err: err
                });
            }
            res.json(user);
        });
    });
};

exports.getAll = function (req, res) {
    userDao.getAll(function (err, users) {
        res.send(users);
    });
};

exports.remove = function (req, res) {
    userDao.remove(req.body._id, function (err, user) {
        res.send(user);
    });
};

exports.update = function (req, res) {
    userDao.update({
        _id: req.body._id
    }, req.body, null, function (err, user) {
        res.send(req.body);
    });
}

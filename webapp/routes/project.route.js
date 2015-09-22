var project = require('./../models').project;
var projectDao = require('./../dao/project.dao');

exports.create = function (req, res) {
    var createProject = new project(req.body);
    project.findOne({
        title: req.body.title
    }, function (err, project) {
        if (err) {
            return res.json({
                err: err
            });
        }
        if (project) {
            return res.json({
                err: 'project title already exists.'
            });
        }
        createProject.save(function (err, project) {
            if (err) {
                return res.json({
                    err: err
                });
            }
            res.json(project);
        });
    });
};

exports.getAll = function (req, res) {
	projectDao.getAll(function (err, projects) {
        res.send(projects);
    });
};
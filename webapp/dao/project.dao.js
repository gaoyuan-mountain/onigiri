var project = require('./../models').project;
var daoBase = require('./daoBase.dao');
var projectDao = new daoBase(project);

module.exports = projectDao;

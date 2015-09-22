var attachment = require('./../models').attachment;
var daoBase = require('./daoBase.dao');
var attachmentDao = new daoBase(attachment);

module.exports = attachmentDao;

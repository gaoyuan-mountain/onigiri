var attachment = require('./../models').attachment;
var attachmentDao = require('./../dao/attachment.dao');

exports.create = function (req, res) {
    var createAttachment = new attachment(req.file);
    attachmentDao.create(createAttachment, function (attachment, err) {
        if (err) {
            return res.json({
                err: err
            });
        }
        res.json(attachment);
    });
};
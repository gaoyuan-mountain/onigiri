'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    fieldname: String,
    filename: String,
    encoding: String,
    minetype: String,
    originalname: String,
    path: String,
    size: Number
});

mongoose.model('attachment', schema);

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    title: String,
    description: String
});

mongoose.model('project', schema);

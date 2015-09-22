'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: String,
    email: String,
    tel: String,
    avatar: String,
    password: String
});

mongoose.model('user', schema);

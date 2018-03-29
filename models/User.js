/**
 * Created by MingYue.Zhang on 2018/3/28.
 */
var mongoose = require('mongoose');
var userSchema = require('../schemas/user');

module.exports = mongoose.model('User',userSchema);

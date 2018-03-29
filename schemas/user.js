/**
 * Created by MingYue.Zhang on 2018/3/28.
 */
var mongoose = require('mongoose');

//用户的表结构
module.exports = new mongoose.Schema({
    username:String,
    password:String
})
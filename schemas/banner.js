/*
 * banner的数据库的结构
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//视频的表结构
module.exports = new mongoose.Schema ({
     imagePath:  String,
     introduce:  String,
     bannerhref: String
})

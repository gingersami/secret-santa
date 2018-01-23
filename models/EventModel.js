const Promise = require("bluebird");
const mongoose = require('mongoose');
const User = require('../models/UserModel.js');




// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     prefs:[String]
// })

const  eventSchema = new mongoose.Schema({
    name:String,
    users:[User.userSchema],
    status:Boolean
});
const Event = mongoose.model('event', eventSchema);

module.exports = Event;

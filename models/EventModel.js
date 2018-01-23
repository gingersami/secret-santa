const Promise = require("bluebird");
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const User = require('../models/UserModel.js');




// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     prefs:[String]
// })

const  eventSchema = new mongoose.Schema({
    name:String,
    users:[User.userSchema],
    status:Boolean,
    num:Number
});
eventSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Event = mongoose.model('event', eventSchema);

module.exports = Event;

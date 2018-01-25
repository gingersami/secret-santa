const Promise = require("bluebird");
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const User = require('../models/UserModel.js');
var Schema = mongoose.Schema;
const users = User.User




// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     prefs:[String]
// })

const  eventSchema = new Schema({
    name:String,
    users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    status:Boolean,
    num:Number
});
eventSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Event = mongoose.model('event', eventSchema);

module.exports = Event;

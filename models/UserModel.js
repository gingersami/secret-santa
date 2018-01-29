const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ref = require('../models/EventModel.js')

const userSchema = new Schema({
    name:String,
    event: { type: Schema.Types.ObjectId, ref: 'ref' },
    email:String,
    prefs:[],
    statusGive:Boolean,
    statusGet:Boolean,
    recipient: {type:Schema.Types.ObjectId, ref:'User'}
});

const User =  mongoose.model('user', userSchema);
module.exports={
    userSchema:userSchema,
    User:User
}
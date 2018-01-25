const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ref = require('../models/EventModel.js')

const userSchema = new Schema({
    name:String,
    event: { type: Schema.Types.ObjectId, ref: 'ref' },
    email:String,
    prefs:[],
    status:Boolean,
    pair: {
        name: String,
        email: String
    }
});

const User =  mongoose.model('user', userSchema);
module.exports={
    userSchema:userSchema,
    User:User
}
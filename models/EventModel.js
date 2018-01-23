const Promise = require("bluebird");
const mongoose = require('mongoose')




const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    prefs:[String]
})

const  eventSchema = new mongoose.Schema({
    name:String,
    users:[userSchema],
    status:Boolean
})
const Event = mongoose.model('event', eventSchema)

module.exports = Event
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    prefs:[String],
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
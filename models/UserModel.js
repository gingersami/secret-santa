const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ref = require('../models/EventModel.js')

const userSchema = new Schema({
    name:String,
    event: { type: Schema.Types.ObjectId, ref: 'ref' },
    email:String,
    prefs:[],
    status:Boolean,
    pair: userSchema
});

const User =  mongoose.model('user', userSchema);
module.exports={
    userSchema:userSchema,
    User:User
}

// var partner = somePartner;

// findById(id, function(err, data){
//     data.pair = partner;
//     data.save() 
// })

// app.get('/partnerUsers', function(req, res){
//     find(users, function(err, users){
//         //sort users
//         for(){}
//         res.send(users)
//     })
// })


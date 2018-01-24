const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    prefs:[String],
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


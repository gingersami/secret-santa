const express = require('express');
const bodyParser = require('body-parser');
const Event = require('./models/EventModel.js');
const User = require('./models/UserModel.js');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Promise = require('bluebird');
const path = require('path')
var peeps = [];

mongoose.connect('mongodb://localhost:27017/SecretSantaDB', function () {
    console.log("DB Connected")
});

const app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/createEvent/index1.html'));
});

app.get('/event/:eventid', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/EventPage/index3.html'));
})

app.get('/events', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/EventsListed/index2.html'));

})

app.get('/admin/:eventid', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/adminMatcher/index4.html'));

})



app.get('/getEvent', function (req, res) {
    Event.find().exec(function (err, data) {
        if (err) throw err
        else {
            res.send(data)
        }
    })
})
// app.get('/getUser', function (req, res) {
//     User.find().exec(function (err, data) {
//         if (err) throw err
//         else {
//             res.send(data)
//         }
//     })
// })
app.get('/getUser/:eventid', function (req, res) {

    Event.find({id:req.params.eventid}).populate({ path: 'users', model: User.User }).exec(function(err,users){
        if (err) res.send(err)
        console.log(req.body)
        peeps = users
        res.send(users)
    })
    return peeps
})

const sortUsers = function () {
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * Math.floor(max));
    // }
    let length = peeps[0].users.length
    console.log(peeps.users)

    for (let i = 0; i < peeps[0].users.length; i++) {
        let random = peeps[0].users[(Math.random() * length) | 0];
        if (peeps[0].users[i].status) {
            peeps[0].users[i].status = false;
            peeps[0].users[i].pair.name = peeps[0].users[Math.floor(Math.random() * length) | 0].name
            // peeps[i].pair.email = peeps[(Math.random() * length) | 0].email
            // length--

        }
    }
    return peeps

}

app.get('/getMatches', function (req, res) {
    sortUsers();
    res.send(peeps);

})


app.post('/event/:eventid', function (req, res) {
    Event.findOne({
        id: req.params.eventid
    }, '_id', function (err, data) {
        if (err) res.send(err)
        else {
            var user = new User.User({
                event: data._id,
                name: req.body.name,
                email: req.body.email,
                status: true,
                pair: "",
                prefs: JSON.parse(req.body.prefs)
            });
            user.save()
            // console.log(user)
        }
        Event.findByIdAndUpdate(data._id, {
            $push: {
                users: user
            }
        }, {
            new: true
        }, function (err, event) {
            if (err) res.send(err)
            else {
                res.send(event)
            }
        })
    })
})


app.post('/createEvent', function (req, res) {
    var event = new Event({
        name: req.body.name,
        status: true,
        users: []
    });
    event.save(function (err, data) {
        if (err) console.log(err);
        else {
            res.send(data)
        }
    })
});

app.listen(8080, function () {
    console.log('Server Listening')
});
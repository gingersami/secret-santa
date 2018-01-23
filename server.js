const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');


mongoose.connect('mongodb://localhost:27017/SecretSantaDB', function () {
    console.log("DB Connected")
});

const Event = require('./models/EventModel.js');
const User = require('./models/UserModel.js');

const app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.send(data)
});
app.get('/event', function (req, res) {
    res.send(data)
});
app.post('/event/:eventid', function () {
    var user = new Comment({
        name: req.body.name,
        email: req.body.email,
        pref: req.body.pref
    });
    Event.findByIdAndUpdate(req.params.eventid, { $push: { prefs: pref } }, function (err, data) {
        if (err) res.send(err);
        else {
            res.send(data)
        }
    })
});

// app.get('/createEvent', function (req, res) {
//     res.send(data)
// });
app.post('/createEvent', function (req, res) {
    var event = new Event({
        name: req.body.name,
        status: true

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

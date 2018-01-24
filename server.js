const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Promise = require('bluebird');
const path = require('path')
var peeps = [];

mongoose.connect(process.env.MONGUL || 'mongodb://localhost:27017/SecretSantaDB', function () {
    console.log("DB Connected")
});

const Event = require('./models/EventModel.js');
const User = require('./models/UserModel.js');

const app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'public/createEvent/index1.html'));
});

app.get('/event/:eventid', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/EventPage/index3.html'));
})

app.get('/events', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/EventsListed/index2.html'));

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
app.get('/getUser', function (req, res) {
    User.User.find({}, (err, users) => {
        if (err) res.send(err)
        users.map(user => {
            peeps.push(user)
        })
        res.send(peeps)
    })

    // User.find().exec(function (err, data) {
    //     if (err) throw err
    //     else {
    //         res.send(data)
    //     }
    // })
})
const sortUsers = function () {
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * Math.floor(max));
    // }
    var length = peeps.length

    for (let i = 0; i < peeps.length; i++) {
        let random = peeps[(Math.random() * length) | 0];
        // if (random.status) {
        peeps[i].status = false;
        // peeps[i].pair.name = peeps[Math.floor(Math.random() * length) | 0].name
        peeps[i].pair.email = peeps[(Math.random() * length) | 0].email
        length--

        // }
    }
    return peeps

}

app.get('/getMatches', function (req, res) {
    oftesting();

    function oftesting() {
        // Get the count of all users
        User.User.count({
            status: true
        }).exec(function (err, count) {

            // Get a random entry
            var random = Math.floor(Math.random() * count)

            // Again query all users but only fetch one offset by our random #
            User.User.findOne({}).skip(random).exec(
                function (err, result) {
                    // Tada! random user
                    res.send(result)
                    
                })
                
        })

        // res.send(result._id)
    }
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

app.listen(process.env.PORT || 8080, function () {
    console.log('Server Listening')
});
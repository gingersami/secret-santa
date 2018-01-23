const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');


mongoose.connect('mongodb://localhost:27017',function(){
    console.log("DB Connected")
})

const Event = require('./models/EventModel.js')

const app = express()

app.use(express.static('public'))
app.use(express.static('node_modules'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.listen(8080, function(){
    console.log('Server Listening')
})

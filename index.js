var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
var fs = require('fs')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/static', express.static('static')); // we linked static files using app.use() 

app.get('/', function (req, res) {

    res.sendFile(__dirname + '/index.html');
});

app.get('/BenchPress', function (req, res) {

    res.sendFile(__dirname + '/index.html');
});
app.get('/Deadlift', function (req, res) {

    res.sendFile(__dirname + '/index.html');
});
app.get('/Squat', function (req, res) {

    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log('express is running !'));
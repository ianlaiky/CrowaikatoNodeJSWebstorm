var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var querystring = require('querystring');
var https = require('https');
var MongoDB = require('mongodb');



var expressValidator = require('express-validator');
var expressSession = require('express-session');

var passport = require('passport');
var flash = require('connect-flash');

var Promise = require('bluebird');

var index = require('./routes/index');
var userAccounts = require('./routes/signedInUsers');
const api = require('./routes/api');
const io = require('./socket/websocket');


require('./config/passport');


var app = express();




// Assigns app io variable
app.io = io;


// Set bluebird as mongoose's promise
mongoose.Promise = Promise;

// Connect to MongoDB
mongoose.connect('mongodb://192.168.204.129:27017/ARDB', function(err) {
    if(err) throw err;
});

var conn = mongoose.connection;







login();

///Ip Addresses of each marker (2 markers for this project)
//IP of Red Team Machine (Offense)
var redIp = "192.168.180.20";
//IP of Blue Team Machine(Defense)
var blueIp = "192.168.110.50";

///Other Variables
var srcIP, destIP;
var min, max, random;

// ///Create Instance of StitchClient
// const client = new stitch.StitchClient('arcrow-lkurz');
// const db = client.service('mongodb', 'mongodb-atlas').db('ARDB');

///Anonymous Authentication and Start insertion of Data into DB
function login() {
    setInterval(randAction, 1500);
}

///Each of 12 Actions is Represented By a number from 0 to 12
///This Function is to randomly select any action(number) for data insertion
function randAction() {

    min = Math.ceil(1);
    max = Math.floor(12);
    random = Math.floor(Math.random() * (max - min + 1)) + min;
    var data = [];
    data = getData(random);

    //Insert into Db: Client Id, Action (represented by integer), Current DateTime, Source Ip & Dest Ip of action
    // db.collection("ARaction").insert({
    //     owner_id: client.authedId(),
    //     actionType: data[0],
    //     dateTime: new Date(),
    //     src: data[1],
    //     dest: data[2]
    // }).then(console.log("data added!"));

    var toinsert = {
            owner_id: "1a168ad8058429ca16336c1b",
            actionType: data[0],
            dateTime: new MongoDB.Timestamp(0, Math.floor(new Date().getTime() / 1000)),
            src: data[1],
            dest: data[2]
        };
    conn.collection('ARaction').insert(toinsert);
    //Display on paragraph
    // document.getElementById("insert").innerHTML = data[0];
    console.log("DB ADDDD");

}



//Each action is either an attack or a defense.
//If is an attack, source Ip will be red machine and dest Ip will be blue machine
//If is a defense, source Ip will be blue machine and dest Ip will be red machine
function getData(type) {
    var data = [];

    if (type == 1 || type == 2 || type == 3 || type == 4 || type == 5 || type == 6 || type == 7 || type == 8 || type == 9) {

        attack();

    } else if (type == 10 || type == 11 || type == 12) {

        defend();
    } else {

        console.log("error Input");
        attack();
    }

    data.push(type);
    data.push(srcIP);
    data.push(destIP);

    return data;

}

function attack() {
    srcIP = redIp;
    destIP = blueIp;
}

function defend() {
    srcIP = blueIp;
    destIP = redIp;
}











// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'ianlaicrowwebsite', saveUninitialized: false, resave: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());





app.use('/page', userAccounts);
app.use('/api', api);
app.use('/', index);







// response


app.post('/registerForm', function (req, res) {
    console.log(req.body);


    //https://codeforgeek.com/2016/03/google-recaptcha-node-js-tutorial/
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({"responseCode": 1, "responseDesc": "Please select captcha"});
    }

    // Put your secret key here.


    // Hitting GET request to the URL, Google will respond with success or error scenario.


    verifyRecaptcha(req.body["g-recaptcha-response"], function (success) {
        if (success) {
            res.json({"responseCode": 0, "responseDesc": "Sucess"});
        } else {
            res.json({"responseCode": 1, "responseDesc": "Failed captcha verification"});
        }
    });


    // res.sendStatus(200);
    // res.render
    // res.render('index',{layout: 'layout/layout'});
});
// server.listen(process.env.PORT, process.env.IP);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.redirect('/error');
});
// var now = new Date();
//
//
//
// console.log(now.getFullYear());
// console.log(now.getMonth()+1);
// console.log(now.getDate());
// console.log(new Date(2018, 2,0).getDate());



function allowed(req) {
    let ip = req.ip.replace(/^.*:/, '');
    console.log('ip addr: ' + ip);
    return (ip === '1' || ip === '127.0.0.1');
}


module.exports = app;

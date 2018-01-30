require('../models/process.js');
require('../models/file.js');


// Required otherwise IDE gives error about findOne and find methods
const mongoose = require('mongoose');
const Process = mongoose.model("Process");
const File = mongoose.model("File");

//AR
var MongoDB = require('mongodb');
///Variables - Connection strings for MongoDB Atlas Databases
// var oplogurl = 'mongodb://tester:cR0w_%2B35t@arproject-shard-00-00-cjsdl.mongodb.net:27017,arproject-shard-00-01-cjsdl.mongodb.net:27017,' +
//     'arproject-shard-00-02-cjsdl.mongodb.net:27017/local?ssl=true&replicaSet=ARPROJECT-shard-0&authSource=admin';

var arurl = 'mongodb://tester:cR0w_+35t@arproject-shard-00-00-cjsdl.mongodb.net:27017,arproject-shard-00-01-cjsdl.mongodb.net:27017,' +
    'arproject-shard-00-02-cjsdl.mongodb.net:27017/ARDB?ssl=true&replicaSet=ARPROJECT-shard-0&authSource=admin';
var oplogurl = 'mongodb://192.168.204.129:27017/ARDB';
var machines = [];



//MYSQL
var mysql = require('mysql');

var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);



let clients = [];

var processIntervalsArr = [];
var fileIntervalsArr = [];


var disconnected = false;


// call socket.io to the app
let io = require('socket.io')();

io.on('connection', function (socket) {
    console.log('New client connected, SOCKETID: ' + socket.id);
    disconnected = false;

    socket.on('disconnect', function () {
        clients[socket.id] = false;
        for (var i = processIntervalsArr.length - 1; i >= 0; i--) {
            if (socket.id = processIntervalsArr[i]) {
                processIntervalsArr.splice(i, 1);
            }
        }
        for (var i = fileIntervalsArr.length - 1; i >= 0; i--) {
            if (socket.id = processIntervalsArr[i]) {
                processIntervalsArr.splice(i, 1);
            }
        }
        console.log('Client has disconnected, SOCKETID: ' + socket.id);

        disconnected = true;


    });

    socket.on('stop', function () {
        clients[socket.id] = false;
        console.log('Client stopped receiving, SOCKETID: ' + socket.id);
    });

    /**
     * PROCESS STREAM related METHODS
     * Starts HERE
     */
    socket.on('scanProcess', function () {
        // Repeated sending
        let interval = setInterval(function () {
            if (clients[socket.id] === false) {
                clearInterval(interval);
                return;
            }
            Process.findOne({}, 'scanId').sort('-scanId').exec(function (err, result) {

                if (err) {
                    socket.emit('scanProcess', JSON.stringify({error: err.message}));
                    return;
                }

                if (result === null) {
                    socket.emit('scanProcess', JSON.stringify({error: "Error or Nothing Found"}));
                    return;
                }
                socket.emit('scanProcess', result.scanId);
            });
        }, 500);
    });

    socket.on('streamProcess', function (message) {
        clients[socket.id] = true;
        let counter = null;
        let scanTimestamp = 0;
        processIntervalsArr.push(socket.id);

        // Ensure scan ID is provided in message
        if (message === undefined) {
            socket.emit('streamProcess', JSON.stringify({error: "Please provide the scan timestamp"}));
            return;
        } else if (typeof message === 'string' || message instanceof String) {
            scanTimestamp = parseInt(message);
        } else {
            scanTimestamp = message;
        }

        // Repeated sending
        var interval = setInterval(function () {
            if (clients[socket.id] === false) {
                clearInterval(interval);
                return;
            }

            Process.findOne({scanId: scanTimestamp}).sort('-counter').exec(function (err, result) {

                if (err) {
                    socket.emit('streamProcess', JSON.stringify({error: err.message}));
                    return;
                }

                if (result === null) {
                    socket.emit('streamProcess', JSON.stringify({error: "Error or Nothing Found"}));
                    return;
                }

                if (counter === result.counter) {
                    console.log('your socketid is ' + socket.id);
                    let count = processIntervalsArr.filter(function (value) {
                        return value === socket.id;
                    }).length;
                    if (count > 1) {
                        for (var i = processIntervalsArr.length - 1; i >= 0; i--) {
                            if (socket.id = processIntervalsArr[i]) {
                                processIntervalsArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    if (count > 1) {
                        clearInterval(interval);
                    }
                    if (socket.id == undefined) {
                        clearInterval(interval);
                    }
                    socket.emit('streamProcess', JSON.stringify({error: "Already Sent Counter ID " + result.counter}));
                } else if (result !== null && (counter === null || counter < result.counter)) {
                    counter = result.counter;
                    socket.emit('streamProcess', JSON.stringify(result));
                }
            });
        }, 500);
        console.log("Stream started for client")
    });
    /**
     * PROCESS STREAM related METHODS
     * Ends HERE
     */


    /**
     * FILE STREAM related METHODS
     * Starts HERE
     */
    socket.on('scanFile', function () {
        // Repeated sending
        let interval = setInterval(function () {
            if (clients[socket.id] === false) {
                clearInterval(interval);
                return;
            }
            File.findOne({}, 'scanId').sort('-scanId').exec(function (err, result) {

                if (err) {
                    socket.emit('scanFile', JSON.stringify({error: err.message}));
                    return;
                }

                if (result === null) {
                    socket.emit('scanFile', JSON.stringify({error: "Error or Nothing Found"}));
                    return;
                }
                socket.emit('scanFile', result.scanId);
            });
        }, 500);
    });

    socket.on('streamFile', function (message) {
        clients[socket.id] = true;
        let counter = null;
        let scanTimestamp = 0;
        fileIntervalsArr.push(socket.id);

        // Ensure scan ID is provided in message
        if (message === undefined) {
            socket.emit('streamFile', JSON.stringify({error: "Please provide the scan timestamp"}));
            return;
        } else if (typeof message === 'string' || message instanceof String) {
            scanTimestamp = parseInt(message);
        } else {
            scanTimestamp = message;
        }

        // Repeated sending
        var interval = setInterval(function () {
            if (clients[socket.id] === false) {
                clearInterval(interval);
                return;
            }

            File.findOne({scanId: scanTimestamp}).sort('-counter').exec(function (err, result) {

                if (err) {
                    socket.emit('streamFile', JSON.stringify({error: err.message}));
                    return;
                }

                if (result === null) {
                    socket.emit('streamFile', JSON.stringify({error: "Error or Nothing Found"}));
                    return;
                }

                if (counter === result.counter) {
                    console.log('your socketid is ' + socket.id);
                    let count = fileIntervalsArr.filter(function (value) {
                        return value === socket.id;
                    }).length;
                    if (count > 1) {
                        for (var i = fileIntervalsArr.length - 1; i >= 0; i--) {
                            if (socket.id = fileIntervalsArr[i]) {
                                fileIntervalsArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    if (count > 1) {
                        clearInterval(interval);
                    }
                    if (socket.id == undefined) {
                        clearInterval(interval);
                    }
                    socket.emit('streamFile', JSON.stringify({error: "Already Sent Counter ID " + result.counter}));
                } else if (result !== null && (counter === null || counter < result.counter)) {
                    counter = result.counter;
                    socket.emit('streamFile', JSON.stringify(result));
                }
            });
        }, 500);
        console.log("Stream started for client")
    });
    /**
     * File STREAM related METHODS
     * Ends HERE
     */


    /**
     * FILE STREAM related METHODS
     * Starts HERE
     */
    socket.on('scanTimestamp', function () {
        // Repeated sending
        let interval = setInterval(function () {
            if (clients[socket.id] === false) {
                clearInterval(interval);
                return;
            }
            File.findOne({}).sort('-performanceTimestamp').exec(function (err, result) {

                if (err) {
                    socket.emit('scanTimestamp', JSON.stringify({error: err.message}));
                    return;
                }

                if (result === null) {
                    socket.emit('scanTimestamp', JSON.stringify({error: "Error or Nothing Found"}));
                    return;
                }
                socket.emit('scanTimestamp', result);
            });
        }, 500);
    });

// AR SIDE Interval selection

    socket.on('intervalSelection', function (socket) {

        console.log(socket);


    });

    socket.on("arStartLive", (socketin) => {
        console.log("startArstartLive");
        //Connect to Oplog Collection and listen for insertion of data(actions)
        MongoDB.MongoClient.connect(oplogurl, function (err, db) {


            db.collection('ARaction', (err, stuffInside) => {

                if (err) {

                    console.log("conn error");
                    console.log(err);
                }

                // console.log("initialal stuff");
                // console.log(stuffInside);

                var queryForTime;
                stuffInside.find({}, {
                    dateTime: 1
                }).sort({
                    $natural: -1
                }).limit(1).toArray(function (err, data) {

                    var queryForTime;
                    console.log(data);
                    var lastTime = data[0].dateTime;
                    console.log("waddd");
                    console.log(lastTime);
                    if (lastTime) {

                        queryForTime = {
                            $gt: new Date(lastTime)
                        };
                    } else {

                        var tstamp = new Date();
                        queryForTime = {
                            $gt: tstamp
                        };
                    }


                    console.log("query datetime");
                    // console.log(queryForTime);

                    var cursor = stuffInside.find({
                        dateTime: queryForTime
                    });
                    cursor.addCursorFlag('tailable', true);
                    var stream = cursor.stream();

                    stream.on('data', function (erera) {
                        socket.emit('action', erera);
                        console.log(erera)
                    })

                });

            });

        });

    });


    socket.on("arStartStatic", (socketon) => {

        console.log("arStartStatic");

// static
        MongoDB.MongoClient.connect(oplogurl, function (err, db) {
            console.log("Static infor start");

            db.collection('ARactionStatic', (err, stuffInside) => {

                if (err) {

                    console.log("conn error Static");
                    console.log(err);
                }

                console.log("Static infor");
                stuffInside.find().toArray(function (err, info) {
                    console.log("Static infor");
                    console.log(info);
                    var index = 0;
                    // let staticInterval = setInterval(function () {
                    //
                    //     if (index == info.length - 1) {
                    //         clearInterval(staticInterval);
                    //         return;
                    //     }
                    //     console.log("LALALALAL");
                    //     console.log(info[index]);
                    //
                    //     socket.emit('actionStatic', info[index]);
                    //     index += 1;
                    //
                    //
                    // }, 5000);
                    var timeoutSettings = 2000;

                    function looper(callback) {
                        let emitNewData = function () {


                            console.log("staticTimeoit");


                            if (index < info.length - 1 && disconnected == false) {
                                console.log("Disconnection");
                                console.log(disconnected);
                                let date1 = new Date(info[index].dateTime);
                                let date2 = new Date(info[index + 1].dateTime);
                                let difference = date2.getTime() - date1.getTime();

                                var Seconds_from_T1_to_T2 = difference / 1000;
                                var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);


                                timeoutSettings = Seconds_Between_Dates;
                                timeoutSettings = timeoutSettings * 1000;
                                console.log(timeoutSettings);

                                setTimeout(emitNewData, timeoutSettings);
                            } else {
                                return;
                            }


                            index += 1;
                            console.log("Index " + index);
                            // console.log("Index "+info.length);
                            callback();

                        };
                        setTimeout(emitNewData, 1)

                    }


                    looper(function () {
                        socket.emit('actionStatic', info[index]);
                        console.log("asdsad")
                    });


                });


            });

        });

    });

    socket.on("checkexistinguser", (dat) => {

        console.log("checking existing user");
        console.log(dat);

        connection.query("select id from users where username = ?",[dat],(err,rowret)=>{
            console.log(rowret);
            if(rowret.length!=0){
                socket.emit("receiveExistingUser", "false");
            }else{
                socket.emit("receiveExistingUser", "true");
            }

        });





    })


});

module.exports = io;

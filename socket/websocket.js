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

let clients = [];

var processIntervalsArr = [];
var fileIntervalsArr = [];

// call socket.io to the app
let io = require('socket.io')();

io.on('connection', function (socket) {
    console.log('New client connected, SOCKETID: ' + socket.id);

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


    //Connect to Oplog Collection and listen for insertion of data(actions)
    MongoDB.MongoClient.connect(oplogurl, function (err, db) {


        db.collection('ARaction', (err, stuffInside) => {

            if (err) {

                console.log("conn error");
                console.log(err);
            }

            console.log("initialal stuff");
            console.log(stuffInside);

            stuffInside.find({}, {
                dateTime: 1
            }).sort({
                $natural: -1
            }).limit(1).toArray(function (err, data) {


                console.log(data);
                var lastTime = data[0].dateTime;

                if (lastTime) {
                    queryForTime = {
                        $gt: lastTime
                    };
                } else {
                    var tstamp = new MongoDB.Timestamp(0, Math.floor(new Date().getTime() / 1000))
                    queryForTime = {
                        $gt: tstamp
                    };
                }
console.log("STUFF INSIDE");
console.log(stuffInside.find({}).toArray());


                var cursor = stuffInside.find({},{
                                dateTime: queryForTime
                            });
                console.log("CURSOR");
                console.log(cursor);
            });

        });


        //
        // console.log("printttt");
        // console.log(oplogurl);
        //
        //
        // if (err) {
        //
        //     console.log("conn error");
        //     console.log(err);
        // }
        //
        // db.collection('oplog.rs', function(err, oplog) {
        //     if (err) {
        //
        //         console.log("conn error");
        //         console.log(err);
        //     }
        //     oplog.find({}, {
        //         ts: 1
        //     }).sort({
        //         $natural: -1
        //     }).limit(1).toArray(function(err, data) {
        //         console.log("WHat is this data");
        //         console.log(data);
        //         var lastOplogTime = data[0].ts;
        //         console.log("--");
        //         console.log(lastOplogTime);
        //         console.log("MOngodb datatime");
        //         console.log(MongoDB.Timestamp(0, Math.floor(new Date().getTime() / 1000)));
        //         var queryForTime;
        //
        //         if (lastOplogTime) {
        //             queryForTime = {
        //                 $gt: lastOplogTime
        //             };
        //         } else {
        //             var tstamp = new MongoDB.Timestamp(0, Math.floor(new Date().getTime() / 1000))
        //             queryForTime = {
        //                 $gt: tstamp
        //             };
        //         }
        //         var cursor = oplog.find({
        //             ts: queryForTime
        //         }, {
        //             tailable: true,
        //             awaitdata: true,
        //             oplogReplay: true,
        //             numberOfRetries: -1
        //         });
        //         console.log("loop");
        //         var stream = cursor.stream();
        //         stream.on('data', function(oplogdoc) {
        //             console.log("qn 2");
        //             console.log(oplogdoc);
        //             console.log(oplogdoc.ns);
        //             if (oplogdoc.ns == 'ARDB.ARaction') {
        //                 socket.emit('action', oplogdoc);
        //             }
        //
        //         });
        //     });
        // });

    });
})
;

module.exports = io;

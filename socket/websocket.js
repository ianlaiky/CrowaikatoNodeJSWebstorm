// File Created and integrated by: Ian Lai Kheng Yan

// Attribution
var configPython = require('../config/attributionConfig');
var pythonPath = 'python/ipTest.py';
var pythonKey = 'python/gKey.py';
var pythonRe = 'python/resolves.py';
var pythonExe = configPython.python27;
var isIP = require('is-ip');

require('../models/process.js');
require('../models/file.js');


// Required otherwise IDE gives error about findOne and find methods
const mongoose = require('mongoose');
const Process = mongoose.model("Process");
const File = mongoose.model("File");


var MongoDB = require('mongodb');

//AR

var dbconfigMongo = require('../config/databaseMongo');

var oplogurl = dbconfigMongo.ARConnection;

var machines = [];


//MYSQL for user data
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



    //Attribution

    socket.on('startingProcess', function (ipadd) {

        // Function to convert an Uint8Array to a string
        var uint8arrayToString = function(data){
            return String.fromCharCode.apply(null, data);
        };

        const spawn = require('child_process').spawn;
        let scriptExecution;

        getKey = spawn(pythonExe, [pythonKey]);
        getKey.stdout.on('data', (data) => {
            socket.emit('gkey', data);
        });

        if (isIP(ipadd)) {
        }else{
            getRe = spawn(pythonExe, [pythonRe, ipadd]);
            getRe.stdout.on('data', (data) => {
                socket.emit('gRe', data);
            });
        }

        if (isIP(ipadd)) {
            scriptExecution = spawn(pythonExe, [pythonPath, '-i', ipadd, '-a', '-M', '-S']);

        }else{
            scriptExecution = spawn(pythonExe, [pythonPath, '-d', ipadd, '-a', '-M', '-S']);
        }


        // Handle normal output
        scriptExecution.stdout.on('data', (data) => {
            let temp = uint8arrayToString(data).split("\n");
            socket.emit('newdata', temp);
        });

        // Handle error output
        scriptExecution.stderr.on('data', (data) => {
            console.log(uint8arrayToString(data));
        });

        scriptExecution.on('exit', (code) => {
            console.log("Process quit with code : " + code);
        });

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

// static AR
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

                    // Initial timeout settings; timeout settings are dynamically changed between times
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

                                //timeout settings dynamically changed here
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

    // Existing user check for the registration page's email field

    socket.on("checkexistinguser", (dat) => {

        console.log("checking existing user");
        console.log(dat);

        connection.query("select id from users where username = ?", [dat], (err, rowret) => {
            console.log(rowret);
            if (rowret.length != 0) {
                socket.emit("receiveExistingUser", "false");
            } else {
                socket.emit("receiveExistingUser", "true");
            }

        });


    });

    //adminConsole for user to find closest eamils based on wildcard
    socket.on("findcloestUserAdm", (dat) => {


        console.log(dat.username);
        console.log(dat.emailAddress);
        console.log(dat.session);

        // checking if user is authorised to use this function; i check if email and current session id is in the db and if the user role is an admin

        connection.query("select * from usersession where email = ? and sessionId = ?", [dat.emailAddress.toString(), dat.session.toString()], (err, rowget) => {

            if (err) {
                throw err;
            }
            else {
                console.log(rowget);
                if (rowget.length) {

                    connection.query("select roles from users where username = ?", [dat.emailAddress.toString()], (errr, rowdget) => {

                        if (errr) {
                            throw errr;
                        } else {

                            if (rowdget.length) {
                                if (rowdget[0].roles == "admin") {


                                    console.log(dat.username);
                                    // select username from users where username like ?
                                    connection.query("select Count(userlog.username) as total, users.username from users inner join userlog on userlog.username=users.username group by userlog.username having userlog.username like ?", [dat.username], (err, row) => {

                                        console.log("RUN");
                                        if (err) console.log(err);

                                        console.log(row);
                                        let arrtopish = [];
                                        for (let obj of row) {

                                            arrtopish.push(obj.username + " | " + obj.total)
                                        }

                                        socket.emit("sendlistofusers", arrtopish);
                                    });
                                }
                            }
                        }
                    });
                }
            }
        });
    });


    // Admin console graph.js live graph data retrieve
    socket.on("reqgraphdata", (dat) => {
        let emailAddress;
        let session;
        console.log(dat.emailAddress);
        console.log(dat.session);

        // Making sure authentication field is not empty

        if (dat.emailAddress == undefined) {
            emailAddress = ""
        } else {
            emailAddress = dat.emailAddress
        }
        if (dat.session == undefined) {
            session = "";
        } else {
            session = dat.session
        }

        // checking if user is authorised to use this function; i check if email and current session id is in the db and if the user role is an admin

        connection.query("select * from usersession where email = ? and sessionId = ?", [emailAddress.toString(), session.toString()], (err, rowget) => {

            if (err) {
                console.log(err)
            } else {

                console.log(rowget);

                if (rowget.length) {

                    connection.query("select roles from users where username = ?", [emailAddress.toString()], (errr, rowdget) => {

                        if (errr) {
                            console.log(errr)
                        } else {
                            if (rowdget.length) {
                                console.log("ADMIN ROLE");
                                console.log(rowdget[0].roles);
                                if (rowdget[0].roles == "admin") {
                                    console.log(dat);

                                    let sortby;
                                    let year;
                                    let month;
                                    let user;

                                    if (dat.sortby == undefined) {
                                        sortby = ""
                                    } else {
                                        sortby = dat.sortby
                                    }
                                    if (dat.year == undefined) {
                                        year = ""
                                    } else {
                                        year = dat.year
                                    }
                                    if (dat.month == undefined) {
                                        month = ""
                                    } else {
                                        month = dat.month
                                    }
                                    if (dat.user == undefined) {
                                        user = "All"
                                    } else {
                                        user = dat.user
                                    }

                                    if (sortby == "") {
                                        sortby = "year";
                                    }
                                    if (year == "") {
                                        year = "2018"
                                    }
                                    if (month == "") {
                                        month = "January";
                                    }
                                    if (user == "") {
                                        user = "All"
                                    }

                                    console.log(sortby);
                                    console.log(year);
                                    console.log(month);
                                    console.log(user);

                                    if (sortby == "year") {


                                        console.log("year!");

                                        console.log("Run 1");
                                        let monthsMaplogin = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                                        let monthsMapregister = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                                        let monthsLabel = ["'January'", "'February'", "'March'", "'April'", "'May'", "'June'", "'July'", "'August'", "'September'", "'October'", "'November'", "'December'"];
                                        if (user == "All") {
                                            connection.query("Select * from userlog where year = ?", [year.toString()], (err, logsRet) => {
                                                console.log("Run 1.1");

                                                console.log(logsRet);
                                                for (let i = 0; i < logsRet.length; i++) {
                                                    console.log("Print");
                                                    console.log(logsRet[i].month);
                                                    if (logsRet[i].mode.toString() == "login") {
                                                        monthsMaplogin[logsRet[i].month - 1] = monthsMaplogin[logsRet[i].month - 1] + 1;

                                                    } else {
                                                        monthsMapregister[logsRet[i].month - 1] = monthsMapregister[logsRet[i].month - 1] + 1;

                                                    }
                                                }
                                                console.log(monthsMaplogin);
                                                console.log(monthsMapregister);
                                                console.log(monthsLabel);
                                                let readyToSend = {

                                                    graphLabel: monthsLabel,
                                                    graphData1: monthsMaplogin,
                                                    graphData2: monthsMapregister,
                                                    sortmtd: sortby,
                                                    yearmtd: year,
                                                    monthmtd: month,
                                                    usermtd: user


                                                };
                                                socket.emit("graphDataLoadAdm", readyToSend);

                                            });
                                        } else {
                                            console.log("Run 1.2");
                                            connection.query("Select * from userlog where year = ? and username = ?", [year.toString(), user.toString()], (err, logsRet) => {
                                                if (err) throw err;
                                                console.log(logsRet);
                                                for (let i = 0; i < logsRet.length; i++) {
                                                    console.log("Print");
                                                    console.log(logsRet[i].month);
                                                    if (logsRet[i].mode.toString() == "login") {
                                                        monthsMaplogin[logsRet[i].month - 1] = monthsMaplogin[logsRet[i].month - 1] + 1;

                                                    } else {
                                                        monthsMapregister[logsRet[i].month - 1] = monthsMapregister[logsRet[i].month - 1] + 1;

                                                    }
                                                }
                                                console.log(monthsMaplogin);
                                                console.log(monthsMapregister);
                                                console.log(monthsLabel);
                                                let readytoSend = {

                                                    graphLabel: monthsLabel,
                                                    graphData1: monthsMaplogin,
                                                    graphData2: monthsMapregister,
                                                    sortmtd: sortby,
                                                    yearmtd: year,
                                                    monthmtd: month,
                                                    usermtd: user

                                                };
                                                socket.emit("graphDataLoadAdm", readytoSend);

                                            });

                                        }

                                    } else if (sortby.toString() == "month") {


                                        console.log("Run 2");
                                        let monthsLabelIndex = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


                                        console.log(year);
                                        console.log(monthsLabelIndex.indexOf(month) + 1);

                                        // days in the month
                                        let noOfDaysInMonth = new Date(parseInt(year), parseInt(parseInt(monthsLabelIndex.indexOf(month)) + 1), 0).getDate();
                                        let monthN = parseInt(parseInt(monthsLabelIndex.indexOf(month)) + 1);
                                        console.log(noOfDaysInMonth);
                                        //
                                        let arrayOfDaysLogin = [];
                                        let arrayOfDaysRegister = [];
                                        let daysLabel = [];


                                        for (let x = 0; x < parseInt(noOfDaysInMonth); x++) {
                                            arrayOfDaysLogin.push(0);
                                            arrayOfDaysRegister.push(0);
                                            daysLabel.push(x + 1);
                                        }

                                        console.log("no of days in the month" + noOfDaysInMonth);
                                        console.log("Length of array" + arrayOfDaysLogin.length);
                                        if (user == "All") {
                                            connection.query("Select * from userlog where year = ? and month = ?", [year.toString(), monthN.toString()], (err, logsRet) => {

                                                console.log(logsRet);
                                                for (let i = 0; i < logsRet.length; i++) {
                                                    console.log("Print");
                                                    console.log(logsRet[i].month);
                                                    if (logsRet[i].mode.toString() == "login") {
                                                        arrayOfDaysLogin[logsRet[i].date - 1] = arrayOfDaysLogin[logsRet[i].date - 1] + 1;

                                                    } else {
                                                        arrayOfDaysRegister[logsRet[i].date - 1] = arrayOfDaysRegister[logsRet[i].date - 1] + 1;

                                                    }
                                                }
                                                console.log(arrayOfDaysLogin);
                                                console.log(arrayOfDaysRegister);
                                                console.log(daysLabel);
                                                let datatosend = {

                                                    graphLabel: daysLabel,
                                                    graphData1: arrayOfDaysLogin,
                                                    graphData2: arrayOfDaysRegister,
                                                    sortmtd: sortby,
                                                    yearmtd: year,
                                                    monthmtd: month,
                                                    usermtd: user

                                                };
                                                socket.emit("graphDataLoadAdm", datatosend);

                                            });
                                        } else {


                                            connection.query("Select * from userlog where year = ? and month = ? and username = ?", [year.toString(), monthN.toString(), user.toString()], (err, logsRet) => {

                                                console.log(logsRet);
                                                for (let i = 0; i < logsRet.length; i++) {
                                                    console.log("Print");
                                                    console.log(logsRet[i].month);
                                                    if (logsRet[i].mode.toString() == "login") {
                                                        arrayOfDaysLogin[logsRet[i].date - 1] = arrayOfDaysLogin[logsRet[i].date - 1] + 1;

                                                    } else {
                                                        arrayOfDaysRegister[logsRet[i].date - 1] = arrayOfDaysRegister[logsRet[i].date - 1] + 1;

                                                    }
                                                }
                                                console.log(arrayOfDaysLogin);
                                                console.log(arrayOfDaysRegister);
                                                console.log(daysLabel);
                                                let readytosend = {

                                                    graphLabel: daysLabel,
                                                    graphData1: arrayOfDaysLogin,
                                                    graphData2: arrayOfDaysRegister,
                                                    sortmtd: sortby,
                                                    yearmtd: year,
                                                    monthmtd: month,
                                                    usermtd: user

                                                };

                                                socket.emit("graphDataLoadAdm", readytosend);

                                            });
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
    });
});

module.exports = io;

"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let fileSchema = new Schema({
    _id: {type: String},
    scanId: {type: Number},
    counter: {type: Number},
    performanceTimestamp: {type:Number},
    fileActivities: [
        {filepath: String},
        {filename: String},
        {format: String},
        {timestamp: Number},
        {type: Number},
        {username: String},
        {score: Number},
        {hostId: Number}
    ]
});

module.exports = mongoose.model("File", fileSchema, "files");

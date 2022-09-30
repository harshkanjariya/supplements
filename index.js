const {
    setupNumberProto,
    toBinary,
} = require("./functions/math");

const {
    delay,
    lineNumber,
} = require("./functions/other");

const {
    setupStringProto,
    randomString,
} = require('./functions/strings');

module.exports = {
    setupNumberProto,
    toBinary,
    delay,
    lineNumber,
    setupStringProto,
    randomString,
}

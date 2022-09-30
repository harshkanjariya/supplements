const {
    setupNumberProto,
    toBinary,
} = require("./functions/math");

const {
    delay
} = require("./functions/process");

const {
    setupStringProto
} = require('./functions/strings');

module.exports = {
    setupNumberProto,
    toBinary,
    delay,
    setupStringProto,
}

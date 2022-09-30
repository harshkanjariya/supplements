const supplements = require('./index');

supplements.setupNumberProto();
supplements.setupStringProto();

const r = 1234;

console.log("test.js > 4", r.toBinary());
console.log("test.js > 4", supplements.toBinary(1234));
console.log("test.js > 8", 'xYz DeF'.toKebabCase());

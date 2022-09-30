# Supplements For Javascript

### how to use?

* string functions
```javascript
const supplements = require('./supplements');

supplements.setupStringProto();

const s = 'hello, how are you?';
console.log(s.toCamelCase());
console.log(s.toPascalCase());
console.log(s.toKebabCase());
```

* Number functions
```javascript
const supplements = require('./supplements');

supplements.setupNumberProto();

const n = 1234;
// calling toBinary from prototype
console.log(n.toBinary());
// calling toBinary from supplements
console.log(supplements.toBinary(1234));
```

* other functions
```javascript
const supplements = require('./supplements');

async function promisedFun() {
    ...
    await supplements.delay(5000); // this line will wait for 5 sec
    ...
}
```

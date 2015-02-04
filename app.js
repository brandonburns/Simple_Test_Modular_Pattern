var hello = require('./hello');

var myArg = process.argv[2];

console.log(hello.greet(myArg));
var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var string = file.toString();
var newlineArray = string.split('\n');
var answer = newlineArray.length - 1;

console.log(answer);
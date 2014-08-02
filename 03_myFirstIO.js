var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var string = file.toString().split('\n').length -1;
var newlineArray = string.split('\n');
var answer = newlineArray.length - 1;

console.log(answer);
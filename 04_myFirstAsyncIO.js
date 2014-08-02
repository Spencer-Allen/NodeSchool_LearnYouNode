var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data){
  var answer = data.toString().split('\n').length - 1;
  console.log(answer)
})

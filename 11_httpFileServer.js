var fs = require('fs')
var http = require('http');

var port = process.argv[2];
var inputFile = process.argv[3];

var server = http.createServer(function(req, res){
  fs.createReadStream(inputFile).pipe(res);
});

server.listen(port);

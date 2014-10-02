var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var cap = map(function(chunk){
  return chunk.toString().toUpperCase()
});

var server = http.createServer(function(req,res){
  if (req.method === "POST"){
    req.pipe(cap).pipe(res);
  };
})

server.listen(port);

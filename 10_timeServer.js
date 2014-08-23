var net = require('net');
var port = process.argv[2];

function addZero(input){
  if (input < 10){
	  return '0' + input;
  }
  return input
}

var server = net.createServer(function(socket){
  console.log('server connected');
  date = new Date()
  fancyDate = date.getFullYear() + "-"
		+ addZero(date.getMonth()+ 1) + "-"
		+ addZero(date.getDate()) + " "
		+ addZero(date.getHours()) + ":"
		+ addZero(date.getMinutes()) + "\n";
  socket.end(fancyDate);
});

server.listen(port, function(){
  console.log('server bound')
});

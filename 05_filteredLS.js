var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = "." + process.argv[3];

var finalArray = [];

fs.readdir(directory, function (err, files){
  for (i in files){
	if (path.extname(files[i]) === extension){
	  //finalArray.push(files[i]);
	  console.log(files[i]);
	}
  }
});
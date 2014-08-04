module.exports = function (directory, extension, callback){

  var fs = require('fs');
  var path = require('path');
  
  var extension = "." + extension;
  var finalArray = [];

  fs.readdir(directory, function (err, files){
	if(err) {
	  console.log('error occurred:');
	  return callback(err);
	};
	for (i in files){
	  if (path.extname(files[i]) === extension){
		//finalArray.push(files[i]);
		finalArray.push(files[i]);
	  }
	}
	callback(null, finalArray);
  });
}
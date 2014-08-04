var filterModule = require('./06_FilteredLSModule.js')

var directory = process.argv[2];
var extension = process.argv[3];

var listPrinter = function(err,data){
  if (err){console.log(err);};
  for(x in data){
  console.log(data[x]);
  }
}

filterModule(directory, extension, listPrinter);
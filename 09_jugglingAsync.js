var http = require('http');
var bl = require('bl');

var urls = [];

process.argv.slice(2).forEach(function(item){
  urls.push(item)
});

function getter(url, callback){ 
  http.get(url, function(response) {
    response.setEncoding('utf8');
	response.pipe(bl(function(err, data){
      if (err) {
        return callback(err);
      }
	    callback(data.toString());
    }));
  });
}

function aSyncMap(array, getter, callback){
  var results = [];
  var completed = array.length;
  array.forEach(function (item, index){
    getter(item, function(data){
	    results[index] = data;
	    completed -= 1;
	    
	    if (completed === 0){
	      callback(results);
	    }
	  });
  });
}

aSyncMap(urls, getter, function(results){
  results.forEach(function(item){
    console.log(item);
  });
}); 

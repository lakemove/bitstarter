var express = require('express')
  , fs = require('fs')
  ;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html = fs.createReadStream('index.html');
  html.pipe(response, {end: true});
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
var fs = require('fs');
var index_buf = new Buffer(fs.readFileSync('index.html'));
var contact_buf = new Buffer(fs.readFileSync('contact.html'));

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index_buf.toString('utf-8'));
});

app.get('/contact', function(request, response) {
	response.send(contact_buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

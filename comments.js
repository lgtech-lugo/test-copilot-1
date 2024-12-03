// Create web server

// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var comment = query.comment;
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end('Hello World\n' + comment + '\n');
});

// Listen on port 8000, IP defaults to
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://localhost:8000/");
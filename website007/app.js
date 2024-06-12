var http = require('http');

var server = http.createServer(function(req, res) {
    // Set response status code (optional but good practice)
    res.statusCode = 200;  // Indicates successful request
    res.end('Hello World!');
});

server.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

var http = require("http");

var server = http.createServer((request, response) => {
  response.end();
});

server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");

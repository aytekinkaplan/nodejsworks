var http = require("http");

var server = http.createServer((request, response) => {
  console.log(request.method, request.url);
  console.log(response.statusCode, response.statusMessage);
  response.setHeader("Content-Type", "text/plain");
  response.statusCode = 200;
  response.statusMessage = "OK";
  response.write("<h1>Hello, World!</h1>");
  response.write("\n");
  response.write("<p>Server running at http://127.0.0.1:3000/</p>");
  response.end();
});

server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");

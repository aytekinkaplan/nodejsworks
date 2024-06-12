var http = require("http");

var server = http.createServer((request, response) => {
  // Determine requested URL (cleaner way)
  const url = new URL(request.url, "http://localhost:3000"); // Creates a URL object for easier handling

  // Handle different routes
  if (url.pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      `<!DOCTYPE html>
      <html lang='en'>
        <head>
          <meta charset='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>NodeJS Workshop</title>
        </head>
        <body>
          <h1>NodeJS Workshop</h1>
          <p>
            <a href='/users'>Users</a>
            <a href='/posts'>Posts</a>
            <a href='/comments'>Comments</a>
          </p>
        </body>
      </html>`
    );
    response.end();
  } else if (
    url.pathname === "/users" ||
    url.pathname === "/posts" ||
    url.pathname === "/comments"
  ) {
    // Respond with basic content for each route (assuming no data yet)
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`You requested ${url.pathname.slice(1)}`); // Extract path without leading slash
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("Not Found");
    response.end();
  }
});

server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");

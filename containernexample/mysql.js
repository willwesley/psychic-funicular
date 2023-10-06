const fs = require('fs');       // nodejs builtin to access filesystem stuff
const http = require("http");   // nodejs builtin to do http things
const mysql = require('mysql'); // npm installed package to do mysql things

// create an object to talk to a specific mysql server database
const connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'password',
  database : 'db34'
});
connection.connect();

// create an http server with our request handler
http.createServer((request, response) => {
  console.log("request received", request.url);

  // "api" endpoint
  if(request.url == "/users") {
    // fetch the users
    connection.query('SELECT * FROM users', (error, results, fields) => {
      if (error) {
        // handle a mysql error
        response.writeHead(404)
        response.end("sorry")
        console.log("mysql error", error)
        return
      }
      // send the users to the requestor as JSON
      response.writeHead(200, { 'Content-Type': "text/json" });
      response.end(JSON.stringify(results))
      // ooo, there's a security problem here! free reflection to anyone
      // correctly identifying and sending me a note about it.
      console.log("users request handled")
    });
  } else {
    // static resurce endpoint
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        // handle failure to read the file
        response.writeHead(404)
        response.end("sorry")
        console.log("404 error", err)
        return
      }
      // send the contents of the index.html file
      response.end(data)
      console.log("other request handled")
    });
  }
}).listen(3000)

console.log("server started")

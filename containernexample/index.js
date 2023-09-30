const http = require("http");

http.createServer((request, response) => {
  console.log("request received");
  response.end("omg hi");
}).listen(3000);
console.log("server started");

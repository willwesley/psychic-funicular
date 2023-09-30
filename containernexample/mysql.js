const http = require("http");
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'password',
  database : 'db34'
});

connection.connect();

http.createServer((request, response) => {
  console.log("request received");

  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) throw error;
    response.end(JSON.stringify(results));
    console.log("request handled");
  });
}).listen(3000);

console.log("server started");

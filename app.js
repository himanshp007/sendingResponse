const http = require('http');

const server = http.createServer((req, res) => console.log("Himansh"));

server.listen(4000);
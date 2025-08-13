// app.js
const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from Kubernetes! I'm running on pod: ${os.hostname()}\n`);
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
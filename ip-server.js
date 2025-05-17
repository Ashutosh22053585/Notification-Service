const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'IP server is working!' }));
});

const PORT = 3050;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`IP server running at http://0.0.0.0:${PORT}/`);
});
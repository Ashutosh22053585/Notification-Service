const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Simple server is working!' }));
});

const PORT = 3040;
server.listen(PORT, () => {
  console.log(`Simple server running at http://localhost:${PORT}/`);
});
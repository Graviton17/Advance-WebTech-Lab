import http from 'http';
import logger from '../server/logger.js';

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
  }

  console.log('HTTP Method:', req.method);
  console.log('Request URL:', req.url);

  logger(req, res);

  switch (req.method) {
    case 'GET':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Received a GET request\n');
      break;
    case 'POST':
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          message: 'Received a POST request',
          body: body
        }, null, 2));
      });
      break;
    case 'PUT':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Received a PUT request\n');
      break;
    case 'DELETE':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Received a DELETE request\n');
      break;
    default:
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed\n');
  }
});

const PORT = 3000;
server.listen(PORT, (err, _) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }

  console.log(`Server is running on http://localhost:${PORT}`);
});
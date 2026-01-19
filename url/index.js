import http from 'http';
import url from 'url';
import logger from '../server/logger.js';

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  console.log('Parsed URL:');
  console.log('  Pathname:', pathname);
  console.log('  Query:', query);

  logger(req, res);

  switch (pathname) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to the Home Page!\n');
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is the About Page.\n');
      break;
    case '/search':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: 'Search page',
        queryParameters: query
      }, null, 2));
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found\n');
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


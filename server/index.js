import http from 'http';
import logger from './logger.js';

const server = http.createServer((req, res) => {
    console.log('Received request for:', req.url);

    logger(req, res);

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the Home Page!\n');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the About Page.\n');
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


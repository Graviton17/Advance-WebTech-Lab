import fs from 'fs';

const logger = (req, res) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}`;

    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });
};

export default logger;
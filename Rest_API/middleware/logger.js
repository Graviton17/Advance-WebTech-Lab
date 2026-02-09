import fs from 'fs/promises';

const loggerMiddleware = async (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip || req.connection.remoteAddress;
  
  const logEntry = `[${timestamp}] ${method} ${url} - IP: ${ip}\n`;
  
  try {
    await fs.appendFile('api.log', logEntry);
  } catch (error) {
    console.error('Error writing to log file:', error);
  }
  
  next();
};

export default loggerMiddleware;

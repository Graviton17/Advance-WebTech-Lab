import os from 'os';

console.log('Number of CPU cores:', os.cpus().length);
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('Operating System Platform:', os.platform());
console.log('Operating System Release:', os.release());
console.log('Home Directory:', os.homedir());
console.log('System Uptime (seconds):', os.uptime());

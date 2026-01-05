import { add } from './mathOperation.js';
import fs from 'fs/promises';

console.log("Hello, World!\n");

console.log(`Sum of 1, 2, 3 is: ${add(1, 2, 3)}.\n`);

let data = await fs.readFile('data.txt', 'utf-8');
console.log(`Content of data.txt: ${data}\n`);

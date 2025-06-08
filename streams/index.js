const fs = require('node:fs');

const readFile = fs.createReadStream('hello_world.txt', 'utf8');

readFile.on('data', (chunk) => {
    console.log(chunk.toString());
});

readFile.on('end', () => {
    console.log('file end');
});
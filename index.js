const fs = require('node:fs/promises');
setInterval(() => console.log('test'), 1000);

(async () => {
    const content = await fs.readFile('text.txt');
    console.log(content.toString('utf-8'));
})();


// const fs = require('node:fs');

// fs.readFile('text.txt', (error, data) => {
//     console.log('error', error)
//     console.log('data', data)
// });
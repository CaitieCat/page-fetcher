const request = require('request');
const fs = require('fs');
let info = process.argv.slice(2);
const url = info[0].toString();
const file = info[1].toString();

request(url, (error, response, body) => {
  fs.writeFile(file, body, function (err) {
    if (err){ 
    throw err;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
  });
});
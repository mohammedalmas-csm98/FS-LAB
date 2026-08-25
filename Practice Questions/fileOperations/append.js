//file appending
const fs = require('fs');
fs.appendFile('example.txt', '\nThis is appended content.', err => {
  if (err) throw err;
  console.log('Content appended!');
});

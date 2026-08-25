//file writing
const fs = require('fs');
try {
  fs.writeFileSync('newfile.txt', 'This is new content.');
  console.log('File saved synchronously.');
} catch (err) {
  console.error(err);
}

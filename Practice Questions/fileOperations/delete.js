const fs = require('fs');
fs.unlink('file_to_delete.txt', err => {
  if (err) throw err;
  console.log('File was deleted.');
});

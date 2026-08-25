const fs = require('fs');
try {
  const data = fs.readFileSync('task.txt', 'utf8');
  console.log(data); // "Hello, this is a text file."
} catch (err) {
  console.error(err);
}

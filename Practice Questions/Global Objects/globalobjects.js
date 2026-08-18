// 1. global
global.name = "Almas";

// 2. console
console.log("Hello", global.name);

// 3. process
console.log("Process ID:", process.pid);

// 4. Buffer
const data = Buffer.from("Hello Node.js");
console.log("Buffer:", data);
console.log("Buffer as text:", data.toString());

// 5. __dirname
console.log("Folder:", __dirname);

// 6. __filename
console.log("File:", __filename);

// 7. setTimeout()
setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000);

// 8. setInterval()
let count = 1;

const timer = setInterval(() => {
    console.log("Interval:", count);
    count++;

    if (count > 3) {
        clearInterval(timer);
    }
}, 1000);

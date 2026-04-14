const fs = require("fs");
const path = require("path");
//sync
//The third argument is the callback function (err) => {}

    fs.writeFile("./test.txt", "Hello World Async", (err) => {
    if (err) console.log("Error:", err);
    else console.log("File written successfully!");
});


//Adds the date and a new line (\n) to the end of the file
fs.appendFileSync("./test.txt", `${Date.now()} New Log Entry\n`);


async
fs.writeFile("./test.txt" , "hello world async" , (err) => {})

const filePath = path.join(__dirname, "contects.txt");


const result = fs.readFileSync(filePath, "utf-8");

console.log(result);




/**
 * Combined grep and head command example
 * 
 * grep:
 * node aiwsgrep.js <pattern> <filename>
 * node aiwsgrep.js grep "ERROR" server.log
 * 
 * head:
 * node aiwshead.js head <filename>
 * node aiwshead.js head server.log
 */
const fs = require('fs');
const path = require('path');

let command = process.argv[2];

if (command === "grep") {
    if (process.argv.length !== 5) {
        console.log("Missing argument");
        console.log(`Usage: node ${path.basename(process.argv[1])} <pattern> <filename>`);
        return;
    }

    let filename = process.argv[4];
    let pattern = process.argv[3];
    let content = fs.readFileSync(filename, "utf-8");
    let lines = content.split('\n');

    for (const line of lines) {
        if (line.includes(pattern)) {
            console.log(line);
        }
    }
} else if (command === "head") {
    if (process.argv.length !== 4) {
        console.log("Missing argument");
        console.log(`Usage: node ${path.basename(process.argv[1])} <filename>`);
        return;
    }

    let filename = process.argv[3];
    let content = fs.readFileSync(filename, "utf-8");
    let lines = content.split('\n');

    for (let i = 0; i < 10; i++) {
        console.log(lines[i]);
    }
}
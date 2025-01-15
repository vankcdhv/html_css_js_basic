const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Nhập các số (gõ 'exit' để thoát):");

const inputs = [];
rl.on("line", (line) => {
    if (line.toLowerCase() === "exit") {
        console.log("Các số đã nhập:", inputs);
        rl.close();
    } else {
        inputs.push(parseFloat(line));
    }
});
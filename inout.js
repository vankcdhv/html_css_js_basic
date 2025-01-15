const readline = require("readline");

// Tạo interface để nhận input từ console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Yêu cầu người dùng nhập một số
rl.question("Nhập một số bất kỳ: ", (answer) => {
    const number = parseFloat(answer);

    if (!isNaN(number)) {
        console.log(`Số bạn vừa nhập là: ${number}`);
    } else {
        console.log("Vui lòng nhập một số hợp lệ.");
    }

    rl.close(); // Đóng interface sau khi nhận xong input
});
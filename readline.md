📖 Hướng Dẫn Chi Tiết Cách Sử Dụng readline trong Node.js

📝 Giới thiệu

readline là một module tích hợp sẵn trong Node.js giúp đọc dữ liệu đầu vào từ người dùng thông qua terminal (console).
Nó thường được sử dụng để nhập dữ liệu từ bàn phím trong môi trường dòng lệnh.

🎯 1. Cách sử dụng cơ bản

Trước tiên, cần import module readline và tạo một giao diện (Interface) để nhận dữ liệu nhập vào.

Ví dụ: Nhập tên từ bàn phím và hiển thị lại

``` javascript
const readline = require('readline'); // Import module readline

const rl = readline.createInterface({
    input: process.stdin, // Nhận dữ liệu từ terminal
    output: process.stdout // Xuất dữ liệu ra terminal
});

rl.question("Nhập tên của bạn: ", (name) => {
    console.log(`Xin chào, ${name}!`);
    rl.close(); // Đóng giao diện readline
});
```

📌 Giải thích:
• readline.createInterface({...}): Tạo giao diện nhập/xuất dữ liệu.
• rl.question("Câu hỏi? ", callback): Hiển thị câu hỏi và nhận dữ liệu nhập vào từ người dùng.
• rl.close(): Đóng readline sau khi nhập xong.

🎯 2. Nhập nhiều dữ liệu liên tiếp

Bạn có thể yêu cầu nhập nhiều lần bằng cách sử dụng đệ quy hoặc sự kiện line.

Ví dụ: Nhập tuổi và sở thích

``` javascript
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nhập tên của bạn: ", (name) => {
    rl.question("Nhập tuổi của bạn: ", (age) => {
        rl.question("Nhập sở thích của bạn: ", (hobby) => {
            console.log(`\n👤 Thông tin cá nhân:`);
            console.log(`Tên: ${name}`);
            console.log(`Tuổi: ${age}`);
            console.log(`Sở thích: ${hobby}`);
            rl.close();
        });
    });
});
```

📌 Lưu ý:
• Dữ liệu nhập vào từ question() luôn là string, nếu cần số thì dùng parseInt() hoặc Number().

🎯 3. Lắng nghe nhiều dòng nhập vào

Bạn có thể sử dụng sự kiện line để đọc nhiều dòng dữ liệu thay vì sử dụng question() lồng nhau.

Ví dụ: Nhập danh sách công việc

``` javascript
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

console.log("Nhập danh sách công việc (gõ 'exit' để dừng):");

rl.on("line", (task) => {
    if (task.toLowerCase() === "exit") {
        console.log("\n📌 Danh sách công việc của bạn:");
        tasks.forEach((t, index) => console.log(`${index + 1}. ${t}`));
        rl.close();
    } else {
        tasks.push(task);
        console.log("✔️ Đã thêm: " + task);
    }
});
```

📌 Cách hoạt động:
• Khi nhập "exit", chương trình dừng lại và hiển thị danh sách công việc.
• Lệnh rl.on("line", callback) lắng nghe mỗi dòng nhập vào và thực hiện callback tương ứng.

🎯 4. Nhập dữ liệu số và kiểm tra hợp lệ

Bạn có thể kiểm tra tính hợp lệ của dữ liệu nhập vào bằng cách ép kiểu và xác thực.

Ví dụ: Kiểm tra số nguyên hợp lệ

``` javascript
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Nhập một số nguyên: ", (input) => {
let number = parseInt(input);

    if (!isNaN(number)) {
        console.log(`✅ Bạn đã nhập số: ${number}`);
    } else {
        console.log("❌ Lỗi: Vui lòng nhập một số nguyên hợp lệ!");
    }

    rl.close();

});

```

📌 Cách hoạt động:
• Chuyển đổi input từ string → number bằng parseInt().
• Kiểm tra isNaN() để đảm bảo nhập vào là số hợp lệ.

🎯 5. Hiển thị menu và xử lý lựa chọn bằng switch case

Một cách phổ biến khi dùng readline là tạo menu lựa chọn và xử lý bằng switch case.

Ví dụ: Menu quản lý danh sách sinh viên

``` javascript
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students = [];

function showMenu() {
    console.log("\n📌 MENU QUẢN LÝ SINH VIÊN");
    console.log("1. Thêm sinh viên");
    console.log("2. Xem danh sách sinh viên");
    console.log("3. Thoát");
    rl.question("Chọn một tùy chọn: ", (choice) => {
        switch (choice) {
        case "1":
            rl.question("Nhập tên sinh viên: ", (name) => {
                students.push(name);
                console.log(`✔️ Đã thêm: ${name}`);
                showMenu();
            });
            break;
        case "2":
            console.log("\n📋 Danh sách sinh viên:");
            students.forEach((student, index) => console.log(`${index + 1}. ${student}`));
            showMenu();
            break;
        case "3":
            console.log("👋 Thoát chương trình.");
            rl.close();
            break;
        default:
            console.log("❌ Lựa chọn không hợp lệ. Vui lòng thử lại.");
            showMenu();
        }
    });
}

showMenu();
```
📌 Cách hoạt động:
• Hiển thị menu bằng console.log().
• Xử lý lựa chọn của người dùng bằng switch case.
• Sử dụng đệ quy để quay lại menu sau mỗi thao tác.

🎯 6. Xử lý sự kiện close

Khi người dùng nhấn Ctrl + C hoặc khi rl.close() được gọi, bạn có thể thực hiện hành động trước khi chương trình kết
thúc bằng sự kiện close.

Ví dụ: Hiển thị thông báo khi thoát

``` javascript
rl.on("close", () => {
    console.log("\n👋 Cảm ơn bạn đã sử dụng chương trình!");
    process.exit(0);
});
```

📌 Tóm tắt

Phương pháp Mô tả 

question()    Hỏi một câu và nhận dữ liệu

on("line", callback)    Nhận nhiều dòng nhập vào

parseInt(input)    Chuyển đổi chuỗi thành số

isNaN(value)    Kiểm tra dữ liệu nhập có hợp lệ không

switch case Xử lý nhiều lựa chọn từ menu

on("close", callback)    Thực hiện hành động khi kết thúc
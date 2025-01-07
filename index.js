//  I. Các kiến thức cần nắm vững

//  1. Khai báo biến và kiểu dữ liệu
// 	•	Var, let, const
// 	•	Number, String, Boolean, Null, Undefined, Object, Array, …
// 	•	Number: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// 	•	String: “Xin chào”, “Hello”, “Hi”, “Alo”, “Bonjour”
// 	•	Boolean: true, false
// 	•	Null: null
// 	•	Undefined: undefined
// 	•	Object: {name: “Nguyen Van A”, age: 20}
// 	•	Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  2. Toán tử
// 	•	+, -, *, /, %, ++, –, …
// 	•	==, ===, !=, !==, >, <, >=, <=, …

//  3. Câu lệnh điều kiện
// 	•	if, else, else if
// 	•	switch case

//  4. Vòng lặp
// 	•	for, while, do while
// 	•	for in, for of

//  5. Hàm
// 	•	Khai báo hàm
// 	•	Gọi hàm
// 	•	Tham số hàm
// 	•	Return

//  6. Object
// 	•	Khai báo object
// 	•	Truy xuất thuộc tính
// 	•	Thay đổi giá trị thuộc tính
// 	•	Thêm thuộc tính
// 	•	Xóa thuộc tính

//  7. Array
// 	•	Khai báo array
// 	•	Truy xuất phần tử
// 	•	Thay đổi giá trị phần tử
// 	•	Thêm phần tử
// 	•	Xóa phần tử

//  8. Chuỗi
// 	•	Template string
// 	•	Concatenation
// 	•	Length
// 	•	Index
// 	•	Trim
// 	•	Search
// 	•	Replace
// 	•	Substring
// 	•	ToUpperCase
// 	•	ToLowerCase

//  II. Ví dụ
//  1. Khai báo biến và kiểu dữ liệu
let a = 10;
const PI = 3.14;
var b = "Xin chào";
let c = true;
let d = null;
let e = undefined;
let f = { name: "Nguyen Van A", age: 20 };
let g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  2. Toán tử
let x = 10;
let y = 5;
let z = '10';
console.log("x + y = ", x + y); // 15
console.log("x - y = ", x - y); // 5
console.log("x * y = ", x * y); // 50
console.log("x / y = ", x / y); // 2
console.log("x % y = ", x % y); // 0
console.log("x++ = ", x++); // 10
console.log("x = ", x); // 11
console.log("x-- = ", x--); // 11
console.log("x = ", x); // 10
console.log("x += y = ", (x += y)); // 15
console.log("x -= y = ", (x -= y)); // 10
console.log("x *= y = ", (x *= y)); // 50
console.log("x /= y = ", (x /= y)); // 10
console.log("x %= y = ", (x %= y)); // 0
console.log("x == y = ",x == y); // false
console.log("x == z = ",x == z); // true
console.log("x === y = ",x === y); // false
console.log("x === z = ",x === z); // false
console.log("x != y = ",x != y); // true
console.log("x !== y = ",x !== y); // true
console.log("x > y = ",x > y); // true
console.log("x < y = ",x < y); // false
console.log("x >= y = ",x >= y); // true
console.log("x <= y = ",x <= y); // false

//  3. Câu lệnh điều kiện
let age = 20;
if (age < 18) {
    console.log("Không cho phép vào trang web");
}
else if (age >= 18 && age < 50) {
    console.log("Cho phép vào trang web");
}
else {
    console.log("Không cho phép vào trang web");
}

let color = "red";
switch (color) {
    case "red":
        console.log("Màu đỏ");
        break;
    case "blue":
        console.log("Màu xanh");
        break;
    case "green":
        console.log("Màu xanh lá cây");
        break;
    default:
        console.log("Không xác định");
        break;
}

//  4. Vòng lặp
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 0; i < g.length; i++) {
    console.log(g[i]);
}

let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);

let l = [1, 2, 3, 4, 5];
for (let m in l) {
    console.log(l[m]);
}

let n = [1, 2, 3, 4, 5];
for (let o of n) {
    console.log(o);
}

//  5. Hàm
function sum(a, b) {
    return a + b;
}
console.log('sum(5,10): ',sum(5, 10));
const sumArrow = (a, b) => a + b;
console.log('sumArrow(5,10): ',sumArrow(5, 10));

//  6. Object
let person = {
    name: "Nguyen Van A",
    age: 20
};
console.log('person: ', person);
console.log('person.name: ', person.name);
console.log('person.age: ', person.age);
person.name = "Nguyen Van B";
console.log('person: ', person);
person.address = "Ha Noi";
console.log('person: ', person);
delete person.address;
console.log('person: ', person);

//  7. Array
let numbers = [1, 2, 3, 4, 5];
console.log('numbers: ', numbers);
console.log('numbers[0]: ', numbers[0]);
// change value of index 0
numbers[0] = 10;
console.log('numbers: ', numbers);
// add value to array
numbers.push(6);
console.log('numbers: ', numbers);
// remove value from array
numbers.pop();
console.log('numbers: ', numbers);
// add value to array
numbers.concat([6, 7, 8]);
console.log('numbers: ', numbers);
// remove value from array
numbers.splice(0, 1);
console.log('numbers: ', numbers);


//  8. Chuỗi
let str = "Xin chào";
console.log('str: ', str);
let str1 = "Hello";
console.log('str1: ', str1);

// Template string
let name = "Nguyen Van A";
let age1 = 20;
let str2 = `Xin chào, tôi là ${name}, năm nay tôi ${age1} tuổi`;
console.log('str2: ', str2);

// Concatenation
let str3 = "Xin chào, tôi là " + name + ", năm nay tôi " + age1 + " tuổi";
console.log('str3: ', str3);

// Length
let str4 = "Xin chào";
console.log('str4.length: ', str4.length);

// Index
let str5 = "Xin chào";
console.log('str5[0]: ', str5[0]);

// Trim
let str6 = "   Xin chào   ";
console.log('str6.trim(): ', str6.trim());

// Search
let str7 = "Xin chào";
console.log('str7.search("Xin"): ', str7.search("Xin"));

// Replace
let str8 = "Xin chào";
console.log('str8.replace("Xin", "Hello"): ', str8.replace("Xin", "Hello"));

// Substring
let str9 = "Xin chào";
console.log('str9.substring(0, 3): ', str9.substring(0, 3));

// ToUpperCase
let str10 = "Xin chào";
console.log('str10.toUpperCase(): ', str10.toUpperCase());

// ToLowerCase
let str11 = "Xin chào";
console.log('str11.toLowerCase(): ', str11.toLowerCase());
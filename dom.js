// I. Kiến thức cần biết
// 	•	Lấy element: document.getElementById(), document.querySelector()
//	•	Thay đổi nội dung: element.innerText, element.innerHTML
//	•	Gắn sự kiện: element.addEventListener('click', callback)

// II. Ví dụ
// 	1. Lấy element
// Get element by id heading
let heading = document.getElementById('heading');
// Get element by id title
let title = document.getElementById('title');
// Get element by tag name h1
let h1s = document.getElementsByTagName('h1');
// Get element by class name class_title
let titles = document.getElementsByClassName('class_title');
// Get element by tag name p
let p = document.getElementsByTagName('p');
// 	2. Thay đổi nội dung
// Change heading text
// heading.innerText = 'Hello World'; // Error: Cannot set property 'innerText' of null

// Change h1 text
console.log('hihi, h1: ', h1s);
// h1s[0].innerText = 'Hello World after change';

// Change title text
console.log('hihi, title: ', title);
// titles[0].innerText = 'Hello World after change';

// Change p text
console.log('hihi, p: ', p);
// p[0].innerText = 'Hello World after change';


// 	3. Gắn sự kiện
// Add click event to title
title.addEventListener('click', function(event) {
    console.log('Title clicked');
    alert(event.target.innerText);
});

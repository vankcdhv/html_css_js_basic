### Gợi ý: Bạn sẽ viết code trong file dom.js (đã được nhúng sẵn ở cuối file HTML).
Tất cả ví dụ trong các bài tập này có thể viết thêm hoặc chỉnh sửa trực tiếp vào dom.js.

## Bài Tập 1: Lấy và in ra thông tin các phần tử
1. Lấy element bằng document.getElementById():
- Lấy phần tử có ID = "title".
- In ra innerText của nó trong Console (tab “Console” của DevTools).

// Gợi ý (trong dom.js)
const titleEl = document.getElementById("title");
console.log("Nội dung của #title là:", titleEl.innerText);


2. Lấy tất cả phần tử có class = "class_title":
	- Dùng document.getElementsByClassName("class_title").
	- In ra độ dài length của mảng trả về.
	- In ra từng element hoặc innerText của nó (dùng vòng lặp).

	3.	Lấy element theo tag name (ví dụ <img>):
	•	Dùng document.getElementsByTagName("img").
	•	In ra giá trị src của ảnh (phần tử đầu tiên).

## Bài Tập 2: Thay đổi nội dung và style
1. Thay đổi nội dung thẻ h3 (ID = "id_h3") thành một câu tuỳ ý
2. Thay đổi style cho h2 (ID = "id_h2"):
- Gán style.color = "blue" (hoặc màu tuỳ chọn).
- Gán style.fontSize = "30px" (hoặc kích cỡ tuỳ chọn).
3. Thêm class (CSS) vào h1 (ID = "id_h1") để thay đổi màu chữ hay font-style (nếu bạn có định nghĩa trước trong styles.css):

```javascript
h2El.classList.add("some-new-class");
```
- Nếu chưa có class trong CSS, hãy tự định nghĩa:
```css
.some-new-class {
    color: red;
    font-style: italic;
}
```

## Bài Tập 3: Thêm / Xoá phần tử
1.	Thêm một thẻ p mới vào cuối <body>:
- Tạo element bằng document.createElement("p").
- Gán innerText = “Đoạn văn này được tạo bởi JavaScript”.
- Chèn nó vào document.body hoặc vào một container cụ thể bằng appendChild().

```javascript
const newParagraph = document.createElement("p");
newParagraph.innerText = "Đoạn văn này được thêm bằng JS";
document.body.appendChild(newParagraph);
```


2. Xoá phần tử <img id="logo_pnk"> khi bấm nút:
- Gợi ý: Tạo 1 nút mới (hoặc dùng button có id buttonFeature) trong file HTML.
- Trong hàm removeImage(), lấy element bằng document.getElementById("logo_pnk") và gọi remove():

```javascript
function removeImage() {
    const imgEl = document.getElementById("logo_pnk");
    if (imgEl) {
        imgEl.remove();
        console.log("Đã xóa ảnh thành công!");
    }
}
```

## Bài Tập 4: Xử lý sự kiện (Events)
1. Thêm sự kiện di chuột (mouseover) vào thẻ h4:
- Lấy element h4 (không có id, nhưng có class "class_title" hoặc bạn có thể thêm id riêng).
- Thêm event listener:

```javascript
const h4El = document.querySelector("h4.class_title"); // hoặc getElementsByClassName, ...
h4El.addEventListener("mouseover", () => {
    h4El.style.color = "purple";
});
```
- (Tuỳ chọn) Thêm mouseout để đổi lại màu cũ.
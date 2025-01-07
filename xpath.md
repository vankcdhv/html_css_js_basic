
# Hướng Dẫn Sử Dụng XPath

XPath (XML Path Language) là ngôn ngữ truy vấn được sử dụng để tìm và chọn các nút trong tài liệu XML hoặc HTML. Đây là công cụ mạnh mẽ để xác định vị trí các phần tử hoặc thuộc tính trong DOM.

---

## 1. **Cấu Trúc Cơ Bản của XPath**

### **1.1 Các ký hiệu cơ bản:**
- `/`: Chọn từ gốc.
- `//`: Chọn từ bất kỳ vị trí nào trong tài liệu.
- `.`: Chọn chính nút hiện tại.
- `..`: Chọn nút cha của nút hiện tại.
- `@`: Chọn thuộc tính.

### **1.2 Cách chọn phần tử:**
- `//tagname`: Chọn tất cả các thẻ `<tagname>`.
- `//tagname[@attribute="value"]`: Chọn thẻ `<tagname>` có thuộc tính `attribute` bằng `value`.

### **1.3 Các phép toán và hàm:**
- `=`: So sánh bằng.
- `!=`: So sánh khác.
- `<`, `<=`, `>`, `>=`: So sánh giá trị.
- `contains()`: Kiểm tra chuỗi con.
- `starts-with()`: Kiểm tra chuỗi bắt đầu.
- `text()`: Lấy nội dung văn bản.

---

## 2. **Các Ví Dụ Cụ Thể**

### **2.1 Chọn tất cả các phần tử `<div>`:**
```xpath
//div
```

### **2.2 Chọn thẻ `<input>` với thuộc tính `type="text"`:**
```xpath
//input[@type="text"]
```

### **2.3 Chọn thẻ `<a>` chứa chuỗi "Đăng nhập":**
```xpath
//a[contains(text(), "Đăng nhập")]
```

### **2.4 Chọn thẻ có ID là `main`:**
```xpath
//*[@id="main"]
```

### **2.5 Chọn phần tử con đầu tiên của một thẻ `<ul>`:**
```xpath
//ul/li[1]
```

---

## 3. **Thao Tác Nâng Cao**

### **3.1 Sử dụng hàm `contains` với thuộc tính:**
```xpath
//button[contains(@class, "submit")]
```

### **3.2 Kết hợp điều kiện AND và OR:**
- Điều kiện AND:
```xpath
//input[@type="text" and @name="username"]
```
- Điều kiện OR:
```xpath
//input[@type="text" or @type="password"]
```

### **3.3 Truy cập nút con cụ thể:**
```xpath
//div[@class="container"]/span[2]
```

### **3.4 Sử dụng chỉ số cuối cùng:**
```xpath
//ul/li[last()]
```

---

## 4. **Công Cụ Hỗ Trợ XPath**

- **Trình duyệt (Chrome, Firefox):** Sử dụng Developer Tools (`Ctrl + Shift + C` hoặc `Cmd + Shift + C`) để kiểm tra và thử nghiệm XPath.
- **Tiện ích mở rộng:** Có các plugin như XPath Helper hoặc ChroPath.

---

## 5. **Lưu Ý**

1. XPath phân biệt chữ hoa chữ thường.
2. Nên kiểm tra XPath trên môi trường thực tế để đảm bảo đúng vị trí mong muốn.
3. Hạn chế sử dụng XPath tuyệt đối (ví dụ: `/html/body/...`) vì dễ bị thay đổi khi cấu trúc DOM thay đổi.

---

## 6. **Tài Nguyên Tham Khảo**

- [W3Schools XPath Tutorial](https://www.w3schools.com/xml/xpath_intro.asp)
- [XPath Specification](https://www.w3.org/TR/xpath/)

---

**Tài liệu này hướng dẫn cơ bản và nâng cao về XPath, giúp bạn sử dụng hiệu quả trong kiểm thử tự động hoặc các công việc liên quan đến DOM.**

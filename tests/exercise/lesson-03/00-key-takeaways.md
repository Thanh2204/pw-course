Lesson 3 — Git & Javascript Basic Continue

---

#  Git Branching

## Tạo Branch

```bash
git branch feature/login
```

 Tạo branch mới

 Chưa tự chuyển sang branch đó

---

##  Xem Danh Sách Branch

```bash
git branch
```

 Branch hiện tại sẽ có dấu `*`

---

##  Chuyển Branch

```bash
git checkout feature/login
```

---

##  Tạo Và Chuyển Branch Ngay

```bash
git checkout -b feature/login
```

 Dùng nhiều nhất khi develop feature mới

---

##  Xóa Branch

```bash
git branch -D feature/login
```

Phải đứng ở branch khác trước khi xóa

---

# Git Pull

## Pull code từ remote

```bash
git pull origin main
```

## Pull branch cụ thể

```bash
git pull origin develop
```

Luôn pull code mới nhất trước khi tạo branch mới

---

#  Git Restore & Reset

!image.png

# Restore File

## Từ Staging → Working Directory

```bash
git restore --staged .
```

 Bỏ file khỏi staging area

---

## Restore file cụ thể

```bash
git restore --staged index.js
```

---

# Git Reset

## Quay về commit cũ

```bash
git reset HEAD~2
```

 Quay về trước 2 commit

 Cẩn thận vì có thể mất code

---

#  .gitignore

## .gitignore là gì?

!image.png

Dùng để:

- Bỏ qua file/thư mục không cần Git theo dõi
- Tránh push file rác hoặc file nhạy cảm

---

# Thường Ignore Gì?

| Loại file | Ví dụ |
| --- | --- |
| Dependencies | node_modules |
| Log files | *.log |
| Build files | dist, build |
| Config cá nhân | .env |
| Database local | *.sqlite |

---

#  Syntax .gitignore

!image.png

## Ignore file cụ thể

```
config.js
```

---

## Ignore extension

```
*.log
```

---

## Ignore folder

```
node_modules/
```

---

#  Git Commit Amend

# Sửa Commit Message

```bash
git commit --amend
```

Dùng để sửa commit gần nhất

---

# Thêm file vào commit gần nhất

```bash
git add .
git commit --amend --no-edit
```

 Giữ nguyên commit message cũ

---

#  Lưu Ý

 Không nên amend commit đã push lên remote
 Chỉ nên amend commit local

---

#  Javascript Basics Continue

#  Naming Convention

## Convention là gì?

Quy tắc đặt tên giúp:

- Code dễ đọc
- Team code đồng nhất
- Dễ maintain

---

#  Các Convention Phổ Biến

| Convention | Ví dụ |
| --- | --- |
| snake_case | user_name |
| kebab-case | user-name |
| camelCase | userName |
| PascalCase | UserName |

---

#  Console Log Nâng Cao

#  Template String

```jsx
const name = "Thanh";

console.log(`Toi la ${name}`);
```

Dễ đọc hơn string nối bằng `+`

---

#  Object

## Object là gì?

Dùng để lưu dữ liệu dạng key-value.

---

#  Ví dụ

```jsx
const user = {
  name: "Thanh",
  age: 22
};
```

---

# Truy Cập Value

```jsx
console.log(user.name);
console.log(user["age"]);
```

---

#  Logical Operators
| Operator | Ý nghĩa |
| --- | --- |
| && | AND |
| || | OR |
| ! | NOT |

---

# 🔹 Ví dụ

```jsx
true && false // false
true || false // true
!true // false
```

---

#  Array

## Array là gì?

Dùng để lưu nhiều giá trị.

---

#  Ví dụ

```jsx
const fruits = ["apple", "banana", "orange"];
```

---

# Truy Cập Phần Tử

```jsx
console.log(fruits[0]);
```

---

# Một Số Method Quan Trọng

| Method | Chức năng |
| --- | --- |
| push() | Thêm cuối |
| pop() | Xóa cuối |
| shift() | Xóa đầu |
| unshift() | Thêm đầu |
| includes() | Kiểm tra tồn tại |

---

#  Function

## Function là gì?

Khối code có thể tái sử dụng.

---

#  Function Declaration

```jsx
function sum(a, b) {
  return a + b;
}
```

---

# Arrow Function

```jsx
const sum = (a, b) => {
  return a + b;
};
```

---

#  Arrow Function Viết Ngắn

```jsx
const sum = (a, b) => a + b;
```

---


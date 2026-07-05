# Lesson 2 — Git & Javascript Basic

# Version Control System (VCS)

## VCS là gì?

Hệ thống giúp:

- Quản lý lịch sử code
- Undo/restore code cũ
- Làm việc nhóm
- Đồng bộ nhiều máy

## Các loại VCS

| Type              | Mô tả                                |
| ----------------- | ------------------------------------ |
| Local             | Lưu version trên máy cá nhân         |
| Centralized       | Có 1 server trung tâm                |
| Distributed (Git) | Mỗi máy đều có full source + history |

Hiện nay phổ biến nhất: **Git (DVCS)**

---

# Git Basics

## Git vs GitHub

| Git                     | GitHub                        |
| ----------------------- | ----------------------------- |
| Công cụ quản lý version | Nơi lưu trữ remote repository |
| Chạy local              | Chạy online                   |
| CLI tool                | Platform                      |

---

# Git Workflow

## 1. Working Directory

Nơi chứa:

- File mới
- File đang chỉnh sửa

---

## 2. Staging Area

Nơi chuẩn bị commit

```bash
git add file.txt
```

File được đưa vào vùng staging

---

## 3. Repository

Nơi lưu commit/version

```bash
git commit -m "first commit"
```

Tạo snapshot/version mới

---

# Flow Git Cơ Bản

```bash
git init
git add .
git commit -m "first commit"
```

## Ví dụ

```bash
git add file1.txt
git commit -m "first commit"

git add folder/file4.txt
git commit -m "second commit"
```

---

# Config Git Theo Repo

Muốn mỗi repo dùng account khác nhau:

```bash
git config user.name "Alex"
git config user.email "alex@gmail.com"
```

Repo phải `git init` trước.

---

# Commit Convention

| Prefix | Ý nghĩa               |
| ------ | --------------------- |
| feat   | Thêm tính năng        |
| fix    | Sửa bug               |
| chore  | Việc linh tinh/config |

## Ví dụ

```bash
git commit -m "feat: add login API"
git commit -m "fix: wrong validation"
```

---

# Git Knowledge Quan Trọng

## Cần hiểu:

- Undo công việc
- Pull/Push remote
- Làm việc nhiều máy
- Branching teamwork
- Resolve conflict
- Rebase
- Squash commit

---

# Javascript Basic

# Chạy Javascript

```bash
node tenfile.js
```

---

# Data Types

## String

```js
"double quote";
"single quote"`backtick`;
```

---

# Biến và hằng

## var và let khác nhau

- var cho phép khai báo lại, let thì không
- var có phạm vi global còn let thì phạm vi theo block

---

# Kiểm Tra Kiểu Dữ Liệu

```js
typeof variableName;
```

## Ví dụ

```js
typeof "hello"; // string
typeof 10; // number
```

---

# Toán Tử So Sánh

## `==`

So sánh SAU KHI ép kiểu

```js
1 == "1"; // true
```

---

## `===`

So sánh KHÔNG ép kiểu

```js
1 === "1"; // false
```

Luôn ưu tiên dùng `===`

---

# Logical Operators

| Operator | Ý nghĩa |
| -------- | ------- | --- | --- |
| &&       | AND     |
|          |         |     | OR  |

## Ví dụ

```js
true && false; // false
true || false; // true
```

---

# Unary Operators

## Prefix

```js
++a;
```

Tăng trước rồi mới dùng

---

## Postfix

```js
a++;
```

Dùng trước rồi mới tăng

---

# Javascript Loops

| Loop       | Dùng khi               |
| ---------- | ---------------------- |
| for        | Biết số lần lặp        |
| for...of   | Loop array             |
| forEach    | Loop array ngắn gọn    |
| for...in   | Loop object            |
| while      | Lặp khi condition đúng |
| do...while | Chạy ít nhất 1 lần     |

---

# Format Code

## VSCode Shortcut

### Windows

```text
ALT + SHIFT + F
```

---

# Markdown Basic

## Header

```md
# H1

## H2

### H3
```

---

## Bold / Italic

```md
**Bold**
_Italic_
```

---

## List

```md
- item

1. item
2. item
```

---

## Link

```md
[Text](url)
```

---

## Image

```md
![image](url)
```

---

## Code Block

````md
```js
console.log("hello");
```
````

---

## Block Quote

```md
> content
```

---

## Table

```md
| Name | Age |
| ---- | --- |
| Alex | 20  |
```

---

# Kiến thức bổ sung để làm bài

## Toán chia phần dư (%)

```
% sẽ trả về phần dư của phép tính
```

## In kết hợp giá trị chuỗi của biến với console.log()

```
console.log("message: " , name)
console.log("message: " + name)
```

## Nối chuỗi với toán tử cộng

```
console.log(str1 + str2)
```

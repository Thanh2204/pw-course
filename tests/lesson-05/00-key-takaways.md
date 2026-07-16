# Lesson 5 — DOM Terminology & Playwright Basics

---

#  Function Nâng Cao

## Function Expression


### Khái niệm

Là cách **gán một function vào một biến**.

### Khi nào dùng?

- Muốn lưu function vào biến.
- Truyền function làm callback.
- Phổ biến trong JavaScript hiện đại.

### Cú pháp

```tsx
const add = function (a: number, b: number) {
  return a + b;
};
```

---

## Arrow Function (Lambda Function)

### Khái niệm

Là cú pháp ngắn gọn của Function Expression.

!image.png

### Cú pháp

```tsx
const add = (a: number, b: number) => {
  return a + b;
};
```

### Rút gọn

Nếu chỉ có **1 câu lệnh return**, có thể bỏ `{}` và `return`.

```tsx
const add = (a, b) => a + b;
```

---

### Một số cách khai báo

**Không có tham số**

```tsx
const hello = () => {
  console.log("Hello");
};
```

**Một tham số**

```tsx
const square = (x: number) => x * x;
```

---

## Anonymous Function

### Khái niệm

Function **không có tên**.


### Khi nào dùng?

- Callback
- Event Handler
- Function chỉ sử dụng một lần

### Ví dụ

```tsx
const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
});
```

Hoặc dùng Arrow Function:

```tsx
numbers.forEach((number) => {
  console.log(number);
});
```

> **Best Practice:** Ưu tiên Arrow Function nếu không cần `this`, giúp code ngắn gọn và dễ đọc hơn.
> 

---

#  DOM (Document Object Model)

## Khái niệm

DOM (**Document Object Model**) là cách trình duyệt biểu diễn một trang web dưới dạng **cây (Tree Structure)**.

Khi mở **Developer Tools (F12)**, bạn đang xem cây DOM.

!image.png

!image.png

!image.png

---

## DOM Tree

Ví dụ HTML:

```html
<html>
  <body>
    <div>
      <button>Login</button>
    </div>
  </body>
</html>
```

Cây DOM:

```
html
└── body
    └── div
        └── button
```

---

## Node

Mỗi thành phần trong cây DOM được gọi là **Node**.

Ví dụ:

```html
<button id="login">
    Login
</button>
```

Element này bao gồm:

- Opening Tag
- Closing Tag
- Attribute
- Attribute Value
- Text

---

## Một số HTML Tag phổ biến

| Tag | Chức năng |
| --- | --- |
| `html` | Thẻ gốc |
| `head` | Metadata |
| `body` | Nội dung website |
| `div` | Container dạng block |
| `span` | Container dạng inline |
| `header` | Phần đầu trang |
| `footer` | Phần cuối trang |
| `section` | Nhóm nội dung |
| `nav` | Thanh điều hướng |
| `h1`~`h6` | Tiêu đề |
| `p` | Đoạn văn |
| `a` | Link |
| `img` | Hình ảnh |
| `ul` / `ol` / `li` | Danh sách |

> QA Automation không cần nhớ toàn bộ HTML, nhưng nên nắm các thẻ phổ biến để đọc DOM nhanh hơn.
> 

---

#  Selector

## Khái niệm

Automation chỉ có thể thao tác với element khi **tìm được element đó**.

Selector chính là cách xác định vị trí của element trên trang.

---

## Các loại Selector

| Selector | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Playwright Locator | Dễ đọc, ổn định, Auto Waiting | Chỉ dùng trong Playwright |
| CSS Selector | Nhanh, ngắn gọn | Không tìm được mọi trường hợp |
| XPath | Linh hoạt, mạnh | Dài, khó bảo trì |

---

## Thứ tự ưu tiên

>  **Playwright Locator** → **CSS Selector** → **XPath**
> 

Đây cũng là Best Practice được Playwright khuyến nghị.

---

# XPath

!image.png

## Absolute XPath

Bắt đầu từ root của DOM.

```
/html/body/div/div/input
```

Không nên dùng vì rất dễ hỏng khi UI thay đổi.

---

## Relative XPath

Tìm theo thuộc tính hoặc cấu trúc.

```
//input[@id='email']
```

 Được ưu tiên hơn Absolute XPath.

---

## Khi nào nên dùng XPath?

 Element khó xác định bằng Playwright Locator hoặc CSS.

 Không nên lạm dụng XPath cho mọi element.

---

#  Playwright Basic Syntax

!image.png

## Cấu trúc một Test

```tsx
import { test } from "@playwright/test";

test("Login successfully", async ({ page }) => {

});
```

---

## test()

Đơn vị cơ bản để khai báo một **Test Case**.

```tsx
test("Login", async ({ page }) => {

});
```

---

## test.step()

Dùng để chia nhỏ Test Case thành nhiều bước.

```tsx
test("Login", async ({ page }) => {

  await test.step("Open Login Page", async () => {

  });

  await test.step("Login", async () => {

  });

});
```

### Khi nào dùng?

- Test Case dài
- Muốn report rõ từng bước
- Dễ debug

>  **Best Practice:** Mỗi `test.step()` nên tương ứng với **1 bước trong Test Case Manual**.
> 

---

#  Navigate

Mở một website.

```tsx
await page.goto("https://pw-practice.playwright.com");
```

---

#  Locate Element

Dùng để tìm element trên trang.

```tsx
const emailTextbox = page.locator("//input[@id='email']");
```

Hoặc ưu tiên Playwright Locator:

```tsx
const emailTextbox = page.getByLabel("Email");
```

---

#  Tìm Element (Locator)

Locator là cách Playwright tìm và tương tác với một phần tử trên trang web.

>  **Best Practice:** Hầu hết các thao tác (`click`, `fill`, `check`,...) đều được thực hiện thông qua **Locator**.
> 

---

#  page.locator()

## Khái niệm

`page.locator()` là cách **cơ bản và phổ biến nhất** để tìm element.

Link tham khảo: **https://playwright.dev/docs/api/class-locator**

### Cú pháp

```tsx
page.locator(selector)
```

`selector` có thể là:

- CSS Selector
- XPath
- Text Selector
- Playwright Selector

---

## Ví dụ với CSS Selector

```tsx
const emailTextbox = page.locator("#email");
```

```tsx
const loginButton = page.locator(".btn-login");
```

---

| Ký hiệu | Chọn theo | Ví dụ HTML | Locator |
| --- | --- | --- | --- |
| `#` | **id** | `<input id="email">` | `page.locator("#email")` |
| `.` | **class** | `<button class="btn-login">` | `page.locator(".btn-login")` |
| Không có ký hiệu | **Tên thẻ HTML** | `<button>` | `page.locator("button")` |
| `[]` | **Attribute** | `<input type="text">` | `page.locator("[type='text']")` |

## Ví dụ với XPath

```tsx
const emailTextbox = page.locator("//input[@id='email']");
```

---

## Ví dụ với Attribute

```tsx
const username = page.locator("[name='username']");
```

---

## Ví dụ với Text

```tsx
const loginButton = page.locator("text=Login");
```

---

#  Playwright Built-in Locators

Ngoài `locator()`, Playwright còn cung cấp nhiều Locator thông minh giúp test ổn định hơn.

## getByRole()

Tìm theo **Role** và **Accessible Name**.

```tsx
const loginButton = page.getByRole("button", {
    name: "Login"
});
```

 Ưu tiên sử dụng cho Button, Link, Checkbox...

---

## getByLabel()

Tìm Input thông qua Label.

```tsx
const emailTextbox = page.getByLabel("Email");
```

 Rất phù hợp với Form.

---

## getByPlaceholder()

```tsx
const searchTextbox = page.getByPlaceholder("Search...");
```

---

## getByText()

```tsx
const title = page.getByText("Playwright");
```

---

## getByTestId()

```tsx
const loginButton = page.getByTestId("btn-login");
```

👉Đây là Locator ổn định nhất nếu dự án có hỗ trợ `data-testid`.

---

#  Thứ tự ưu tiên Locator

| Ưu tiên | Locator |
| --- | --- |
| ⭐⭐⭐⭐⭐ | `getByRole()` |
| ⭐⭐⭐⭐⭐ | `getByLabel()` |
| ⭐⭐⭐⭐ | `getByTestId()` |
| ⭐⭐⭐ | `getByPlaceholder()` |
| ⭐⭐ | `locator(CSS)` |
| ⭐ | `locator(XPath)` |

>  Chỉ sử dụng XPath khi không có lựa chọn tốt hơn.
> 

---

#  Click

Click vào một element.

## Cú pháp

```tsx
await locator.click();
```

## Ví dụ với `locator()`

```tsx
await page.locator("#login-btn").click();
```

## Ví dụ với `getByRole()`

```tsx
await page.getByRole("button", {
    name: "Login"
}).click();
```

### Khi nào dùng?

- Click Button
- Link
- Checkbox
- Menu
- Icon

---

# ⌨ Input

## fill()

Điền toàn bộ nội dung vào ô Input.

### Cú pháp

```tsx
await locator.fill(value);
```

### Ví dụ với `locator()`

```tsx
await page
    .locator("#email")
    .fill("admin@gmail.com");
```

### Ví dụ với `getByLabel()`

```tsx
await page
    .getByLabel("Email")
    .fill("admin@gmail.com");
```

 Tương tự thao tác **Paste**.

---

## pressSequentially()

Nhập từng ký tự giống người dùng.

### Cú pháp

```tsx
await locator.pressSequentially(text);
```

### Ví dụ

```tsx
await page
    .locator("#email")
    .pressSequentially("admin@gmail.com");
```

 Tương tự thao tác gõ bằng bàn phím.

### Khi nào dùng?

- Search Box
- Auto Suggest
- Debounce
- Validation theo từng ký tự

>  Nếu chỉ cần nhập dữ liệu thông thường, hãy ưu tiên `fill()` vì nhanh và ổn định hơn.
> 

---

#  Checkbox & Radio

## check()

Đánh dấu Checkbox hoặc Radio.

```tsx
await page.locator("#remember").check();
```

---

## uncheck()

Bỏ chọn Checkbox.

```tsx
await page.locator("#remember").uncheck();
```

---

## isChecked()

Kiểm tra trạng thái đã được chọn hay chưa.

```tsx
const checked = await page
    .locator("#remember")
    .isChecked();

console.log(checked);
```

---

#  Select Dropdown

Áp dụng cho thẻ HTML `<select>`.

## Theo Value

```tsx
await page
    .locator("#country")
    .selectOption("VN");
```

---

## Theo Label

```tsx
await page
    .locator("#country")
    .selectOption({ label: "Vietnam" });
```

---

## Theo Index

```tsx
await page
    .locator("#country")
    .selectOption({ index: 2 });
```

---

#  Upload File
## Upload một file

```tsx
await page
    .locator("input[type='file']")
    .setInputFiles("tests/data/avatar.png");
```

---

## Upload nhiều file

```tsx
await page
    .locator("input[type='file']")
    .setInputFiles([
        "tests/data/file1.pdf",
        "tests/data/file2.pdf"
    ]);
```

---

## Xóa file đã upload

```tsx
await page
    .locator("input[type='file']")
    .setInputFiles([]);
```

---

#  Best Practices

Luôn lưu Locator vào biến nếu sử dụng nhiều lần.

```tsx
const loginButton = page.getByRole("button", {
    name: "Login"
});

await loginButton.click();
await expect(loginButton).toBeVisible();
```

 Ưu tiên:
- `getByRole()`
- `getByLabel()`
- `getByTestId()`

 Chỉ dùng `locator(CSS)` hoặc `locator(XPath)` khi không thể sử dụng Playwright Built-in Locators.

> Hãy nhớ: **`page.locator()` là nền tảng**, còn `getByRole()`, `getByLabel()`, `getByText()`,... chỉ là các cách tiện lợi hơn để tạo ra một **Locator**.
> 

#  await trong Playwright

## Khi nào cần dùng?

Hầu hết các thao tác trên trình duyệt đều là **Asynchronous** nên phải dùng `await`.

Ví dụ:

```tsx
await page.goto(...);

await page.click(...);

await page.fill(...);

await expect(...).toBeVisible();
```

Nếu quên `await`:

- Test chạy sai thứ tự.
- Assertion thất bại.
- Flaky Test.

> **Quy tắc nhớ nhanh:** Hầu như mọi lệnh thao tác với `page`, `locator` và `expect` trong Playwright đều cần `await`.
> 

---

# Best Practices

Ưu tiên:

- `getByRole()`
- `getByLabel()`
- `getByPlaceholder()`
- `getByTestId()`

 Hạn chế:

- CSS Selector phức tạp
- XPath dài
- Absolute XPath

---

#  Key Takeaways

## DOM

- DOM là cây biểu diễn cấu trúc HTML.
- Mỗi phần tử là một Node.
- Hiểu DOM giúp viết Locator chính xác hơn.

---

## Selector

- Ưu tiên **Playwright Locator**.
- CSS Selector là lựa chọn thứ hai.
- Chỉ dùng XPath khi thật sự cần.

---

## Playwright

Nắm được các thao tác cơ bản:

- `test()`
- `test.step()`
- `page.goto()`
- `locator()`
- `click()`
- `fill()`
- `pressSequentially()`
- `check()`
- `selectOption()`
- `setInputFiles()`

---
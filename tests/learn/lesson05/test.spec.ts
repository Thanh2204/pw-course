import { test } from "@playwright/test";

test("Basic action", async ({ page }) => {
  await test.step("Navigate to masterial website", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click bai hoc 1", async () => {
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });

  // await test.step("Input", async () => {
  //   await page.locator("//input[@id='username']").fill("Phu Thanh");
  //   await page
  //     .locator("//input[@id='email']")
  //     .pressSequentially("thanhnguyenphu23@gmail.com", { delay: 1_000 });
  // });

  await test.step("Radio button", async () => {
    let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
    console.log(isCheckedMale);

    await page.locator("//input[@id='male']").check();
    isCheckedMale = await page.locator("//input[@id='male']").isChecked();

    console.log(isCheckedMale);
  });

  await test.step("Select option", async () => {
    await page.locator("//select[@id='country']").selectOption("usa");
  });

  await test.step("upload file", async () => {
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/learn/lesson05/image/1.jpg");
  });
});

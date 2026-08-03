import { test } from "@playwright/test";

test.describe("Material site", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.facebook.com/");
  });

  test.beforeEach(async ({ page }) => {
    await test.step("Go to material page", async () => {
      await page.goto("https://material.playwrightvn.com/");
    });
  });

  test.afterEach(async ({ page }) => {
    await page.goto("https://google.com");
  });

  test.afterAll(async ({ page }) => {
    console.log("Tat ca da xong");
  });

  test("User registration page", async ({ page }) => {
    // await test.step("Go to material page", async() => {
    //   await page.goto("https://material.playwrightvn.com/")
    // })

    await test.step("Click to user registration page ", async () => {
      await page
        .getByRole("link", { name: `Bài học 1: Register Page` })
        .click();
    });
  });

  test("Product Page", async ({ page }) => {
    // await test.step("Go to product page", async () => {
    //   await page.goto("https://material.playwrightvn.com/");
    // });

    await test.step("Click to product page ", async () => {
      await page.getByRole("link", { name: `Bài học 2: Product Page` }).click();
    });
  });
});

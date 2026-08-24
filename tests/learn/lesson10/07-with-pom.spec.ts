import { MyLoginPage } from "./05-pom";

import { test } from "@playwright/test";
test.describe("Login testcase", async () => {
  test("Login success", async ({ page }) => {
    const loginPage = new MyLoginPage(page);

    await test.step("Go to login page", async () => {
      await loginPage.page.goto(
        "https://pw-practice-dev.playwrightvn.com/wp-login.php",
      );
    });

    await test.step("Fill username", async () => {
      //await page.locator("#user_login").fill("betterbytes.academy.admin");
      await loginPage.fillUsername("betterbytes.academy.admin");
    });

    await test.step("Fill pasword", async () => {
      await loginPage.fillPassword("StrongPass@BetterBytesAcademy");
    });

    await test.step("Click button login", async () => {
      // await page.locator("#wp-submit").click();
      await loginPage.clickLogin();
    });
  });

  test("Login failed", async ({ page }) => {
    const loginPage = new MyLoginPage(page);

    await test.step("Go to login page", async () => {
      await loginPage.page.goto(
        "https://pw-practice-dev.playwrightvn.com/wp-login.php",
      );
    });

    await test.step("Fill username", async () => {
      //await page.locator("#user_login").fill("betterbytes.academy.admin");
      await loginPage.fillUsername("wrong");
    });

    await test.step("Fill pasword", async () => {
      await loginPage.fillPassword("wrong");
    });

    await test.step("Click button login", async () => {
      // await page.locator("#wp-submit").click();
      await loginPage.clickLogin();
    });
  });
});

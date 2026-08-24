import { test } from "@playwright/test";

test.describe("Login testcase", async () => {
  test("Login success", async ({ page }) => {
    await test.step("Go to login page", async () => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
    });

    await test.step("Fill username", async () => {
      await page.locator("#user_login").fill("betterbytes.academy.admin");
    });

    await test.step("Fill pasword", async () => {
      await page.locator("#user_pass").fill("StrongPass@BetterBytesAcademy");
    });

    await test.step("Click button login", async () => {
      await page.locator("#wp-submit").click();
    });
  });

  test("Login failed", async ({ page }) => {
    await test.step("Go to login page", async () => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
    });

    await test.step("Fill username", async () => {
      await page.locator("#user_login").fill("abc.academy.admin");
    });

    await test.step("Fill pasword", async () => {
      await page.locator("#user_pass").fill("wrong@BetterBytesAcademy");
    });

    await test.step("Click button login", async () => {
      await page.locator("#wp-submit").click();
    });
  });
});

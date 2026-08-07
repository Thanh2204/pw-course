import { test, expect } from "@playwright/test";

test.describe("AUTH-Authentication", async () => {
  const wrongUsername = "wronguser";
  const wrongPassword = "wrongpass";
  const username = "betterbytes.academy.admin";
  const password = "StrongPass@BetterBytesAcademy";

  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
  });

  test("@AUTH_001-Login fail", async ({ page }) => {
    await test.step("Input username/password", async () => {
      await page.locator("#user_login").fill(wrongUsername);
      await page.locator("#user_pass").fill(wrongPassword);
    });

    await test.step("Click button Login", async () => {
      await page.locator("#wp-submit").click();
    });

    await test.step("Verify Error", async () => {
      await expect(page.locator("#login_error p")).toHaveText(
        `Error: The username ${wrongUsername} is not registered on this site. If you are unsure of your username, try your email address instead.`,
      );
    });
  });

  test("@AUTH_001-Login success", async ({ page }) => {
    await test.step("Input username/password", async () => {
      await page.locator("#user_login").fill(username);
      await page.locator("#user_pass").fill(password);
    });

    await test.step("Click button Login", async () => {
      await page.locator("#wp-submit").click();
    });

    await test.step("Verify login success", async () => {
      await expect(page).toHaveURL(
        "https://pw-practice-dev.playwrightvn.com/wp-admin/",
      );
      await expect(
        page.locator(".wrap h1", { hasText: "Dashboard" }),
      ).toBeVisible();
    });
  });
});

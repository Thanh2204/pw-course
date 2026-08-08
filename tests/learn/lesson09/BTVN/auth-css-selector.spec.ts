import { test, expect } from "@playwright/test";

test.describe("AUTH-Authentication", async () => {
  const testData = {
    wrongUsername: "wronguser",
    wrongPassword: "wrongpass",
    username: "betterbytes.academy.admin",
    password: "StrongPass@BetterBytesAcademy",
  };

  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
  });

  test("@AUTH_001-Login fail", async ({ page }) => {
    const locator = {
      loginPage: {
        username: page.locator("#user_login"),
        password: page.locator("#user_pass"),
        loginBtn: page.locator("#wp-submit"),
        loginErrorNotice: page.locator("#login_error"),
      },
    };

    const loginPage = locator.loginPage;

    await test.step("Input username/password", async () => {
      await loginPage.username.fill(testData.wrongUsername);
      await loginPage.password.fill(testData.wrongPassword);
    });

    await test.step("Click button Login", async () => {
      await loginPage.loginBtn.click();
    });

    await test.step("Verify Error", async () => {
      const expectedErrorMsg = `Error: The username ${testData.wrongUsername} is not registered on this site. If you are unsure of your username, try your email address instead.`;
      await expect(loginPage.loginErrorNotice).toContainText(expectedErrorMsg);
    });
  });

  test("@AUTH_001-Login success", async ({ page }) => {
    const locator = {
      loginPage: {
        username: page.locator("#user_login"),
        password: page.locator("#user_pass"),
        loginBtn: page.locator("#wp-submit"),
        loginErrorNotice: page.locator("#login_error"),
      },
      dashboardPage: {
        //Dashboard locator
        dashboardTitle: page.locator(".wrap h1", { hasText: "Dashboard" }),
      },
    };

    const loginPage = locator.loginPage;
    const dashboardPage = locator.dashboardPage;

    await test.step("Input username/password", async () => {
      await loginPage.username.fill(testData.username);
      await loginPage.password.fill(testData.password);
    });

    await test.step("Click button Login", async () => {
      await loginPage.loginBtn.click();
    });

    await test.step("Verify login success", async () => {
      await expect(page).toHaveURL(
        "https://pw-practice-dev.playwrightvn.com/wp-admin/",
      );
      await expect(dashboardPage.dashboardTitle).toBeVisible();
    });
  });
});

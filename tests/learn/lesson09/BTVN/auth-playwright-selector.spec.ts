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
      await page
        .getByRole("textbox", { name: "Username or Email Address" })
        .fill(wrongUsername);
      await page.getByRole("textbox", { name: "Password" }).fill(wrongPassword);
    });

    await test.step("Click button Login", async () => {
      await page.getByRole("button", { name: "Log In" }).click();
    });

    await test.step("Verify Error", async () => {
      await expect(
        page.getByText(
          `Error: The username ${wrongUsername} is not registered on this site. If you are unsure of your username, try your email address instead.`,
          { exact: true },
        ),
      ).toBeVisible();
    });
  });

  test("@AUTH_001-Login success", async ({ page }) => {
    await test.step("Input username/password", async () => {
      await page
        .getByRole("textbox", { name: "Username or Email Address" })
        .fill(username);
      await page.getByRole("textbox", { name: "Password" }).fill(password);
    });

    await test.step("Click button Login", async () => {
      await page.getByRole("button", { name: "Log In" }).click();
    });

    await test.step("Verify login success", async () => {
      await expect(page).toHaveURL(
        "https://pw-practice-dev.playwrightvn.com/wp-admin/",
      );
      await expect(
        page.getByRole("heading", { name: "Dashboard" }),
      ).toBeVisible();
    });
  });
});

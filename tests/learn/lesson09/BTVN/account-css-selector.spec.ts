import { test, expect, Page } from "@playwright/test";

test.describe("ACCOUNT-account", async () => {
  const adminUsername = "betterbytes.academy.admin";
  const adminPassword = "StrongPass@BetterBytesAcademy";
  const baseUrl = "https://pw-practice-dev.playwrightvn.com/wp-admin";

  async function login(
    page: Page,
    username: string,
    password: string,
  ): Promise<void> {
    await page.goto(baseUrl);
    await page.locator("#user_login").fill(username);
    await page.locator("#user_pass").fill(password);

    await page.locator("#wp-submit").click();

    await expect(page).toHaveURL(/wp-admin/);
    await expect(page.locator("#menu-dashboard")).toBeVisible();
  }

  async function logout(page: Page): Promise<void> {
    await page.locator("#wp-admin-bar-my-account").hover();
    await page.locator("#wp-admin-bar-logout a").click();
  }

  test("@ACC_001-Create account with editor permission", async ({ page }) => {
    const username = "k18-phuthanh";
    const email = "thanhnguyenphu23@gmail.com";
    const firstName = "k18";
    const lastName = "phuthanh";
    const password = "phuthanh123@@@@";

    await test.step("Login as admin", async () => {
      await login(page, adminUsername, adminPassword);
    });

    await test.step("Go to user manage page", async () => {
      //await page.locator("#menu-users").click();
      await page.getByRole("link", { name: "Users", exact: true }).click();
      await expect(page.locator(".page-title-action")).toBeVisible();
    });

    await test.step("Add editor account", async () => {
      await page.locator(".page-title-action").click();

      await page.locator("#user_login").fill(username);
      await page.locator("#email").fill(email);
      await page.locator("#first_name").fill(firstName);
      await page.locator("#last_name").fill(lastName);
      await page.locator("#pass1").fill(password);
      await page.locator("#role").selectOption("Editor");

      await page.locator("#createusersub").click();

      await expect(page.locator("#message")).toHaveText(/New user created/);

      //   await page
      //     .getByRole("textbox", { name: "Username (required)" })
      //     .fill(username);
      //   await page.getByRole("textbox", { name: "Email (required)" }).fill(email);
      //   await page.getByRole("textbox", { name: "First Name" }).fill(firstName);
      //   await page.getByRole("textbox", { name: "Last Name" }).fill(lastName);
      //   await page.getByRole("textbox", { name: "Password" }).fill(password);
      //   await page.getByRole("combobox", { name: "Role" }).selectOption("Editor");

      //   await page.getByRole("button", { name: "Add User" }).click();

      //   await expect(page.locator("//div[@id='message']/p")).toHaveText(
      //     /New user created/,
      //   );
    });

    await test.step("Login with Editor account", async () => {
      await logout(page);
      await login(page, username, password);
    });

    await test.step("Verify Editor permission", async () => {
      await expect(page).toHaveURL(/wp-admin/);

      await expect(page.locator("#menu-dashboard")).toBeVisible();
      await expect(page.locator("#menu-posts")).toBeVisible();
      await expect(page.locator("#menu-media")).toBeVisible();
      await expect(page.locator("#menu-pages")).toBeVisible();
      await expect(page.locator("#menu-comments")).toBeVisible();
      await expect(page.locator("#menu-tools")).toBeVisible();

      await expect(page.locator("#menu-appearance")).toHaveCount(0);
      await expect(
        page.locator("#menu-users", { hasText: "Users" }),
      ).toHaveCount(0);
      await expect(page.locator("#menu-plugins")).toHaveCount(0);
    });

    await test.step("Login as admin", async () => {
      await logout(page);
      await login(page, adminUsername, adminPassword);
    });

    await test.step("Go to user manage page", async () => {
      await page.locator("#menu-users").click();
      //await page.getByRole("heading", { name: "Users", exact: true }).click();
    });

    await test.step("Delete account", async () => {
      await page.locator("#user-search-input").fill(username);
      await page.locator("#search-submit").click();
      const userRow = page.locator(`tr:has(a:has-text("${username}"))`);
      //   await page
      //     .getByRole("searchbox", { name: "Search Users:" })
      //     .fill(username);
      //   await page.getByRole("button", { name: "Search Users" }).click();
      //   const userRow = page.locator("tr", {
      //     has: page.getByRole("link", { name: username }),
      //   });

      await userRow.hover();
      await page.locator(".submitdelete").click();
      await page.locator("#delete_option0").check();
      await page.locator("#submit").click();
      //   await page.getByRole("button", { name: "Confirm Deletion" }).click();
      await expect(page.locator("#message")).toContainText(/User deleted/);
    });
  });

  test("@ACC_001-Create account with subscriber permission", async ({
    page,
  }) => {
    const username = "k18-phuthanh";
    const email = "thanhnguyenphu23@gmail.com";
    const firstName = "k18";
    const lastName = "phuthanh";
    const password = "phuthanh123@@@@";

    await test.step("Login as admin", async () => {
      await login(page, adminUsername, adminPassword);
    });

    await test.step("Go to user manage page", async () => {
      await page.locator("#menu-users").click();
      await expect(page.locator(".page-title-action")).toBeVisible();
      //   await page.locator("#menu-users").click();
      //   await page.getByRole("heading", { name: "Users", exact: true }).click();
      //   await expect(
      //     page.locator("#wpbody-content").getByRole("link", { name: "Add User" }),
      //   ).toBeVisible();
    });

    await test.step("Add subscriber account", async () => {
      await page.locator(".page-title-action").click();

      await page.locator("#user_login").fill(username);
      await page.locator("#email").fill(email);
      await page.locator("#first_name").fill(firstName);
      await page.locator("#last_name").fill(lastName);
      await page.locator("#pass1").fill(password);
      await page.locator("#role").selectOption("Subscriber");

      await page.locator("#createusersub").click();

      await expect(page.locator("#message")).toHaveText(/New user created/);
      //   await page
      //     .locator("#wpbody-content")
      //     .getByRole("link", { name: "Add User" })
      //     .click();
      //   await page
      //     .getByRole("textbox", { name: "Username (required)" })
      //     .fill(username);
      //   await page.getByRole("textbox", { name: "Email (required)" }).fill(email);
      //   await page.getByRole("textbox", { name: "First Name" }).fill(firstName);
      //   await page.getByRole("textbox", { name: "Last Name" }).fill(lastName);
      //   await page.getByRole("textbox", { name: "Password" }).fill(password);
      //   await page
      //     .getByRole("combobox", { name: "Role" })
      //     .selectOption("Subscriber");
      //   await page.getByRole("button", { name: "Add User" }).click();
      //   await expect(page.locator("//div[@id='message']/p")).toHaveText(
      //     /New user created/,
      //   );
    });

    await test.step("Login with Subscriber account", async () => {
      await logout(page);
      await login(page, username, password);
    });

    await test.step("Verify editor permission", async () => {
      await expect(page).toHaveURL(/wp-admin/);
      await expect(page.locator("#menu-dashboard")).toBeVisible();
      await expect(
        page.locator("#menu-users", { hasText: "Profile" }),
      ).toBeVisible();

      await expect(page.locator("#menu-posts")).toHaveCount(0);
      await expect(page.locator("#menu-media")).toHaveCount(0);
      await expect(page.locator("#menu-pages")).toHaveCount(0);
      await expect(page.locator("#menu-comments")).toHaveCount(0);
      await expect(page.locator("#menu-tools")).toHaveCount(0);
      await expect(page.locator("#menu-appearance")).toHaveCount(0);
      await expect(
        page.locator("#menu-users", { hasText: "Users" }),
      ).toHaveCount(0);
      await expect(page.locator("#menu-plugins")).toHaveCount(0);
    });

    await test.step("Login as admin", async () => {
      await logout(page);
      await login(page, adminUsername, adminPassword);
    });

    await test.step("Go to user manage page", async () => {
      await page.locator("#menu-users").click();
      //await page.getByRole("heading", { name: "Users", exact: true }).click();
    });

    await test.step("Delete account", async () => {
      await page.locator("#user-search-input").fill(username);
      await page.locator("#search-submit").click();
      const userRow = page.locator(`tr:has(a:has-text("${username}"))`);
      //   await page
      //     .getByRole("searchbox", { name: "Search Users:" })
      //     .fill(username);
      //   await page.getByRole("button", { name: "Search Users" }).click();
      //   const userRow = page.locator("tr", {
      //     has: page.getByRole("link", { name: username }),
      //   });

      await userRow.hover();
      await page.locator(".submitdelete").click();
      //await page.locator("#delete_option0").check();
      await page.locator("#submit").click();
      //   await page.getByRole("button", { name: "Confirm Deletion" }).click();
      await expect(page.locator("#message")).toContainText(/User deleted/);
    });
  });
});

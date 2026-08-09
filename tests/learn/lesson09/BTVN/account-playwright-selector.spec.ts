import { test, expect, Page } from "@playwright/test";

test.describe("ACCOUNT-account", async () => {
  const testData = {
    admin: {
      username: "betterbytes.academy.admin",
      password: "StrongPass@BetterBytesAcademy",
      baseUrl: "https://pw-practice-dev.playwrightvn.com/wp-admin",
    },
    newUser: {
      username: "k18-phuthanh",
      email: "thanhnguyenphu23@gmail.com",
      firstName: "k18",
      lastName: "phuthanh",
      password: "phuthanh123@@@@",
      menus: [
        {
          name: "Dashboard",
          visible: true,
        },
        {
          name: "Posts",
          visible: true,
        },
        {
          name: "Media",
          visible: true,
        },
        {
          name: "Pages",
          visible: true,
        },
        {
          name: "Comments",
          visible: true,
        },
        {
          name: "Tools",
          visible: true,
        },
        {
          name: "Users",
          visible: false,
        },
        {
          name: "Appearance",
          visible: false,
        },
        {
          name: "Plugins",
          visible: false,
        },
      ],
    },
  };

  const admin = testData.admin;
  const newUser = testData.newUser;

  async function login(
    page: Page,
    username: string,
    password: string,
  ): Promise<void> {
    const elements = {
      loginPage: {
        username: page.getByRole("textbox", {
          name: "Username or Email Address",
        }),
        password: page.getByRole("textbox", { name: "Password" }),
        loginBtn: page.getByRole("button", { name: "Log In" }),
      },
    };

    const loginPage = elements.loginPage;
    await page.goto(admin.baseUrl);
    await loginPage.username.fill(username);
    await loginPage.password.fill(password);
    await loginPage.loginBtn.click();
  }

  async function logout(page: Page): Promise<void> {
    const elements = {
      adminBar: {
        account: page.getByRole("menuitem", { name: /Howdy/ }),
        logoutItem: page.getByRole("menuitem", { name: "Log out" }),
      },
    };
    const adminBar = elements.adminBar;
    await adminBar.account.hover();
    await adminBar.logoutItem.click();
  }

  test("@ACC_001-Create account with editor permission", async ({ page }) => {
    const elements = {
      homePage: {
        menuUsers: page.getByRole("link", { name: "Users", exact: true }),
        addUserBtn: page
          .locator("#wpbody-content")
          .getByRole("link", { name: "Add User" }),
      },
      userPage: {
        username: page.getByRole("textbox", { name: "Username (required)" }),
        email: page.getByRole("textbox", { name: "Email (required)" }),
        firstName: page.getByRole("textbox", { name: "First Name" }),
        lastName: page.getByRole("textbox", { name: "Last Name" }),
        password: page.getByRole("textbox", { name: "Password" }),
        role: page.getByRole("combobox", { name: "Role" }),
        addUserBtn: page.getByRole("button", { name: "Add User" }),
        userCreatedNotice: page.getByText(/New user created/),
        searchBox: page.getByRole("searchbox", { name: "Search Users:" }),
        searchBtn: page.getByRole("button", { name: "Search Users" }),
        userRow: page.locator("tr", {
          has: page.getByRole("link", { name: newUser.username }),
        }),
      },
      // menuBar: {
      //   dashBoard: page.getByRole("link", { name: "Dashboard", exact: true }),
      //   posts: page.getByRole("link", { name: "Posts", exact: true }),
      //   media: page.getByRole("link", { name: "Media", exact: true }),
      //   pages: page.getByRole("link", { name: "Pages", exact: true }),
      //   comments: page.getByRole("link", { name: "Comments", exact: true }),
      //   tools: page.getByRole("link", { name: "Tools", exact: true }),
      //   users: page.getByRole("link", { name: "Users", exact: true }),
      //   appearance: page.getByRole("link", { name: "Appearance", exact: true }),
      //   plugins: page.getByRole("link", { name: "Plugins", exact: true }),
      //},
      deletePage: {
        deleteIcon: page.getByRole("link", { name: "Delete" }),
        deleteCheckbox: page.getByRole("radio", { name: /Delete all content/ }),
        deleteBtn: page.getByRole("button", { name: "Confirm Deletion" }),
        deleteNotice: page.getByText(/User deleted/),
      },
    };
    const homePage = elements.homePage;
    const userPage = elements.userPage;
    //const menuBar = elements.menuBar;
    const deletePage = elements.deletePage;

    await test.step("Login as admin", async () => {
      await login(page, admin.username, admin.password);
    });

    await test.step("Go to user manage page", async () => {
      await homePage.menuUsers.click();
      // Chỗ này nếu cần hover thì xem ở Notion note
      await expect(homePage.menuUsers).toBeVisible();
    });

    await test.step("Add editor account", async () => {
      await homePage.addUserBtn.click();

      await userPage.username.fill(newUser.username);
      await userPage.email.fill(newUser.email);
      await userPage.firstName.fill(newUser.firstName);
      await userPage.lastName.fill(newUser.lastName);
      await userPage.password.fill(newUser.password);
      await userPage.role.selectOption("Editor");

      await userPage.addUserBtn.click();

      await expect(userPage.userCreatedNotice).toBeVisible();
    });

    await test.step("Login with Editor account", async () => {
      await logout(page);
      await login(page, newUser.username, newUser.password);
    });

    await test.step("Verify Editor permission", async () => {
      await expect(page).toHaveURL(/wp-admin/);

      const menus = testData.newUser.menus;
      for (let i = 0; i < menus.length; i++) {
        const item = menus[i];
        const menuLocator = page.getByRole("link", {
          name: `${item.name}`,
          exact: true,
        });
        if (item.visible === true) {
          await expect(menuLocator).toBeVisible();
        } else {
          await expect(menuLocator).not.toBeVisible();
        }
      }

      // await expect(menuBar.dashBoard).toBeVisible();
      // await expect(menuBar.posts).toBeVisible();
      // await expect(menuBar.media).toBeVisible();
      // await expect(menuBar.pages).toBeVisible();
      // await expect(menuBar.comments).toBeVisible();
      // await expect(menuBar.tools).toBeVisible();

      // await expect(menuBar.appearance).toHaveCount(0);
      // await expect(menuBar.users).toHaveCount(0);
      // await expect(menuBar.plugins).toHaveCount(0);
    });

    await test.step("Login as admin", async () => {
      await logout(page);
      await login(page, admin.username, admin.password);
    });

    await test.step("Go to user manage page", async () => {
      await homePage.menuUsers.click();
    });

    await test.step("Delete account", async () => {
      await userPage.searchBox.fill(newUser.username);
      await userPage.searchBtn.click();

      await userPage.userRow.hover();

      await deletePage.deleteIcon.click();
      await deletePage.deleteCheckbox.check();
      //await page.locator(".submitdelete").click();
      //await page.locator("#delete_option0").check();
      await deletePage.deleteBtn.click();
      await expect(deletePage.deleteNotice).toBeVisible();
    });
  });

  //Subscriber account
  //   test("@ACC_001-Create account with subscriber permission", async ({
  //     page,
  //   }) => {
  //     const username = "k18-phuthanh";
  //     const email = "thanhnguyenphu23@gmail.com";
  //     const firstName = "k18";
  //     const lastName = "phuthanh";
  //     const password = "phuthanh123@@@@";

  //     await test.step("Login as admin", async () => {
  //       await login(page, adminUsername, adminPassword);
  //     });

  //     await test.step("Go to user manage page", async () => {
  //       await page.getByRole("link", { name: "Users", exact: true }).click();
  //       await expect(
  //         page.locator("#wpbody-content").getByRole("link", { name: "Add User" }),
  //       ).toBeVisible();
  //     });

  //     await test.step("Add subscriber account", async () => {
  //       await page
  //         .locator("#wpbody-content")
  //         .getByRole("link", { name: "Add User" })
  //         .click();
  //       await page
  //         .getByRole("textbox", { name: "Username (required)" })
  //         .fill(username);
  //       await page.getByRole("textbox", { name: "Email (required)" }).fill(email);
  //       await page.getByRole("textbox", { name: "First Name" }).fill(firstName);
  //       await page.getByRole("textbox", { name: "Last Name" }).fill(lastName);
  //       await page.getByRole("textbox", { name: "Password" }).fill(password);
  //       await page
  //         .getByRole("combobox", { name: "Role" })
  //         .selectOption("Subscriber");
  //       await page.getByRole("button", { name: "Add User" }).click();
  //       await expect(page.getByText(/New user created/)).toBeVisible();
  //     });

  //     await test.step("Login with Subscriber account", async () => {
  //       await logout(page);
  //       await login(page, username, password);
  //     });

  //     await test.step("Verify editor permission", async () => {
  //       await expect(page).toHaveURL(/wp-admin/);

  //       await expect(
  //         page.getByRole("link", { name: "Dashboard", exact: true }),
  //       ).toBeVisible();
  //       await expect(
  //         page.getByRole("link", { name: "Profile", exact: true }),
  //       ).toBeVisible();

  //       await expect(
  //         page.getByRole("link", { name: "Posts", exact: true }),
  //       ).toHaveCount(0);
  //       await expect(
  //         page.getByRole("link", { name: "Media", exact: true }),
  //       ).toHaveCount(0);
  //       await expect(
  //         page.getByRole("link", { name: "Pages", exact: true }),
  //       ).toHaveCount(0);
  //       await expect(
  //         page.getByRole("link", { name: "Comments", exact: true }),
  //       ).toHaveCount(0);
  //       await expect(
  //         page.getByRole("link", { name: "Tools", exact: true }),
  //       ).toHaveCount(0);

  //       await expect(
  //         page.getByRole("link", { name: "Appearance", exact: true }),
  //       ).toHaveCount(0);
  //       await expect(
  //         page.getByRole("link", { name: "Users", exact: true }),
  //       ).toHaveCount(0);
  //       await expect(
  //         page.getByRole("link", { name: "Plugins", exact: true }),
  //       ).toHaveCount(0);
  //     });

  //     await test.step("Login as admin", async () => {
  //       await logout(page);
  //       await login(page, adminUsername, adminPassword);
  //     });

  //     await test.step("Go to user manage page", async () => {
  //       await page.getByRole("link", { name: "Users", exact: true }).click();
  //     });

  //     await test.step("Delete account", async () => {
  //       await page
  //         .getByRole("searchbox", { name: "Search Users:" })
  //         .fill(username);
  //       await page.getByRole("button", { name: "Search Users" }).click();
  //       const userRow = page.locator("tr", {
  //         has: page.getByRole("link", { name: username }),
  //       });

  //       await userRow.hover();
  //       await page.getByRole("link", { name: "Delete" }).click();
  //       //await page.getByRole("radio", { name: /Delete all content/ }).check();
  //       await page.getByRole("button", { name: "Confirm Deletion" }).click();
  //       await expect(page.getByText(/User deleted/)).toBeVisible();
  //     });
  //   });
});

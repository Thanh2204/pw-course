import { test, expect } from "@playwright/test";
import { UserApiPage, Account } from "./00-user.api.page";

const accounts: Record<string, Account> = {
  admin: {
    email: "admin@example.com",
    password: "password",
  },
  user: {
    email: "john@example.com",
    password: "password",
  },
};

test("Login success", async ({ request }) => {
  const userApiPage = new UserApiPage(request);

  await test.step("Login as admin", async () => {
    const loginResponseJson = await userApiPage.login(accounts.admin);
    console.log(loginResponseJson);
    const token = loginResponseJson.data?.token;
    expect(token).toBeTruthy();
  });

  await test.step("Login as user", async () => {
    const loginResponseJson = await userApiPage.login(accounts.user);
    console.log(loginResponseJson);
    const token = loginResponseJson.data?.token;
    expect(token).toBeTruthy();
  });
});

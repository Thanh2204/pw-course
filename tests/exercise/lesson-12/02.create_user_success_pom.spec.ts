import { test, expect } from "@playwright/test";
import { Account, UserApiPage, UserData } from "./00-user.api.page";

// ==================== TEST DATA ====================

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

const uniqueId = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;

const newUserData: UserData = {
  name: `phuthanh_${uniqueId}`,
  email: `phuthanh_${uniqueId}@gmail.com`,
  password: "phuthanh123",
  facebook: "https://facebook.com/newuser",
  avatar: "https://i.pravatar.cc/150?img=20",
  hobbies: "Reading, Coding",
  role: "user",
};
// TESTCASE---------------------------------

test.describe("Create user success", () => {
  let headers: Record<string, string>;
  let id: number | undefined;

  test.beforeEach("Login admin", async ({ request }) => {
    id = undefined;
    const userApiPage = new UserApiPage(request);

    const loginResponseJson = await userApiPage.login(accounts.admin);
    const token = loginResponseJson.data?.token;

    expect(token).toBeTruthy();

    headers = {
      Authorization: `Bearer ${token}`,
    };
  });

  test("Create user success", async ({ request }) => {
    const userApiPage = new UserApiPage(request);
    const newUserResponseJson = await userApiPage.createUser(
      headers,
      newUserData,
    );

    id = newUserResponseJson.user.id;
    expect(id).toBeTruthy();

    await test.step("Get all user", async () => {
      const usersResponseJson = await userApiPage.getAllUser(headers);

      const foundUser = usersResponseJson.users.find(
        (user) => user.id === id || user.email === newUserData.email,
      );

      // Kiểm tra user có tồn tại trong danh sách
      expect(foundUser).toBeDefined();

      if (!foundUser) {
        throw new Error("User không tồn tại trong danh sách");
      }

      expect(foundUser.name).toBe(newUserData.name);
      expect(foundUser.email).toBe(newUserData.email);
    });
  });

  test.afterEach("Delete user", async ({ request }) => {
    if (id === undefined) return;
    const userApiPage = new UserApiPage(request);
    const deleteUserResponseJson = await userApiPage.deleleUser(headers, id);

    expect(deleteUserResponseJson.success).toBe(true);
    id = undefined;
  });
});

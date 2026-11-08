import { test, expect } from "@playwright/test";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  facebook?: string;
  avatar?: string;
  hobbies?: string;
  role?: string;
}

interface UsersResponse {
  success: boolean;
  users: User[];
}

interface LoginResponse {
  success: boolean;
  data?: {
    token: string;
  }
}

// Kiểu dữ liệu response khi tạo user
interface CreateUserResponse {
  success: boolean;
  user: User;
}

interface DeleteUserResponse {
  success: boolean;
  deleted: {
    id: number;
    message: string;
  };
}


test.describe("Create user success", () => {
  const baseURL = "https://material.playwrightvn.com/api/user-management/v1";
  let headers: Record<string, string>;
  let id: number;

  const uniqueId = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const newUserData = {
    name: `phuthanh_${uniqueId}`,
    email: `phuthanh_${uniqueId}@gmail.com`,
    password: "phuthanh123",
    facebook: "https://facebook.com/newuser",
    avatar: "https://i.pravatar.cc/150?img=20",
    hobbies: "Reading, Coding",
    role: "user",
  };

  test.beforeAll("Login admin", async ({ request }) => {
    const loginResponse = await request.post(`${baseURL}/login.php`, {
      data: {
        email: "admin@example.com",
        password: "password",
      },
    });

    expect(loginResponse.status()).toBe(200);

    const loginResponseJson = (await loginResponse.json()) as LoginResponse;
    const token = loginResponseJson.data?.token;

    expect(token).toBeTruthy();

    headers = {
      Authorization: `Bearer ${token}`,
    };
  });

  test("Create user success", async ({ request }) => {
    await test.step("Create user", async () => {
      const newUserResponse = await request.post(`${baseURL}/users.php`, {
        headers,
        data: newUserData,
      });

      expect(newUserResponse.status()).toBe(201);

      const newUserResponseJson = (await newUserResponse.json()) as CreateUserResponse;
      expect(newUserResponseJson.success).toBe(true);
      expect(newUserResponseJson.user).toBeDefined();

      id = newUserResponseJson.user.id;
      expect(id).toBeTruthy();
    });

    await test.step("Get all user", async () => {
      const usersResponse = await request.get(`${baseURL}/users.php`, {
        headers,
      });

      expect(usersResponse.status()).toBe(200);

      const usersResponseJson = (await usersResponse.json()) as UsersResponse;
      expect(usersResponseJson.success).toBe(true);

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

  test.afterAll("Delete user", async ({ request }) => {
    if (!id) return;

    const deleteUserResponse = await request.delete(`${baseURL}/users.php`, {
      headers,
      data: {
        id: `${id}`,
      },
    });

    expect(deleteUserResponse.status()).toBe(200);

    const deleteUserResponseJson = (await deleteUserResponse.json()) as DeleteUserResponse;
    expect(deleteUserResponseJson.success).toBe(true);
  });
});


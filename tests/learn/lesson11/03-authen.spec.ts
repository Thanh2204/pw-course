import { test, expect } from "@playwright/test";
test.describe(" Request method - POST", async () => {
  test("login", async ({ request }) => {
    //Login -->token

    const baseURL = "https://material.playwrightvn.com/api/user-management/v1";

    const loginReponse = await request.post(`${baseURL}/login.php`, {
      data: {
        email: "admin@example.com",
        password: "password",
      },
    });

    const loginReponseJson = await loginReponse.json();
    const token = loginReponseJson.data.token;

    //callAPI
    const userRespone = await request.get(`${baseURL}/users.php`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const userResponseJson = await userRespone.json();
    console.log(userResponseJson);
  });
});

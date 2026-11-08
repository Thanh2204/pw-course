import { test } from "@playwright/test";
import { RegisterPage } from "./pom";

test("Fill Infor in Register Page", async ({ page }) => {
  const newUser = {
    username: "phuthanh",
    email: "thanhnguyenphu23@gmail.com",
    gender: "male",
  };

  const registerPage = new RegisterPage(page);

  await test.step("Open Register Page", async () => {
    await registerPage.openRegisterPage();
  });

  await test.step("Fill information and Register", async () => {
    await registerPage.registerUser(newUser);
  });

  await test.step("Check register successful", async () => {
    await registerPage.expectUserRegistered(newUser);
  });
});

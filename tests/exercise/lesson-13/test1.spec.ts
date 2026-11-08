import { test } from "./05-materialPage-fixture";

test("Fill Infor in Register Page", async ({ registerPage }) => {
  const newUser = {
    username: "phuthanh",
    email: "thanhnguyenphu23@gmail.com",
    gender: "male",
  };

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

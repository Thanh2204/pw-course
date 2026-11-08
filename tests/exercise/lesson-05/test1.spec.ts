import { test } from "@playwright/test";

test("Access page", async ({ page }) => {
  await test.step("Open Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: "Bài học 1: Register Page" }).click();
  });

  await test.step("Register", async () => {
    await page.locator("//input[@id='username']").fill("phuthanh");

    await page.locator("//input[@id='email']").fill("thanhnguyenphu23@gmail.com");
    await page.locator("//input[@id='male']").check();

    await page.locator("//input[@id='reading']").check();


    await page.locator("//select[@id='interests']").selectOption("music");
    await page.locator("//select[@id='country']").selectOption("canada");

    //dob
    await page
      .locator("//input[@id='dob']")
      .fill("2003-04-22");


    //file
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/learn/lesson05/image/1.jpg");

    //textarea
    await page.locator("//textarea[@id='bio']").fill("student");

    //rate
    await page
      .locator("//input[@id='rating']")
      .evaluate((el: HTMLInputElement) => {
        el.value = "8";
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      });

    //color
    await page.locator("#favcolor").fill("#70296e");

    //checbox
    await page.locator("//input[@id='newsletter']").check();

    //span toggle
    await page.locator("label.switch").click();

    //rating star
    await page.locator("#starRating").evaluate((el: HTMLElement) => {
      el.setAttribute("data-rating", "3");
      el.style.setProperty("--rating-width", "60%");
    });

    //button Register
    await page.getByRole("button", { name: "Register" }).click();
  });
});

/*
test("Access page", async ({ page }) => {
  await test.step("Open Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: "Bài học 1: Register Page" }).click();

    await page.getByLabel("username").fill("phuthanh");
    await page.getByLabel("email").fill("thanhnguyenphu23@gmail.com");
    await page.getByRole("radio", { name: "Male", exact: true }).check();

    await page.getByRole("checkbox", { name: "Reading" }).check();
    await page.getByLabel("Interests:").selectOption("music");
    await page.getByLabel("Country:").selectOption("canada");

    //dob
    await page
      .getByRole("textbox", { name: "Date of Birth:" })
      .fill("2003-04-22");

    // await page
    //   .getByLabel("Date of Birth")
    //   .fill("2003-04-22");

    //file
    await page
      .getByLabel("Profile Picture")
      .setInputFiles("tests/learn/lesson05/image/1.jpg");

    //textarea
    await page.getByLabel("Biography").fill("student");

    //rate
    await page
      .locator("//input[@id='rating']")
      .evaluate((el: HTMLInputElement) => {
        el.value = "8";
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      });

    //color
    await page.locator("#favcolor").fill("#70296e");

    //checbox
    await page.getByRole("checkbox", { name: "Subscribe" }).check();

    //span toggle
    await page.locator("label.switch").click();

    //rating star
    await page.locator("#starRating").evaluate((el: HTMLElement) => {
      el.setAttribute("data-rating", "3");
      el.style.setProperty("--rating-width", "60%");
    });

    //button Register
    await page.getByRole("button", { name: "Register" }).click();
  });
});
*/

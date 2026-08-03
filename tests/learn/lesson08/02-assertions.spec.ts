import { test, expect } from "@playwright/test";

test("Demo expect", async () => {
  expect(1 + 2).toEqual(3);

  //Expect array length
  const arr = [1, 2, 3];
  expect(arr).toHaveLength(3);

  //Expect string contains
  const str = "Hello Viet Nam";
  expect(str).toContain("Nam");
});

test("Material page ", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  const title = await page.title();
  expect(title).toContain("Playwright Việt Nam");
});

test("Material page - non web-firtst", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/019-enable-form.html");

  const buttonIsVisible = page.locator("//button[@id='submitButton']");

  

  await expect(buttonIsVisible).toBeEnabled({timeout: 10_000});
  //await page.getByRole("button", {name: "Register"})
});

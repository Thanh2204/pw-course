import { test, expect } from "@playwright/test";
import { MaterialPage } from "./00-pom";

// test("Test 1: registration page", async ({ page }) => {
//   await page.goto("https://material.playwrightvn.com/");

//   await page.getByText("Bài học 1: Register Page (có đủ các element)").click();
//   await expect(page.getByText("User Registration")).toBeVisible();
// });

// test("Test 2: To do page", async ({ page }) => {
//   await page.goto("https://material.playwrightvn.com/");

//   await page.getByText("Bài học 2: Product page").click();
//   await expect(page.getByText("Simple E-commerce")).toBeVisible();
// });

test.describe("Material page without pom", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
  });

  test("Test 1: registration page", async ({ page }) => {
    await page
      .getByText("Bài học 1: Register Page (có đủ các element)")
      .click();
    await expect(page.getByText("User Registration")).toBeVisible();
  });

  test("Test 2: To do page", async ({ page }) => {
    await page.getByText("Bài học 2: Product page").click();
    await expect(page.getByText("Simple E-commerce")).toBeVisible();
  });
});

test.describe("Material page with pom", async () => {
  let materialPage: MaterialPage;

  test.beforeEach(async ({ page }) => {
    materialPage = new MaterialPage(page);
    await materialPage.go();
  });
  test("Test 1: registration page", async ({ page }) => {
    await materialPage.page
      .getByText("Bài học 1: Register Page (có đủ các element)")
      .click();
    await expect(materialPage.page.getByText("User Registration")).toBeVisible();
  });

  test("Test 2: To do page", async ({ page }) => {
    await materialPage.page.getByText("Bài học 2: Product page").click();
    await expect(materialPage.page.getByText("Simple E-commerce")).toBeVisible();
  });
});

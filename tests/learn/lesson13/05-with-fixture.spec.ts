import { expect } from "@playwright/test";
import { test } from "./00-fixture";

test("Test 1: registration page", async ({ materialPage }) => {
  await materialPage.page
    .getByText("Bài học 1: Register Page (có đủ các element)")
    .click();
  await expect(materialPage.page.getByText("User Registration")).toBeVisible();
});

test("Test 2: product page", async ({ materialPage }) => {
  await materialPage.page.getByText("Bài học 2: Product page").click();
  await expect(materialPage.page.getByText("Simple E-commerce")).toBeVisible();
});

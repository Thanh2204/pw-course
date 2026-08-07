import { test, expect } from "@playwright/test";

test("Demo playwright selector", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/12-dom-nested.html");
  const text=await page.getByRole("listitem").filter({hasText: "H"}).count();
  console.log(text);
});

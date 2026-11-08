import { test } from "@playwright/test";

test("open 2 tabs", async ({ context }) => {
  const page1 = await context.newPage();
  const page2 = await context.newPage();
  await page1.goto("https://material.playwrightvn.com/");
  await page2.goto("https://e-commerce-dev.betterbytesvn.com/");
});

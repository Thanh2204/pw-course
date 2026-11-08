import { test } from "@playwright/test";

test("open 2 browser", async ({ browser }) => {
  const newContext1 = await browser.newContext();
  const newContext2 = await browser.newContext();
  try {
    const page1 = await newContext1.newPage();
    const page2 = await newContext2.newPage();

    await Promise.all([
      page1.goto("https://material.playwrightvn.com/"),
      page2.goto("https://example.com/"),
    ]);
  } finally {
    await Promise.all([newContext1.close(), newContext2.close()]);
  }
});

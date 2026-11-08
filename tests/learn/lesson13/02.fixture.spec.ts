import { test } from "@playwright/test";

test("My simple UI test", async ({ page }) => {});

test("My simple API test", async ({ request }) => {});

test("My simple test with browser", async ({ browser }) => {
    const context1= await browser.newContext();
    const page1=await context1.newPage();
    await page1.goto("http://.....")

    //mở nhiều trình dyệt
});



test("My simple test with browserName", async ({ browserName }) => {
    test.skip(browserName ==='chromium');
    console.log(browserName);
});
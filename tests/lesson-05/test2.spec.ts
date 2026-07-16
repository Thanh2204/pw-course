import { test } from "@playwright/test";

test("Product Page", async ({ page }) => {
  await test.step("Open page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: "Bài học 2: Product page" }).click();
  });

  await test.step("Add to cart", async () => {
    //Product1
    const product1 = page
      .locator(".product-info")
      .filter({ hasText: "Product 1" });

    for (let i = 1; i <= 2; i++) {
      await product1.getByRole("button", { name: "Add to Cart" }).click();
    }

    //Product1
    const product2 = page
      .locator(".product-info")
      .filter({ hasText: "Product 2" });

    for (let i = 1; i <= 3; i++) {
      await product2.getByRole("button", { name: "Add to Cart" }).click();
    }

    //Product1
    const product3 = page
      .locator(".product-info")
      .filter({ hasText: "Product 3" });

    await product3.getByRole("button", { name: "Add to Cart" }).click();
  });
});

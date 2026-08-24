import { test } from "@playwright/test";
import { ProductPage } from "./pom";

test("Product Page", async ({ page }) => {
  const products = [
    {
      productName: "Product 1",
      amount: 2,
    },
    {
      productName: "Product 2",
      amount: 3,
    },
    {
      productName: "Product 3",
      amount: 1,
    },
  ];

  const productPage = new ProductPage(page);

  await test.step("Open Product page", async () => {
    await productPage.openProductPage();
  });

  await test.step("Add to cart", async () => {
    await productPage.addProductsToCart(products);
  });

  await test.step("Check quantity and total price", async () => {
    await productPage.expectProductsInCart(products);
  });
});

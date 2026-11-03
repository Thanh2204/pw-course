import { test, expect } from "@playwright/test";
import { ProductApiPage } from "./04-product.api.pate";

test("Get Products", async ({ request }) => {
  const productApiPage = new ProductApiPage(request);
  const responseJson = await productApiPage.getProduct(1, 10);
  console.log(responseJson);
  expect(responseJson.data.products).toHaveLength(10);
});

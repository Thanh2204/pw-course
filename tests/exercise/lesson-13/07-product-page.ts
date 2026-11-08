import { expect, Locator, Page } from "@playwright/test";
import { MaterialBasePage } from "./04-base-page";
export type ProductInfo = {
  productName: string;
  amount: number;
};

export class ProductItem {
  readonly productLocator: Locator;
  readonly productNameLocator: Locator;
  readonly productPriceLocator: Locator;
  readonly addToCartBtnLocator: Locator;
  readonly amount: number;

  constructor(productLocator: Locator, amount: number) {
    this.productLocator = productLocator;
    this.amount = amount;

    this.productNameLocator = this.productLocator.locator(".product-name");
    this.productPriceLocator = this.productLocator.locator(".product-price");
    this.addToCartBtnLocator = this.productLocator.locator(".add-to-cart");
  }

  async getProductPrice(): Promise<number> {
    const price = await this.productPriceLocator.textContent();
    return Number(price?.replace(/[$,]/g, ""));
  }

  async addToCart() {
    for (let i = 0; i < this.amount; i++) {
      await this.addToCartBtnLocator.click();
    }
  }
}

export class ProductPage extends MaterialBasePage {
  readonly productLocator: Locator;
  readonly productTableLocator: Locator;
  readonly totalPriceLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.productLocator = page.locator(".product");
    this.productTableLocator = page.locator("#cart-items tr");
    this.totalPriceLocator = page.locator(".total-price");
  }

  async openProductPage() {
    await this.openMaterialPage();
    await this.productPageLocator.click();
  }

  getProductItemByName(name: string, amount: number) {
    const productItem = this.productLocator.filter({ hasText: name });
    return new ProductItem(productItem, amount);
  }

  getProductRow(name: string) {
    return this.productTableLocator.filter({ hasText: name });
  }

  async addProductsToCart(products: ProductInfo[]) {
    for (const product of products) {
      const productItem = this.getProductItemByName(
        product.productName,
        product.amount,
      );

      await productItem.addToCart();
    }
  }

  async expectProductsInCart(products: ProductInfo[]) {
    let totalPrice = 0;

    for (const product of products) {
      const productItem = this.getProductItemByName(
        product.productName,
        product.amount,
      );
      const price = await productItem.getProductPrice();
      const productRow = this.getProductRow(product.productName);

      totalPrice += price * product.amount;
      await expect(productRow.locator("td").nth(2)).toHaveText(
        product.amount.toString(),
      );
    }

    await expect(this.totalPriceLocator).toHaveText(
      `$${totalPrice.toFixed(2)}`,
    );
  }
}

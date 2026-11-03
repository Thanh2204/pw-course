import { APIRequestContext, expect } from "@playwright/test";

export class ProductApiPage {
  request: APIRequestContext;
  baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = "https://material.playwrightvn.com/api/product-catalog/v1";
  }

  //getProducts
  async getProduct(page: number, limit: number) {
    const response = await this.request.get(
      `${this.baseUrl}/products.php?page=${page}&limit=${limit}`,
    );
    const responseJson = await response.json();
    expect(response.status()).toBe(200);

    return responseJson;
  }
}

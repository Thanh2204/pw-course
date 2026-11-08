import { Page } from "@playwright/test";
export class MaterialPage {
  page: Page;
  baseUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "https://material.playwrightvn.com/";
  }

  async go() {
    await this.page.goto(this.baseUrl);
  }
}

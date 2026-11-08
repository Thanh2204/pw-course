import { Page, Locator } from "@playwright/test";

export class MaterialBasePage {
  readonly page: Page;
  readonly registerPageLocator: Locator;
  readonly productPageLocator: Locator;
  readonly todoPageLocator: Locator;
  readonly personalNotePageLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerPageLocator = page.getByRole("link", {
      name: /Register Page/,
    });
    this.productPageLocator = page.getByRole("link", {
      name: /Product page/,
    });
    this.todoPageLocator = page.getByRole("link", {
      name: /Todo page/,
    });
    this.personalNotePageLocator = page.getByRole("link", {
      name: /Personal notes/,
    });
  }

  async openMaterialPage() {
    await this.page.goto("https://material.playwrightvn.com/");
  }

  async gotoPage(pageName: string) {
    await this.page.goto(pageName);
  }
}

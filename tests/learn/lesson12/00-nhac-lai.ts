import { Page, Locator } from "@playwright/test";

export class MateriaPage {  //UI Page
  page: Page;
  bai1Loc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bai1Loc = this.page.locator("//a[contain(text(), 'Register Page')");
  }
  async clickLessong(name: string) {
    if (name === "bai_1") {
      await this.bai1Loc.click();
    }
  }
}


//API
//Thuoc tinh
// pHUONG THUC
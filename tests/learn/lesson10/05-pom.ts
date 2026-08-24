import { Page } from "@playwright/test";

export class MyLoginPage {
  page: Page;
  logoXpath: string = ".wp-login-logo";
  usernameXpath: string = "#user_login";
  passwordXpath: string = "#user_pass";
  rememberMeXpath: string = "#rememberme";
  loginXpath: string = "#wp-submit";

  constructor(page: Page) {
    this.page = page;
  }

  async fillUsername(username: string) {
    await this.page.locator(this.usernameXpath).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator(this.passwordXpath).fill(password);
  }

  async clickLogin() {
    await this.page.locator(this.loginXpath).click();
  }
}

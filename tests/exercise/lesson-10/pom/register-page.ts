import { expect, Locator, Page } from "@playwright/test";
import { MaterialBasePage } from "./base-page";

export type RegisterUserInfo = {
  username: string;
  email: string;
  gender: string;
};

export class RegisterPage extends MaterialBasePage {
  readonly usernameLocator: Locator;
  readonly emailLocator: Locator;
  readonly genderMaleLocator: Locator;
  readonly genderFemaleLocator: Locator;
  readonly registerBtnLocator: Locator;
  readonly userTableLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameLocator = page.getByRole("textbox", { name: "Username: " });
    this.emailLocator = page.getByRole("textbox", { name: "Email: " });
    this.genderMaleLocator = page.getByRole("radio", {
      name: "Male",
      exact: true,
    });
    this.genderFemaleLocator = page.getByRole("radio", {
      name: "Female",
      exact: true,
    });
    this.registerBtnLocator = page.getByRole("button", { name: "Register" });
    this.userTableLocator = page.locator("tbody tr");
  }

  async openRegisterPage() {
    await this.openMaterialPage();
    await this.registerPageLocator.click();
  }

  async fillUsername(username: string) {
    await this.usernameLocator.fill(username);
  }

  async fillEmail(email: string) {
    await this.emailLocator.fill(email);
  }

  async checkGender(gender: string) {
    if (gender === "male") {
      await this.genderMaleLocator.check();
    } else {
      await this.genderFemaleLocator.check();
    }
  }

  getUserRow(username: string) {
    return this.userTableLocator.filter({ hasText: username });
  }

  async clickRegisterBtn() {
    await this.registerBtnLocator.click();
  }

  async registerUser(user: RegisterUserInfo) {
    await this.fillUsername(user.username);
    await this.fillEmail(user.email);
    await this.checkGender(user.gender);
    await this.clickRegisterBtn();
  }

  async expectUserRegistered(user: RegisterUserInfo) {
    const userRow = this.getUserRow(user.username);

    await expect(userRow).toContainText(user.username);
    await expect(userRow).toContainText(user.email);
    await expect(userRow).toContainText(`Gender: ${user.gender}`);
  }
}

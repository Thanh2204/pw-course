import { expect, Locator, Page } from "@playwright/test";
import { MaterialBasePage } from "./base-page";

export class TodoPage extends MaterialBasePage {
  readonly todoLocator: Locator;
  readonly addTaskBtn: Locator;
  readonly todoItemLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.todoLocator = page.getByRole("textbox", { name: "Enter a new task" });
    this.addTaskBtn = page.getByRole("button", { name: "Add Task" });
    this.todoItemLocator = page.locator("li");
  }

  async openTodoPage() {
    await this.openMaterialPage();
    await this.todoPageLocator.click();
  }

  getTodo(todoText: string) {
    return this.todoItemLocator.filter({
      has: this.page.getByText(todoText, { exact: true }),
    });
  }

  async addATodoTask(number: number) {
    await this.todoLocator.fill(`Todo ${number}`);
    await this.addTaskBtn.click();
  }

  async addMultiTodoTask(number: number) {
    for (let i = 1; i <= number; i++) {
      await this.addATodoTask(i);
    }
  }

  async deleteATodoTask(number: number) {
    const todoItem = this.getTodo(`Todo ${number}`);
    await todoItem.getByRole("button", { name: "Delete" }).click();
  }

  async acceptDialog() {
    this.page.on("dialog", (dialog) => dialog.accept());
  }

  async deleteOddTodoTask(number: number) {
    for (let i = 1; i < number; i += 2) {
      await this.deleteATodoTask(i);
    }
  }

  async expectTodoVisible(number: number) {
    await expect(this.getTodo(`Todo ${number}`)).toBeVisible();
  }

  async expectTodoNotVisible(number: number) {
    await expect(this.getTodo(`Todo ${number}`)).toBeHidden();
  }
}

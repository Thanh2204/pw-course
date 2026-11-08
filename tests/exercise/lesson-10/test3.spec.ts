import { test } from "@playwright/test";
import { TodoPage } from "./pom";

test("Todo page", async ({ page }) => {
  const todoPage = new TodoPage(page);

  await test.step("Open page", async () => {
    await todoPage.openTodoPage();
  });

  await test.step("Add todo 1 - 100", async () => {
    await todoPage.addMultiTodoTask(100);
  });

  await test.step("Delete Task odd", async () => {
    await todoPage.acceptDialog();
    await todoPage.deleteOddTodoTask(100);
  });

  await test.step("Check todo status", async () => {
    await todoPage.expectTodoVisible(90);
    await todoPage.expectTodoNotVisible(21);
  });
});

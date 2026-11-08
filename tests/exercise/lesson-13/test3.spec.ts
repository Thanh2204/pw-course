import { test } from "./05-materialPage-fixture";
test("Todo page", async ({ todoPage }) => {

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

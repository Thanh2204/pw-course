import { test } from "@playwright/test";

test("Todo page", async ({ page }) => {
  await test.step("Open page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: "Bài học 3: Todo page" }).click();
  });

  await test.step("Add todo 1 - 100", async () => {
    for (let i = 1; i <= 10; i++) {
      await page
        .getByRole("textbox", { name: "Enter a new task" })
        .fill(`Todo ${i}`);
      await page.getByRole("button", { name: "Add Task" }).click();
    }
  });

  await test.step("Delete Task odd", async () => {

    page.on("dialog", (dialog) => dialog.accept());

    for (let i = 1; i < 10; i += 2) {
      const todo = page.locator("li").filter({
        has: page.getByText(`Todo ${i}`, {
          exact: true,
        }),
      });

      

      await todo
        .getByRole("button", {
          name: "Delete",
        })
        .click();
    }
  });
});

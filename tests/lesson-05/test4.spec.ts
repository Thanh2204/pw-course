import { test } from "@playwright/test";

test("Personal Note", async ({ page }) => {
  await test.step("Open page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: "Bài học 4: Personal notes" }).click();
  });

  await test.step("Add note", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("click");
    await page.getByRole("textbox", { name: "Content:" }).fill("Hàm click");
    await page.getByRole("button", { name: "Add Note" }).click();

    await page.getByRole("textbox", { name: "Title:" }).fill("fill");
    await page.getByRole("textbox", { name: "Content:" }).fill("Hàm fill");
    await page.getByRole("button", { name: "Add Note" }).click();

    await page.getByRole("textbox", { name: "Title:" }).fill("type");
    await page.getByRole("textbox", { name: "Content:" }).fill("Hàm type");
    await page.getByRole("button", { name: "Add Note" }).click();

    await page.getByRole("textbox", { name: "Title:" }).fill("hover");
    await page.getByRole("textbox", { name: "Content:" }).fill("Hàm hover");
    await page.getByRole("button", { name: "Add Note" }).click();

    await page.getByRole("textbox", { name: "Title:" }).fill("check");
    await page.getByRole("textbox", { name: "Content:" }).fill("Hàm check");
    await page.getByRole("button", { name: "Add Note" }).click();

    await page.getByRole("textbox", { name: "Title:" }).fill("uncheck");
    await page.getByRole("textbox", { name: "Content:" }).fill("Hàm uncheck");
    await page.getByRole("button", { name: "Add Note" }).click();

    await page.getByRole("textbox", { name: "Title:" }).fill("selectOption");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill("Hàm selectOption");
    await page.getByRole("button", { name: "Add Note" }).click();

    await page.getByRole("textbox", { name: "Title:" }).fill("press");
    await page.getByRole("textbox", { name: "Content:" }).fill("Hàm press");
    await page.getByRole("button", { name: "Add Note" }).click();

    await page.getByRole("textbox", { name: "Title:" }).fill("dbclick");
    await page.getByRole("textbox", { name: "Content:" }).fill("Hàm dbclick");
    await page.getByRole("button", { name: "Add Note" }).click();

    await page.getByRole("textbox", { name: "Title:" }).fill("dragAndDrop");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill("Hàm dragAndDrop");
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  await test.step("Search", async () => {
    await page.getByPlaceholder("Search notes...").fill("click");
  });
});

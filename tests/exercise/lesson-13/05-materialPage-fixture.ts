import { test as base, expect } from "@playwright/test";
import { MaterialBasePage } from "./04-base-page";
import { RegisterPage } from "./06-register-page";
import { ProductPage } from "./07-product-page";
import { PersonalNotePage } from "./08-personal-note-page";
import { TodoPage } from "../lesson-10/pom";

type MaterialFixtures = {
  materialPage: MaterialBasePage;
  registerPage: RegisterPage;
  productPage: ProductPage;
  personalNotePage: PersonalNotePage;
  todoPage: TodoPage;
};

const test = base.extend<MaterialFixtures>({
  materialPage: async ({ page }, use) => {
    const materialPage = new MaterialBasePage(page);
    await materialPage.openMaterialPage();
    await expect(
      materialPage.page.getByText("Tài liệu học automation test"),
    ).toBeVisible();

    await use(materialPage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);

    await registerPage.openRegisterPage();

    await use(registerPage);
  },

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await productPage.openProductPage();

    await use(productPage);
  },

  personalNotePage: async ({page}, use) => {
    const personalNotePage = new PersonalNotePage(page);
    await personalNotePage.openPersonalNotePage();

    await use(personalNotePage);
  },

  todoPage: async({page}, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.openTodoPage();

    await use(todoPage);
  }
});

export { test };

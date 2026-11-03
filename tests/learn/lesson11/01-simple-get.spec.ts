import { test, expect } from "@playwright/test";
import { TodoApiPage } from "../lesson12/03-todo.api.page";

test("Get all todos", async ({ request }) => {
  const todoApiPage = new TodoApiPage(request);
  const responeJson = await todoApiPage.getAll();

  // const response= await request.get('https://material.playwrightvn.com/api/todo-app/v1/todos.php');
  // const responseJson=await response.json();
  // console.log(responseJson);
});

test("Get todo with id 50", async ({ request }) => {
  const todoApiPage = new TodoApiPage(request);
  const responeJson = await todoApiPage.getTodo(5);

  console.log(responeJson);
  expect(responeJson.todo.title).toContain("Add");
  expect(responeJson.todo.priority).toEqual("medium"); 

  // const response= await request.get('https://material.playwrightvn.com/api/todo-app/v1/todos.php');
  // const responseJson=await response.json();
  // console.log(responseJson);
});

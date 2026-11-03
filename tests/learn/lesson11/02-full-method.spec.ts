//Tạo mới todo -> Xóa todo vừa tạo

import { test, expect } from "@playwright/test";

test.describe("Full method", async () => {
  let idTodo: number;
  test("Create todo", async ({ request }) => {
    const response = await request.post(
      "https://material.playwrightvn.com/api/todo-app/v1/todos.php",
      {
        data: {
          title: "Hello VietNam",
          description: "Write comprehensive docs for the API",
          status: "pending",
          priority: "high",
          due_date: "2025-10-25T17:00:00",
          user_id: 1,
        },
      },
    );

    const responseJson = await response.json();
    console.log(responseJson);
    idTodo = responseJson.todo.id;

    //check HTTT status code
    expect(response.status()).toBe(201);

    //Check response
    expect(responseJson.success).toBe(true);
    expect(responseJson.todo).toBeDefined();
  });

  test("Delete todo", async ({ request }) => {
    console.log("Delete Todo ID:", idTodo);

    const response = await request.delete(
      "https://material.playwrightvn.com/api/todo-app/v1/todo.php",
      {
        data: {
          id: idTodo,
        },
      },
    );
    //check HTTT status code
    expect(response.status()).toBe(200);
    const responseJson = await response.json();
    console.log(responseJson);
    expect(responseJson.success).toBe(true);
  });
});

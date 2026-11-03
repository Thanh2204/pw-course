import { APIRequestContext, expect } from "@playwright/test";

export class TodoApiPage {
  request: APIRequestContext;
  baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = "https://material.playwrightvn.com/api/todo-app/v1";
  }

  //Get all todo
  async getAll() {
    const response = await this.request.get(`${this.baseUrl}/todos.php`);
    const responseJson = await response.json();

    expect(response.status()).toBe(200); //chỗ này nên để expect vì đối với API

    return responseJson;
  }

  //Get single todo
  async getTodo(id: number) {
    const response = await this.request.get(
      `${this.baseUrl}/todo.php?id=${id}`,
    );
    const responseJson = await response.json();

    expect(response.status()).toBe(200); //chỗ này nên để expect vì đối với API

    return responseJson;
  }

  //Create to do

  //Update todo

  //Update partial todo

  //Delete todo
}

import { APIRequestContext, expect } from "@playwright/test";

//INTERFACE
//-------------------------------
export interface Account {
  email: string;
  password: string;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  facebook?: string;
  avatar?: string;
  hobbies?: string;
  role?: string;
}

export interface User extends UserData {
  id: number;
}

export interface UsersResponse {
  success: boolean;
  users: User[];
}

export interface LoginResponse {
  success: boolean;
  data?: {
    token: string;
  };
}

export interface CreateUserResponse {
  success: boolean;
  user: User;
}

export interface UsersResponse {
  success: boolean;
  users: User[];
}

export interface DeleteUserResponse {
  success: boolean;
  deleted: {
    id: number;
    message: string;
  };
}

//----------------------------------------
export class UserApiPage {
  request: APIRequestContext;
  baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = "https://material.playwrightvn.com/api/user-management/v1";
  }

  //login
  async login(account: Account) {
    const loginResponse = await this.request.post(`${this.baseUrl}/login.php`, {
      data: {
        email: account.email,
        password: account.password,
      },
    });

    const loginResponseJson = await loginResponse.json();

    expect(loginResponse.status()).toBe(200);
    return loginResponseJson as LoginResponse;
  }

  //create user
  async createUser(headers: Record<string, string>, newUserData: UserData) {
    const newUserResponse = await this.request.post(
      `${this.baseUrl}/users.php`,
      {
        headers,
        data: newUserData,
      },
    );

    expect(newUserResponse.status()).toBe(201);
    const newUserResponseJson = await newUserResponse.json();

    return newUserResponseJson as CreateUserResponse;
  }

  //getUser
  async getAllUser(headers: Record<string, string>) {
    const usersResponse = await this.request.get(`${this.baseUrl}/users.php`, {
      headers,
    });

    expect(usersResponse.status()).toBe(200);
    const usersResponseJson = await usersResponse.json();
    return usersResponseJson as UsersResponse;
  }

  //delete user

  async deleleUser(headers: Record<string, string>, id: number) {
    const deleteUserResponse = await this.request.delete(
      `${this.baseUrl}/users.php`,
      {
        headers,
        data: {
          id: `${id}`,
        },
      },
    );

    expect(deleteUserResponse.status()).toBe(200);

    const deleteUserResponseJson = await deleteUserResponse.json();

    return deleteUserResponseJson as DeleteUserResponse;
  }
}

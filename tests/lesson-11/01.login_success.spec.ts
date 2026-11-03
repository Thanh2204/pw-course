import { test, expect } from '@playwright/test'

test("Login success", async ({ request }) => {

    const baseURL = "https://material.playwrightvn.com/api/user-management/v1";
    await test.step("Login as admin", async () => {

        const loginResponse = await request.post(`${baseURL}/login.php`, {
            data: {
                email: "admin@example.com",
                password: "password",
            },
        })

        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.data.token;

        expect(loginResponse.status()).toBe(200);
        expect(token).toBeTruthy();
    })

    await test.step("Login as user", async () => {

        const loginResponse = await request.post(`${baseURL}/login.php`, {
            data: {
                email: "john@example.com",
                password: "password",
            },
        })

        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.data.token;

        expect(loginResponse.status()).toBe(200);
        expect(token).toBeTruthy();
    })


})
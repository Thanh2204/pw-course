import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
  await page.getByText('Product 2').hover();
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
});
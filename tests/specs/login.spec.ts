import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {

  test.skip('Validate elements at Login Page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/);

    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    expect(true).toBe(true);
  });

  test('Login - Validate error message when entering an invalid email', async ({ page }) => {
    //Entering page from recruitment
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(5000);
});
});
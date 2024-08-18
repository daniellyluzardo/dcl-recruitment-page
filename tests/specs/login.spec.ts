import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login.page';

test.describe('Authentication', () => {

  test('Validate elements at Login Page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginUrl();
    await login.loginButton.isVisible();
  });

  test('Login - Succesfully login', async ({ page }) => {
    //Entering page from recruitment
    const login = new LoginPage(page);
    await login.gotoLoginUrl();
    await login.login("Admin","admin123");
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    await page.waitForTimeout(5000);
});
});
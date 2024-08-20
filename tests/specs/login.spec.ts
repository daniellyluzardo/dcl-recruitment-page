import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login.page';

test.describe('Authentication', () => {

  test('Login - Succesfully login', async ({ page }) => {
    //After succesffully logged in, it validates if dashboard page is displayed
    const login = new LoginPage(page);
    await login.gotoLoginUrl();
    await login.login("Admin", "admin123");
    await page.waitForTimeout(5000);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.waitForTimeout(5000);
  });

  test('Validate elements at Login Page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginUrl();
    await login.loginButton.isVisible();
    await login.validateLoginPage();
  });

});
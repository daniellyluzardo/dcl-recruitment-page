import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login.page';
import { HomePage } from '../../Pages/home.page';

test.describe('Home Page Feature', () => {

    test('Validate elements at Home Page', async ({ page }) => {
      const login = new LoginPage(page);
      const home = new HomePage(page);

      await login.gotoLoginUrl();
      await login.login("Admin","admin123");

    });
});
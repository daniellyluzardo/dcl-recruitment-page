import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login.page';
import { HomePage } from '../../Pages/home.page';
import { AdminPage } from '../../Pages/admin.pages';

test.describe('Home Page Feature', () => {

    test.skip('Validate elements at Home Page', async ({ page }) => {
      const login = new LoginPage(page);

      await login.gotoLoginUrl();
      await login.login("Admin","admin123");

    });
    test.skip('Set user as recruiter', async ({ page }) => {
      const login = new LoginPage(page);
      const home = new HomePage(page);
      const admin = new AdminPage(page);

      await login.gotoLoginUrl();
      await login.login("Admin","admin123");
      await home.clickAdminMenu();
      await admin.clickConfigMenu();
      await admin.clickModulesMenu();
      await admin.setRecruitModuleOn();

    });
});
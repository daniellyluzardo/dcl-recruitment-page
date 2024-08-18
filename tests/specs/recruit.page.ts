import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login.page';
import { HomePage } from '../../Pages/home.page';

test.describe.only('Recruitment Feature', () => {

    test('Validate elements at Recruitment Page', async ({ page }) => {
      const login = new LoginPage(page);
      const home = new HomePage(page);

      await login.gotoLoginUrl();
      await login.login("Admin","admin123");
      await home.clickRecruitmentMenu();


    });

    test('Add a new candidate at Recruitment Page', async ({ page }) => {
        const login = new LoginPage(page);
        const home = new HomePage(page);
  
        await login.gotoLoginUrl();
        await login.login("Admin","admin123");
        await home.clickRecruitmentMenu();
        await home.clickRAddCandidates();
  
      });
});
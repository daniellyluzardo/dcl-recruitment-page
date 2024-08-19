import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login.page';
import { HomePage } from '../../Pages/home.page';
import { RecruitPage } from '../../Pages/recruit.page';
import * as path from 'path';

test.describe('Recruitment Feature', () => {
  const firstname = "Jane"
  const midname = "Doe"
  const lastname = "Smith"
  const email = "email@email.com"
  const phone = "(999) 999-9999"

  test.skip('Validate elements at Recruitment Page', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.gotoLoginUrl();
    await login.login("Admin", "admin123");
    await home.clickRecruitmentMenu();


  });

  test('Add a new candidate at Recruitment Page', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const recruitment = new RecruitPage(page);

    await login.gotoLoginUrl();
    await login.login("Admin", "admin123");
    await home.clickRecruitmentMenu();
    await recruitment.clickAddCandidates();
    await recruitment.fillCandidateName(firstname,midname, lastname);
    await expect(page.locator('form i').first()).toBeVisible();
    await page.locator('form i').first().click();
    await expect(page.getByRole('option', { name: 'Senior QA Lead' })).toBeVisible();
    await page.getByRole('option', { name: 'Senior QA Lead' }).click();
    await recruitment.fillEmail(email);
    await recruitment.fillContactNmbr(phone);
    // await recruitment.clickUploadResume();

    // FilePicker
    const fileChooserPromise = page.waitForEvent('filechooser');
    await recruitment.clickUploadResume();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join (process.cwd(),  'tests/utils/resume.docx'));
    await page.getByPlaceholder('Enter comma seperated words...').fill("QA, IT, lead");
    await recruitment.clickDate();
    await recruitment.clickTodayDate();
    // await recruitment.fillDate("2024-12-08");
    await recruitment.fillNotes("Thank you for the opportunity to be considered for this role. I'm excited about the possibility to contribute and grow with your team.");
    await recruitment.markConsent();
    // await recruitment.clickSave();

  });
});
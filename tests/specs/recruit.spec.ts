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
  const vacancyQA = 'Senior QA Lead'
  const vacancySE = 'Software Engineer'

  test('Validate elements at Recruitment Page', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const recruitment = new RecruitPage(page);

    await login.gotoLoginUrl();
    await login.login("Admin", "admin123");
    await home.clickRecruitmentMenu();
    await recruitment.validateRecruitSearchPage();

  });

  test.only('Add a new candidate at Recruitment Page', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const recruitment = new RecruitPage(page);

    await login.gotoLoginUrl();
    await login.login("Admin", "admin123");
    await page.waitForTimeout(5000);
    await home.clickRecruitmentMenu();
    await recruitment.clickAddCandidates();
    await recruitment.fillCandidateName(firstname, midname, lastname);
    await expect(page.getByText('Vacancy-- Select --')).toBeVisible();
    await page.getByText('Vacancy-- Select --').click();
    await recruitment.fillVacancy(vacancyQA);
    await recruitment.fillEmail(email);
    await recruitment.fillContactNmbr(phone);
    // FilePicker
    const fileChooserPromise = page.waitForEvent('filechooser');
    await recruitment.clickUploadResume();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('tests/utils/resume.docx');
    await page.getByPlaceholder('Enter comma seperated words...').fill("QA, IT, lead");
    await recruitment.selectDate('2024-12-08');
    await recruitment.fillNotes("Thank you for the opportunity to be considered for this role. I'm excited about the possibility to contribute and grow with your team.");
    // await recruitment.markConsent();
    await recruitment.clickSaveButton();
    await recruitment.validateSuccessSaveMessage();
    await page.waitForTimeout(3000);
    // await page.close();

  });

  test.only('Edit candidate at Recruitment Page', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const recruitment = new RecruitPage(page);
    const fullname = firstname + " " + midname + " " + lastname

    await login.gotoLoginUrl();
    await login.login("Admin", "admin123");
    await page.waitForTimeout(3000);
    await home.clickRecruitmentMenu();
    await expect(page.locator('div').filter({ hasText: /^Vacancy-- Select --$/ }).first()).toBeVisible();
    await page.locator('div').filter({ hasText: /^Vacancy-- Select --$/ }).first().click();
    await recruitment.fillVacancy(vacancyQA);
    await recruitment.searchForCandidate(firstname);
    await page.getByRole('option', { name: firstname }).first().click();
    await recruitment.clickSearch();
    await page.waitForTimeout(3000);
    await expect(page.locator('.orangehrm-container')).toBeVisible();
    await page.locator('.orangehrm-container').locator('[type="button"]').first().click();
    await page.waitForTimeout(3000);
    await recruitment.validateCandidateSearch(fullname, vacancyQA);
    await recruitment.editCandidate();
    await recruitment.fillEmail(email+Date.now());
    await recruitment.fillContactNmbr("(999)"+Date.now());
    await recruitment.clickDate();
    await recruitment.clickTodayDate();
    await recruitment.fillNotes("Thank you for the opportunity to be considered for this role.");
    await recruitment.clickSaveButton();
    await recruitment.validateSuccessEditMessage();
    await page.waitForTimeout(3000);
    // await page.close();

  });
});
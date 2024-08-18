import { expect, type Locator, type Page } from '@playwright/test';
export class HomePage {
    readonly page: Page;
    readonly recruitButtonMenu: Locator;
    readonly addCandidate: Locator;

    constructor(page: Page) {
        this.page = page;
        this.recruitButtonMenu = page.locator('[role="presentation"]');
        this.addCandidate = page.locator('[type=button]').getByAltText('+');
        // await expect(todoCount).toContainText('3');

    }
    async gotoHomeUrl() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await expect(this.page).toHaveTitle(/OrangeHRM/);
    }
    async clickRecruitmentMenu(){
        await expect(this.recruitButtonMenu).toBeVisible();
        await this.recruitButtonMenu.click();
    }
    async clickRAddCandidates(){
        await expect(this.addCandidate).toBeVisible();
        await this.addCandidate.click();
    }
}
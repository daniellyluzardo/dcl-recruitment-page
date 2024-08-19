import { expect, type Locator, type Page } from '@playwright/test';
export class AdminPage {
    readonly page: Page;
    readonly configurationBox: Locator;
    readonly menuModules: Locator;
    readonly recmoduleOn: Locator;
    readonly moduleSaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.configurationBox = page.locator('li').filter({ hasText: 'Configuration' });
        this.menuModules = page.getByRole('menuitem', { name: 'Modules' });
        this.recmoduleOn = page.locator('div').filter({ hasText: /^Recruitment Module$/ }).locator('span');
        this.moduleSaveButton = page.getByRole('button', { name: 'Save' });

    }

    async clickConfigMenu() {
        await expect(this.configurationBox).toBeVisible();
        await this.configurationBox.click();
    }
    async clickModulesMenu() {
        await expect(this.menuModules).toBeVisible();
        await this.menuModules.click();
    }
    async setRecruitModuleOn() {
        await expect(this.recmoduleOn).toBeVisible();
        // await this.recmoduleOn.isChecked();
        // await expect(this.recmoduleOn).toBeChecked();
        await this.recmoduleOn.setChecked(true);
        await this.moduleSaveButton.click();
    }


}
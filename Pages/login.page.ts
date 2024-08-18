import { expect, type Locator, type Page } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('[name="username"]');
        this.password = page.locator('[name="password"]');
        this.loginButton = page.locator('[type="submit"]')
        // this.loginButton = page.getByRole('button', { name: 'Login' })
    }
    async gotoLoginUrl() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(this.page).toHaveTitle(/OrangeHRM/);

    }
    async login(username: string, password: any) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}
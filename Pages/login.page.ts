import { expect, type Locator, type Page } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly forgotPwdButton:Locator;
    readonly loginHeader: Locator;
    readonly credentialsUser: Locator;
    readonly credentialsPwd: Locator;
    readonly usernameHeader: Locator;
    readonly pwdHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('[name="username"]');
        this.password = page.locator('[name="password"]');
        this.loginButton = page.locator('[type="submit"]');
        this.loginHeader = page.getByRole('heading', { name: 'Login' });
        this.credentialsUser = page.getByText('Username : Admin');
        this.credentialsPwd = page.getByText('Password : admin123');
        this.usernameHeader = page.getByText('Username', { exact: true });
        this.pwdHeader = page.getByText('Password', { exact: true });
        this.forgotPwdButton = page.getByText('Forgot your password?');
        
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
    async validateLoginPage() {
        await expect(this.loginHeader).toBeVisible();
        await expect(this.credentialsUser).toBeVisible();
        await expect(this.credentialsPwd).toBeVisible();
        await expect(this.usernameHeader).toBeVisible();
        await expect(this.username).toBeVisible();
        await expect(this.pwdHeader).toBeVisible();
        await expect(this.password).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.forgotPwdButton).toBeVisible();
        
}}
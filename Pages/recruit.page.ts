import { expect, type Locator, type Page } from '@playwright/test';
export class RecruitPage {
    readonly page: Page;
    readonly addCandidate: Locator;
    readonly firstname: Locator;
    readonly midname: Locator;
    readonly lastname: Locator;
    readonly vacancy: Locator;
    readonly optionQA: Locator;
    readonly option: Locator;
    readonly email: Locator;
    readonly contactNmbr: Locator;
    readonly resumeButton: Locator;
    readonly datepicker: Locator;
    readonly todaydate: Locator;
    readonly notes: Locator;    
    readonly consentCB: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addCandidate = page.getByRole('button', { name: ' Add' });
        this.firstname = page.getByPlaceholder('First Name');
        this.midname = page.getByPlaceholder('Middle Name');
        this.lastname = page.getByPlaceholder('Last Name');
        this.vacancy = page.locator('form i').first();
        //change it to variable
        this.option = page.getByRole('option', { name: 'Senior QA Lead' });
        this.email = page.getByPlaceholder('Type here').first();
        this.contactNmbr = page.getByPlaceholder('Type here').nth(1);
        this.resumeButton = page.getByText('Browse');
        // this.resumeButton = page.getByRole('button', { name: ' Browse' });
        this.datepicker = page.getByPlaceholder('dd-mm-yyyy');
        this.todaydate = page.getByText('Today');
        this.notes = page.locator('textarea');
        this.consentCB = page.locator('[type="checkbox"]');
        this.saveButton = page.getByRole('button', { name: 'Save' });

    }
    async clickAddCandidates() {
        await expect(this.addCandidate).toBeVisible();
        await this.addCandidate.click();
    }
    async fillCandidateName(firstname: string, midname: string, lastname: string,) {
        await expect(this.firstname).toBeVisible();
        await this.firstname.fill(firstname);
        await expect(this.midname).toBeVisible();
        await this.midname.fill(midname);
        await expect(this.lastname).toBeVisible();
        await this.lastname.fill(lastname);
    }
    async fillEmail(email: string) {
        await expect(this.email).toBeVisible();
        await this.email.fill(email);
    }
    async fillContactNmbr(contactNmbr: string) {
        await expect(this.contactNmbr).toBeVisible();
        await this.contactNmbr.fill(contactNmbr);
    }
    async clickUploadResume() {
        await expect(this.resumeButton).toBeVisible();
        await this.resumeButton.click();
    }
    async clickDate() {
        await expect(this.datepicker).toBeVisible();
        await this.datepicker.click();
    }
    async clickTodayDate() {
        await expect(this.todaydate).toBeVisible();
        await this.todaydate.click();
    }
    async fillNotes(note: string) {
        await expect(this.notes).toBeVisible();
        await this.notes.fill(note);
    }
    async markConsent(){
        await expect(this.consentCB).toBeVisible();
        await this.consentCB.click();
    }
    async clickSave() {
        await expect(this.saveButton).toBeVisible();
        await this.saveButton.click();
    }
}
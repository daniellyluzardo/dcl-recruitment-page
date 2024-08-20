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
    readonly candNameSearchbox: Locator;
    readonly candSearchButton: Locator;
    readonly successAddCandMessage: Locator;
    readonly successEditCandMessage: Locator;
    readonly clickEdit: Locator;
    readonly header1: Locator;
    readonly confirmButton: Locator;
    readonly jobTitleHeader: Locator;
    readonly vacancyHeader: Locator;
    readonly hiringMngrHeader: Locator;
    readonly statusHeader: Locator;
    readonly CandNameHeader: Locator;
    readonly keywordsHeader: Locator;
    readonly dateApplicHeader: Locator;
    readonly methodApplicHeader: Locator;
    readonly resetButton: Locator;

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
        // this.datepicker = page.getByPlaceholder('dd-mm-yyyy');
        this.datepicker = page.locator('form i').nth(2);
        this.todaydate = page.getByText('Today');
        this.notes = page.locator('textarea');
        this.consentCB = page.locator('[type="checkbox"]');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.candNameSearchbox = page.getByPlaceholder('Type for hints...');
        this.candSearchButton = page.getByRole('button', { name: 'Search' });
        this.successAddCandMessage = page.getByText('SuccessSuccessfully Saved×');
        this.clickEdit = page.locator('label').filter({ hasText: 'Edit' }).locator('span');
        this.header1 = page.getByRole('heading', { name: 'Application Stage' });
        this.confirmButton = page.getByRole('button', { name: 'Yes, Confirm' });
        this.successEditCandMessage = page.getByText('SuccessSuccessfully Updated×');
        this.jobTitleHeader = page.getByText('Job Title', { exact: true });
        this.vacancyHeader = page.getByText('Vacancy', { exact: true });
        this.hiringMngrHeader = page.getByText('Hiring Manager', { exact: true });
        this.statusHeader = page.getByText('Status', { exact: true });
        this.CandNameHeader = page.getByText('Candidate Name', { exact: true });
        this.keywordsHeader = page.getByText('Keywords');
        this.dateApplicHeader = page.getByText('Date of Application', { exact: true });
        this.methodApplicHeader = page.getByText('Method of Application', { exact: true });
        this.resetButton = page.getByRole('button', { name: 'Reset' });


    }
    async clickAddCandidates() {
        await expect(this.addCandidate).toBeVisible();
        await this.addCandidate.click();
    }
    async fillCandidateName(firstname: string, midname: string, lastname: string) {
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
    async fillVacancy(vacancy: string) {
        await expect(this.page.getByRole('option', { name: vacancy })).toBeVisible();
        await this.page.getByRole('option', { name: vacancy }).click();
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
    async markConsent() {
        await expect(this.consentCB).toBeVisible();
        await this.consentCB.setChecked(true);
    }
    async clickSaveButton() {
        await expect(this.saveButton).toBeVisible();
        await this.saveButton.click();
    }
    async clickConfirmEditButton() {
        await expect(this.confirmButton).toBeVisible();
        await this.confirmButton.click();
    }
    async searchForCandidate(candidate: string) {
        await expect(this.candNameSearchbox).toBeVisible();
        await this.candNameSearchbox.fill(candidate);
    }
    async clickSearch() {
        await expect(this.candSearchButton).toBeVisible();
        await this.candSearchButton.click();
    }
    async validateSuccessSaveMessage() {
        await expect(this.successAddCandMessage).toBeVisible();
    }
    async validateSuccessEditMessage() {
        await expect(this.successEditCandMessage).toBeVisible();
    }
    async validateCandidateSearch(name: string, vacancy: string) {
        await expect(this.header1).toBeVisible();
        this.page.getByText(name, { exact: true });
        this.page.getByText(vacancy, { exact: true });

    }
    async editCandidate() {
        await expect(this.clickEdit).toBeVisible();
        await this.clickEdit.setChecked(true);
    }
    async validateRecruitSearchPage() {
        await expect(this.jobTitleHeader).toBeVisible();
        await expect(this.vacancyHeader).toBeVisible();
        await expect(this.hiringMngrHeader).toBeVisible();
        await expect(this.statusHeader).toBeVisible();
        await expect(this.CandNameHeader).toBeVisible();
        await expect(this.keywordsHeader).toBeVisible();
        await expect(this.dateApplicHeader).toBeVisible();
        await expect(this.methodApplicHeader).toBeVisible();
        await expect(this.resetButton).toBeVisible();
    }
}
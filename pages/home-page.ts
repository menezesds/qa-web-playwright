import { expect, type Locator, type Page } from "@playwright/test";


export class HomePage {
   //variables
    readonly page: Page;
    readonly getStartedButton: Locator;
    readonly getTitle: RegExp;   

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('link', { name: 'Get started' });
        this.getTitle = /Playwright/;
    }

    //methods
    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }

    async clickGetStarted() {
        await this.getStartedButton.click();
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.getTitle);
    }
}

export default HomePage;
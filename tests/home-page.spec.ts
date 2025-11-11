import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { TopMenuPage } from '../pages/top-menu-page';

//AAA Pattern
//POM

const URL = 'https://playwright.dev/';
let homePage: HomePage;
let topMenuPage: TopMenuPage;
const pageURL = /.*intro/;

test.beforeEach(async ({ page }, testInfo) => {
    homePage = new HomePage(page);
    await homePage.navigate();
});

async function clickGetStarted(page:Page) {
    await homePage.clickGetStarted();
    topMenuPage = new TopMenuPage(page);
}

test.describe('Playwright WebSite', () => {
    test('@smoke - has title', async () => {
        await homePage.assertPageTitle();
    });

    test('get started link', async ({ page }) => {
        await clickGetStarted(page);
        await topMenuPage.assertPageUrl(pageURL);
    });

    test('check Java page', async ({ page }) => {
        await test.step('Act - Navigate to Home Page and Click Get Started', async () => {
            await clickGetStarted(page);
            await topMenuPage.hoverNode();
            await topMenuPage.clickJava();
        });

        await test.step('Assert -Assertions on Java Page', async () => {
            await topMenuPage.assertPageUrl(pageURL);
            await topMenuPage.assertNodeDescriptionNotVisible();
            await topMenuPage.assertJavaDescriptionVisible();
        });
    });
});
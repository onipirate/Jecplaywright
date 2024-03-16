import { test, expect } from '@playwright/test';

test('Playwright Login Successful Test', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise');
    console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('//input[@id="password"]').fill('learning');
    await page.locator('#signInBtn').click();
    await expect(page.locator('.btn.btn-primary')).toContainText('Checkout');
    // await page.waitForTimeout(5000);
});


test('Negative Login Scenario - Invalid Username and Password', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise');
    console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademi');
    await page.locator('//input[@id="password"]').fill('learning');
    await page.locator('#signInBtn').click();
    await expect(page.locator('.alert')).toContainText('Incorrect username/password');
    // await page.waitForTimeout(5000);
});
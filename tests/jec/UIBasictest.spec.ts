/* eslint-disable @typescript-eslint/no-unused-vars */
import { test, expect } from '@playwright/test';

test('Jec First Basic Playwright Test', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise');
    console.log(await page.title());
});
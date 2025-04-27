import { test, expect } from '@playwright/test';

test('invalid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('invalid_user');
  await page.locator('#password').fill('wrong_sauce');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});
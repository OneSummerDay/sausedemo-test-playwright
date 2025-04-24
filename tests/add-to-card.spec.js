import { test, expect } from '@playwright/test';

test('success login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  await page.click('#login-button');

  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  await page.locator('.shopping_cart_link').click();

  const itemName = await page.locator('.inventory_item_name');
  await expect(itemName).toHaveText('Sauce Labs Backpack');
});
import { test, expect } from '@playwright/test';

test('remove item from the card', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  await page.click('#login-button');

  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  await page.locator('.shopping_cart_link').click();

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await expect(page.locator('.cart_item')).toHaveCount(0);
});
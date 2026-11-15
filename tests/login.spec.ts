import { test, expect } from '@playwright/test';
import { env } from '../src/config/env';

test('test', async ({ page }) => {
  await page.goto('/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(env.user.name);
  await page.getByRole('textbox', { name: 'Password' }).fill(env.user.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('/secure');
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

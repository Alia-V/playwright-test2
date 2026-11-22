import { test, expect } from '../fixtures';
import { users } from '../data/users';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.open();
});

test.describe('Login', () => {
  test('successful login with valid credentials', async ({ loginPage, securePage, page }) => {
    await loginPage.login(users.valid.name, users.valid.password);

    await expect(page).toHaveURL('/secure');
    await expect(securePage.flashMessage).toContainText('You logged into a secure area!');
    await expect(securePage.heading).toBeVisible();
    await expect(securePage.loggedInAs(users.valid.name)).toBeVisible();
  });

  test('unsuccessful login with invalid name', async ({ loginPage, page }) => {
    await loginPage.login(users.invalidName.name, users.invalidName.password);

    await expect(page).toHaveURL('/login');
    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
  });

  test('unsuccessful login with invalid password', async ({ loginPage, page }) => {
    await loginPage.login(users.invalidPassword.name, users.invalidPassword.password);

    await expect(page).toHaveURL('/login');
    await expect(loginPage.flashMessage).toContainText('Your password is invalid!');
  });
});

test.describe('Logout', () => {
  test('logout after successful login', async ({ loginPage, securePage, page }) => {
    await loginPage.login(users.valid.name, users.valid.password);

    await securePage.logout();

    await expect(page).toHaveURL('/login');
    await expect(loginPage.flashMessage).toContainText('You logged out of the secure area!');
  });
});

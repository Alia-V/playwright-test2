import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { SecurePage } from '../pages/secure.page';

type Pages = {
  loginPage: LoginPage;
  securePage: SecurePage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  securePage: async ({ page }, use) => {
    await use(new SecurePage(page));
  },
});

export { expect } from '@playwright/test';

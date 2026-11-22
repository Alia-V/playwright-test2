import { type Locator, type Page } from '@playwright/test';

export class SecurePage {
  readonly page: Page;
  readonly flashMessage: Locator;
  readonly heading: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMessage = page.locator('#flash');
    this.heading = page.getByRole('heading', { name: 'Secure Area', exact: true });
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async open() {
    await this.page.goto('/secure');
  }

  loggedInAs(name: string): Locator {
    return this.page.getByText(`Logged in as ${name}`);
  }

  async logout() {
    await this.logoutButton.click();
  }
}

import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMessage = page.locator('#flash');
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async open() {
    await this.page.goto('/login');
  }

  async login(name: string, password: string) {
    await this.usernameInput.fill(name);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async search(productName: string) {
    await this.page.getByPlaceholder('Search store').fill(productName);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }
}
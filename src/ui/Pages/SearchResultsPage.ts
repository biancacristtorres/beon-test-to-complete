import { Page } from '@playwright/test';

export class SearchResultsPage {
  constructor(private page: Page) {}

  async clickProduct(productName: string) {
    await this.page.getByRole('link', { name: productName }).first().click();
  }
}

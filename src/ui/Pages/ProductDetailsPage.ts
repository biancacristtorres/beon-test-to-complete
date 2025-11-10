import { Page, expect } from '@playwright/test';

export class ProductDetailsPage {
  constructor(private page: Page) {}

  async expectProductTitle(productName: string) {
    await expect(
      this.page.getByRole('heading', { name: productName })
    ).toBeVisible();
  }
}

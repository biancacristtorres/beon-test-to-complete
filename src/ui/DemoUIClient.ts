import type { Page } from '@playwright/test';

export class DemoUIClient {
  constructor(public page: Page) {}

  async gotoHome() {
    await this.page.goto('/');
  }
}
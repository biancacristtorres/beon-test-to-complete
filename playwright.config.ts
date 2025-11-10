import { defineConfig, devices } from '@playwright/test';
import properties from './properties.json'


export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  expect: {
    timeout: 30_000
  },
  use: {
    baseURL: properties.ui.baseUrl,
    headless: false,
    browserName: 'chromium',
    trace: 'on',
    screenshot: 'only-on-failure'
  },
});

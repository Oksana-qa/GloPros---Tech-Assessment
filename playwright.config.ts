import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: 'https://review-chore-qa-i-lgtytk.dev.glopros.com',
    browserName: 'chromium',
    headless: true,
  },
});

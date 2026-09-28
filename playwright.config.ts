import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://review-chore-qa-i-lgtytk.dev.glopros.com',
    browserName: 'chromium',
    headless: true,
  },
});

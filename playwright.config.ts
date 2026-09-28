import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/browser',
  timeout: 20000,
  fullyParallel: true,
  workers: 3,
  use: {
    baseURL: 'http://127.0.0.1:4174',
    viewport: { width: 1728, height: 1117 },
  },
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        launchOptions: process.platform === 'darwin'
          ? { executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' }
          : {},
      },
    },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  webServer: {
    command: 'npx vite --config tests/vite.config.ts --host 127.0.0.1 --port 4174',
    url: 'http://127.0.0.1:4174/tests/fixtures/preloader.html',
    reuseExistingServer: !process.env.CI,
  },
});

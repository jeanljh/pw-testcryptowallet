import type { PlaywrightTestConfig } from '@playwright/test';
import { TestWallet } from './fixtures/init'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig<TestWallet> = {
  testDir: './tests',
  /** Maximum time one test can run for. */
  timeout: 0,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /** Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /** Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /** Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /** Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /** Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /** Timeout for each navigation action */
    navigationTimeout: 30 * 1000,
    /** Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 30 * 1000,
    /** Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://magiceden.io/',
    /** Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /** Takes screenshot on failure */
    screenshot: 'only-on-failure',
    /** Run test in headless */
    headless: false,
    /** Set page width and height */
    viewport: {
      width: 1280,
      height: 640
    },
  },
  projects: [
    {
      name: 'phantom',
      use: { wallet: 'phantom' },
    },
    {
      name: 'metamask',
      use: { wallet: 'metamask' },
    },
    {
      name: 'coinbase',
      use: { wallet: 'coinbase' },
    },
  ]
};

export default config;

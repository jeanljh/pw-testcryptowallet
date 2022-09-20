import { test as base, BrowserContext, chromium, Page } from '@playwright/test'
import { extPhantom, extMetamask, extCoinbase } from '../fixtures/data.json'

export type TestWallet = {
    wallet: string
}

export const test = base.extend<{
    wallet: string
    browserContext: BrowserContext
    page: Page
}>({
    wallet: ['metamask', { option: true }],
    browserContext: async ({wallet}, use) => {
        let extPath = '../extensions/'
        switch (wallet) {
            case 'phantom':
                extPath += extPhantom
                break;
            case 'metamask':
                extPath += extMetamask
                break;
            case 'coinbase':
                extPath += extCoinbase
                break;
        }
        extPath = require('path').join(__dirname, extPath)
        const browserContext: BrowserContext = await chromium.launchPersistentContext('', {
            args: [
                `--disable-extensions-except=${extPath}`,
                `--load-extension=${extPath}`
            ]
        })
        await browserContext.grantPermissions(['clipboard-read', 'clipboard-write'])
        await Promise.all([
            browserContext.waitForEvent('page'),
            browserContext.backgroundPages()[0]
        ])
        const [page, page2] = browserContext.pages()
        await page.bringToFront()
        await page2.close()
        await use(browserContext)
    },
    page: async ({browserContext}, use) => {
        await use(browserContext.pages()[0])
    },
})
// export const test = baseTest;
// export const expect = test.expect;
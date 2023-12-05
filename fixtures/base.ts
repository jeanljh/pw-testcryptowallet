import { test as baseTest, BrowserContext, chromium, Page } from '@playwright/test'
import { extPhantom, extMetamask, extCoinbase } from './data.json'
import Phantom from '../pages/phantom.page'
import Metamask from '../pages/metamask.page'
import Coinbase from '../pages/coinbase.page'
import Home from '../pages/home.page'

export type TestWallet = {
  wallet: string
}

export const test = baseTest.extend<{
  wallet: string
  browserContext: BrowserContext
  page: Page
  walletExt: Phantom | Metamask | Coinbase
  home: Home
}>({
  wallet: ['metamask', { option: true }],
  browserContext: async ({ wallet }, use) => {
    let extPath = '../extensions/'
    switch (wallet) {
      case 'phantom':
        extPath += extPhantom
        break
      case 'metamask':
        extPath += extMetamask
        break
      case 'coinbase':
        extPath += extCoinbase
        break
    }
    extPath = require('path').join(__dirname, extPath)
    const browserContext: BrowserContext = await chromium.launchPersistentContext('', {
      args: [`--disable-extensions-except=${extPath}`, `--load-extension=${extPath}`],
    })
    await browserContext.grantPermissions(['clipboard-read', 'clipboard-write'])
    await Promise.all([browserContext.waitForEvent('page'), browserContext.backgroundPages()[0]])
    const [page, page2] = browserContext.pages()
    await page.bringToFront()
    await page2.close()
    await use(browserContext)
  },
  page: async ({ browserContext }, use) => {
    await use(browserContext.pages()[0])
  },
  walletExt: async ({ wallet, browserContext, page }, use) => {
    switch (wallet) {
      case 'phantom':
        const phantom = new Phantom(browserContext, page)
        await phantom.onboarding()
        await use(phantom)
        break
      case 'metamask':
        const metamask = new Metamask(browserContext, page)
        await metamask.onBoarding()
        await use(metamask)
        break
      case 'coinbase':
        const coinbase = new Coinbase(browserContext, page)
        await coinbase.onboarding()
        await use(coinbase)
        break
    }
  },
  home: async ({ page }, use) => {
    await use(new Home(page))
  },
})

export default test
export const expect = test.expect

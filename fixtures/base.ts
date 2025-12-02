import { test as baseTest, BrowserContext, chromium, Page } from '@playwright/test'
import { extCoinbase, extOkx, extPhantom } from './data.json'
import { Wallet } from './enums'
import Coinbase from '../pages/coinbase.page'
import Okx from '../pages/okx.page'
import Phantom from '../pages/phantom.page'
import Home from '../pages/home.page'

export type TestWallet = {
  wallet: string
}

export const test = baseTest.extend<{
  wallet: string
  browserContext: BrowserContext
  page: Page
  page2: Page
  walletExt: Coinbase | Okx | Phantom
  home: Home
}>({
  wallet: ['metamask', { option: true }],
  browserContext: async ({ wallet }, use) => {
    let extPath = '../extensions/'
    switch (wallet) {
      case Wallet.Coinbase:
        extPath += extCoinbase
        break
      case Wallet.Okx:
        extPath += extOkx
        break
      case Wallet.Phantom:
        extPath += extPhantom
        break
    }
    extPath = require('path').join(__dirname, extPath)
    const browserContext: BrowserContext = await chromium.launchPersistentContext('', {
      args: [`--disable-extensions-except=${extPath}`, `--load-extension=${extPath}`],
    })
    await browserContext.grantPermissions(['clipboard-read', 'clipboard-write'])
    if (wallet !== Wallet.Coinbase) { 
      await browserContext.waitForEvent('page')
    }
    await use(browserContext)
  },
  page: async ({ browserContext }, use) => {
    await use(browserContext.pages()[0])
  },
  page2: async ({ browserContext }, use) => {
    await use(browserContext.pages()[1])
  },
  walletExt: async ({ wallet, browserContext, page, page2 }, use) => {
    switch (wallet) {
      case Wallet.Coinbase:
        const coinbase = new Coinbase(browserContext, page)
        await coinbase.onboarding()
        await use(coinbase)
        break
      case Wallet.Okx:
        const okx = new Okx(browserContext, page2)
        await okx.onboarding()
        await use(okx)
        break
      case Wallet.Phantom:
        const phantom = new Phantom(browserContext, page2)
        await phantom.onboarding()
        await use(phantom)
        break
    }
  },
  home: async ({ page }, use) => {
    await use(new Home(page))
  },
})

export default test
export const expect = test.expect

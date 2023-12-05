import { BrowserContext, Page } from '@playwright/test'
import { urlCoinbase } from '../fixtures/data.json'
import credentials from '../fixtures/config'

export default class Coinbase {
  constructor(
    readonly browserContext: BrowserContext,
    readonly page: Page
  ) {}

  get btnImportKey() {
    return this.page.getByTestId('btn-import-existing-wallet')
  }
  get btnEnterKey() {
    return this.page.getByTestId('btn-import-recovery-phrase')
  }
  get inputKey() {
    return this.page.getByTestId('seed-phrase-input')
  }
  get btnImportWallet() {
    return this.page.getByTestId('btn-import-wallet')
  }
  get inputPwd() {
    return this.page.getByTestId('setPassword')
  }
  get inputPwdVerify() {
    return this.page.getByTestId('setPasswordVerify')
  }
  get ckbTerms() {
    return this.page.getByTestId('terms-and-privacy-policy')
  }
  get btnSubmit() {
    return this.page.getByTestId('btn-password-continue')
  }
  get textWalletReady() {
    return this.page.getByTestId('wallet-ready')
  }
  get btnConnect() {
    return this.page.getByTestId('allow-authorize-button')
  }

  /** coinbase onboarding */
  async onboarding() {
    await this.page.goto(urlCoinbase)
    await this.page.waitForLoadState()
    await this.btnImportKey.click()
    await this.btnEnterKey.click()
    await this.inputKey.fill(credentials.seedPhrase)
    await this.btnImportWallet.click()
    await this.inputPwd.fill(credentials.password)
    await this.inputPwdVerify.fill(credentials.password)
    await this.ckbTerms.check()
    await this.btnSubmit.click()
    await this.textWalletReady.waitFor()
  }

  async initPage() {
    const page = await this.browserContext.waitForEvent('page')
    await page.setViewportSize({
      width: 320,
      height: 550,
    })
    return new Coinbase(this.browserContext, page)
  }

  async confirm() {
    const coinbase = await this.initPage()
    await coinbase.btnConnect.click()
  }
}

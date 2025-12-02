import { BrowserContext, Page } from '@playwright/test'
import credentials from '../fixtures/config'

export default class Okx {
  constructor(
    readonly browserContext: BrowserContext,
    readonly page: Page
  ) {}

  get iframe() {
    return this.page.frameLocator('#ui-ses-iframe')
  }

  get btnImportWallet() {
    return this.page.getByTestId('onboard-page-import-wallet-button')
  }

  get btnSeedPhrase() {
    return this.page.getByTestId('onboard-page-import-seed-phrase-or-private-key')
  }

  get inputSeedPhrase() {
    return this.iframe.getByTestId('import-seed-phrase-or-private-key-page-seed-phrase-input')
  }

  get btnConfirm() {
    return this.iframe.getByTestId('import-seed-phrase-or-private-key-page-confirm-button')
  }

  get btnOk() {
    return this.iframe.getByTestId('okd-button')
  }

  get inputPassword() {
    return this.iframe.getByPlaceholder('Enter at least 8 characters')
  }

  get inputPasswordConfirm() {
    return this.iframe.getByPlaceholder('Re-enter new password')
  }

  get btnStartWeb3() {
    return this.page.getByTestId('onboarding-success-page-confirm-button')
  }

  get btnConnect() {
    return this.page.getByRole('button', { name: /^Connect$/ })
  }

  /** okx onboarding */
  async onboarding() {
    await this.btnImportWallet.click()
    await this.btnSeedPhrase.click()
    const keys = credentials.seedPhrase.split(' ')
    for (let i = 0; i < keys.length; i++) {
      await this.inputSeedPhrase.nth(i).fill(keys[i])
    }
    await this.btnConfirm.click()
    await this.btnOk.click()
    await this.inputPassword.fill(credentials.password)
    await this.inputPasswordConfirm.fill(credentials.password)
    await this.btnOk.click()
    await this.btnStartWeb3.click()
  }

  async confirm() {
    await this.btnConnect.click()
  }
}

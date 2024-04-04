import { BrowserContext, Page } from '@playwright/test'
import { urlMetamask } from '../fixtures/data.json'
import credentials from '../fixtures/config'

export default class Metamask {
  constructor(
    readonly browserContext: BrowserContext,
    readonly page: Page
  ) {}

  get ckbOnboarding() {
    return this.page.locator('#onboarding__terms-checkbox')
  }
  get btnImportWallet() {
    return this.page.getByTestId('onboarding-import-wallet')
  }
  get btnNoThanks() {
    return this.page.getByTestId('metametrics-no-thanks')
  }
  get btnConfirmSecretPhrase() {
    return this.page.getByTestId('import-srp-confirm')
  }
  get inputCreatePassword() {
    return this.page.getByTestId('create-password-new')
  }
  get inputConfirmPassword() {
    return this.page.getByTestId('create-password-confirm')
  }
  get ckbTerms() {
    return this.page.getByTestId('create-password-terms')
  }
  get btnImportMyWallet() {
    return this.page.getByTestId('create-password-import')
  }
  get btnGotIt() {
    return this.page.getByTestId('onboarding-complete-done')
  }
  get btnOk() {
    return this.page.getByTestId('page-container-footer-next')
  }
  get btnNext() {
    return this.page.getByTestId('pin-extension-next')
  }
  get btnDone() {
    return this.page.getByTestId('pin-extension-done')
  }

  inputWord = (id: number) => this.page.locator(`#import-srp__srp-word-${id}`)

  /** metamask onboarding */
  async onBoarding() {
    await this.page.goto(urlMetamask)
    await this.page.waitForLoadState()
    await this.ckbOnboarding.click()
    await this.btnImportWallet.click()
    await this.btnNoThanks.click()
    const keys = credentials.seedPhrase.split(' ')
    for (let i = 0; i < keys.length; i++) {
      await this.inputWord(i).fill(keys[i])
    }
    /** alternative way - write secret keys to clibboard and paste with keyboard command 'Control+V' */
    // await this.page.evaluate(k => navigator.clipboard.writeText(k), data.key)
    // await this.inputWord(0).press('Control+V')
    await this.btnConfirmSecretPhrase.click()
    await this.inputCreatePassword.fill(credentials.password)
    await this.inputConfirmPassword.fill(credentials.password)
    await this.ckbTerms.click()
    await this.btnImportMyWallet.click()
    await this.btnGotIt.click()
    await this.btnNext.click()
    await this.btnDone.click()
  }

  async initPage() {
    const page = await this.browserContext.waitForEvent('page')
    await page.setViewportSize({
      width: 350,
      height: 550,
    })
    return new Metamask(this.browserContext, page)
  }

  async confirm() {
    const metamask = await this.initPage()
    await metamask.btnOk.click()
    await metamask.btnOk.click()
  }
}

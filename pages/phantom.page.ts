import { BrowserContext, Page } from '@playwright/test'
import { urlPhantom } from '../fixtures/data.json'
import credentials from '../fixtures/config'

export default class Phantom {
  constructor(
    readonly browserContext: BrowserContext,
    readonly page: Page
  ) {}

  get btnHaveWallet() {
    return this.page.getByText('I already have a wallet')
  }
  get btnImportPhrase() {
    return this.page.getByText('Import Recovery Phrase')
  }
  get inputPwd() {
    return this.page.locator('input[name="password"]')
  }
  get inputPwdConfirm() {
    return this.page.locator('input[name="confirmPassword"]')
  }
  get ckbTerms() {
    return this.page.getByTestId('onboarding-form-terms-of-service-checkbox')
  }
  get btnConnect() {
    return this.page.locator('button[type="submit"]')
  }

  inputKeyById = (id: Number) => this.page.getByTestId(`secret-recovery-phrase-word-input-${id}`)
  btnOk = (text: string) => this.page.getByRole('button', { name: new RegExp(`^${text}$`) })


  /** phantom onboarding */
  async onboarding() {
    await this.page.goto(urlPhantom)
    await this.page.waitForLoadState()
    await this.btnHaveWallet.click()
    await this.btnImportPhrase.click()
    const keys = credentials.seedPhrase.split(' ')
    for (let i = 0; i < keys.length; i++) {
      await this.inputKeyById(i).fill(keys[i])
    }
    await this.btnOk('Import Wallet').click()
    await this.btnOk('Continue').click()
    await this.inputPwd.fill(credentials.password)
    await this.inputPwdConfirm.fill(credentials.password)
    await this.ckbTerms.click()
    await this.btnOk('Continue').click()
    await this.page.getByPlaceholder('username').waitFor({ timeout: 3000 }).catch(() => {})
    await this.btnOk('Continue').click({ timeout: 3000 }).catch(() => {})
  }

  async initPage() {
    const page = await this.browserContext.waitForEvent('page')
    await page.setViewportSize({
      width: 350,
      height: 550,
    })
    return new Phantom(this.browserContext, page)
  }

  async confirm() {
    const phantom = await this.initPage()
    await phantom.btnConnect.click()
  }
}

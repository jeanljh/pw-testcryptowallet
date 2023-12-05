import { BrowserContext, Page } from '@playwright/test'
import { urlPhantom } from '../fixtures/data.json'
import credentials from '../fixtures/config'

export default class Phantom {
  constructor(
    readonly browserContext: BrowserContext,
    readonly page: Page
  ) {}

  get btnImportKey() {
    return this.page.getByTestId('import-recovery-phrase-button')
  }
  get inputPwdConfirm() {
    return this.page.locator('input[name="confirmPassword"]')
  }
  get inputPwd() {
    return this.page.locator('input[name="password"]')
  }
  get ckbTerms() {
    return this.page.getByTestId('onboarding-form-terms-of-service-checkbox')
  }
  get textShortcut() {
    return this.page.locator('p >> text="Keyboard shortcut"')
  }
  get btnConnect() {
    return this.page.locator('button[type="submit"]')
  }

  inputKeyById = (id: Number) => this.page.locator(`input[data-testid='secret-recovery-phrase-word-input-${id}']`)
  btnOk = (text: string) => this.page.locator('button[type="submit"]', { hasText: text })

  /** phantom onboarding */
  async onboarding() {
    await this.page.goto(urlPhantom)
    await this.page.waitForLoadState()
    await this.btnImportKey.click()
    const keys = credentials.seedPhrase.split(' ')
    for (let i = 0; i < keys.length; i++) {
      await this.inputKeyById(i).fill(keys[i])
    }
    await this.btnOk('Import Wallet').click()
    await this.btnOk('Import Selected Accounts').click()
    await this.inputPwd.fill(credentials.password)
    await this.inputPwdConfirm.fill(credentials.password)
    await this.ckbTerms.check()
    await this.btnOk('Continue').click()
    await this.textShortcut.waitFor()
  }

  async initPage() {
    const page = await this.browserContext.waitForEvent('page')
    await page.setViewportSize({
      width: 320,
      height: 550,
    })
    return new Phantom(this.browserContext, page)
  }

  async confirm() {
    const phantom = await this.initPage()
    await phantom.btnConnect.click()
  }
}

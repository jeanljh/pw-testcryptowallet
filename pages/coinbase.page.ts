import { BrowserContext, Page } from '@playwright/test'
import { urlCoinbase } from '../fixtures/data.json'
import { coinbase } from '../fixtures/credentials.json'

export default class Coinbase {
    readonly browserContext: BrowserContext
    readonly page: Page

    constructor(browserContext: BrowserContext, page: Page) {
        this.browserContext = browserContext
        this.page = page
    }

    btnImportKey = () => this.page.locator('button[data-testid="btn-import-existing-wallet"]')
    btnEnterKey = () => this.page.locator('button[data-testid="btn-import-recovery-phrase"]')
    inputKey = () => this.page.locator('input[name="seed-phrase-input"]')
    btnImportWallet = () => this.page.locator('button[data-testid="btn-import-wallet"]')
    inputPwd = () => this.page.locator('input[data-testid="setPassword"]')
    inputPwdVerify = () => this.page.locator('input[data-testid="setPasswordVerify"]')
    ckbTerms = () => this.page.locator('input[data-testid="terms-and-privacy-policy"]')
    btnSubmit = () => this.page.locator('button[data-testid="btn-password-continue"]')
    textWalletReady = () => this.page.locator('h3[data-testid="wallet-ready"]')
    btnConnect = () => this.page.locator('button[data-testid="allow-authorize-button"]')

    /** login to coinbase */
    async login() {
        await this.page.goto(urlCoinbase)
        await this.page.waitForLoadState()
        await this.btnImportKey().click()
        await this.btnEnterKey().click()
        await this.inputKey().fill(coinbase.key)
        await this.btnImportWallet().click()
        await this.inputPwd().fill(coinbase.password)
        await this.inputPwdVerify().fill(coinbase.password)
        await this.ckbTerms().check()
        await this.btnSubmit().click()
        await this.textWalletReady().waitFor()
    }

    async initPage() {
        const page = await this.browserContext.waitForEvent('page')
        await page.setViewportSize({
            width: 320,
            height: 550
        })
        return new Coinbase(this.browserContext, page)
    }

    async confirm() {
        const coinbase = await this.initPage()
        await coinbase.btnConnect().click()
    }
}
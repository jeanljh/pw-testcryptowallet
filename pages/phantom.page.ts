import { BrowserContext, Page } from '@playwright/test'
import { urlPhantom } from '../fixtures/data.json'
import { phantom } from '../fixtures/credentials.json'

export default class Phantom {
	readonly browserContext: BrowserContext
	readonly page: Page

	constructor(browserContext: BrowserContext, page: Page) {
		this.browserContext = browserContext
		this.page = page
	}

	btnImportKey = () => this.page.locator('button[data-testid="import-recovery-phrase-button"]')
	inputKeyById = (id: Number) => this.page.locator(`input[data-testid='secret-recovery-phrase-word-input-${id}']`)
	btnOk = (text: string) => this.page.locator('button[type="submit"]', { hasText: text })
	inputPwd = () => this.page.locator('input[name="password"]')
	inputPwdConfirm = () => this.page.locator('input[name="confirmPassword"]')
	ckbTerms = () => this.page.locator('input[data-testid="onboarding-form-terms-of-service-checkbox"]')
	textShortcut = () => this.page.locator('p >> text="Keyboard shortcut"')
	btnConnect = () => this.page.locator('button[type="submit"]')

	/** login to phantom */
	async login() {
		await this.page.goto(urlPhantom)
		await this.page.waitForLoadState()
		await this.btnImportKey().click()
		const keys = phantom.key.split(' ')
		for (let i = 0; i < keys.length; i++) {
			await this.inputKeyById(i).fill(keys[i])
		}
		await this.btnOk('Import Wallet').click()
		await this.btnOk('Import Selected Accounts').click()
		await this.inputPwd().fill(phantom.password)
		await this.inputPwdConfirm().fill(phantom.password)
		await this.ckbTerms().check()
		await this.btnOk('Continue').click()
		await this.textShortcut().waitFor()
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
		await phantom.btnConnect().click()
	}
}

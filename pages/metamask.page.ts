import { BrowserContext, Page } from '@playwright/test'
import { urlMetamask } from '../fixtures/data.json'
import { metamask } from '../fixtures/credentials.json'

export default class Metamask {
	readonly browserContext: BrowserContext
	readonly page: Page

	constructor(browserContext: BrowserContext, page: Page) {
		this.browserContext = browserContext
		this.page = page
	}

	inputKey = () => this.page.locator('div.MuiFormControl-root #import-srp__srp-word-0')
	inputKeyById = (id: number) => this.page.locator(`div.MuiFormControl-root #import-srp__srp-word-${id}`)
	inputPwd = () => this.page.locator('#password')
	inputPwdConfirm = () => this.page.locator('#confirm-password')
	ckbTerms = () => this.page.locator('#create-new-vault__terms-checkbox')
	btnSubmit = () => this.page.locator("button[type='submit']")
	btnOk = (text: string) => this.page.locator(`button.btn-primary >> text='${text}'`)

	/** login to metamask */
	async login() {
		await this.page.goto(urlMetamask)
		await this.page.waitForLoadState()
		const keys = metamask.key.split(' ')
		for (let i = 0; i < keys.length; i++) {
			await this.inputKeyById(i).fill(keys[i])
		}
		/** alternative way - write secret keys to clibboard and paste with keyboard command 'Control+V' */
		// await this.page.evaluate(k => navigator.clipboard.writeText(k), data.key)
		// await this.inputKey().press('Control+V')
		await this.inputPwd().fill(metamask.password)
		await this.inputPwdConfirm().fill(metamask.password)
		await this.ckbTerms().click()
		await this.btnSubmit().click()
		await this.btnOk('All Done').click()
	}

	async initPage() {
		const page = await this.browserContext.waitForEvent('page')
		await page.setViewportSize({
			width: 320,
			height: 550,
		})
		return new Metamask(this.browserContext, page)
	}

	async confirm() {
		const metamask = await this.initPage()
		await metamask.btnOk('Next').click()
		await metamask.btnOk('Connect').click()
	}
}

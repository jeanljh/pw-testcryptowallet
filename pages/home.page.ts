import { Page } from '@playwright/test'

export default class Home {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    btnConnect = () => this.page.locator('header button[class$=BorderedButton_btn__nenER]')
    tabNetwork = (network: string) => this.page.locator('span.me-tab2-title', {hasText: network})
    btnWallet = (wallet: string) => this.page.locator('button span', {hasText: wallet})

    async navHome () {
        await this.page.goto('')
        await this.page.waitForLoadState()
    }

    async connectWallet(wallet: string) {
        await this.btnConnect().click()
        switch (wallet) {
            case 'phantom':
                await this.tabNetwork('solana').click()
                await this.btnWallet(wallet).click()
                break;
            case 'metamask':
                await this.tabNetwork('ethereum').click()
                await this.btnWallet(wallet).click()
                break;
            case 'coinbase':
                await this.tabNetwork('solana').click()
                await this.btnWallet(wallet).click()
                break;
        }
    }
}
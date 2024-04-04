import { Page } from '@playwright/test'
import { Network } from '../fixtures/enums'

export default class Home {
  constructor(readonly page: Page) {}

  get btnClosePopup() {
    return this.page.locator('[data-test-id="modal-close"]')
  }
  get btnConnect() {
    return this.page.getByRole('button', { name: 'Connect Wallet' })
  }
  tabNetwork = (network: string) => this.page.locator(`span >> text="${network}"`)
  btnWallet = (wallet: string) => this.page.locator('button span', { hasText: wallet })

  async navHome() {
    await (await this.page.goto(''))?.finished()
  }

  async connectWallet(wallet: string) {
    await this.btnConnect.click()
    switch (wallet) {
      case 'coinbase':
        await this.tabNetwork(Network.Solana).click()
        await this.btnWallet(wallet).click()
        break
      case 'metamask':
        await this.tabNetwork(Network.Ethereum).click()
        await this.btnWallet(wallet).click()
        break
      case 'phantom':
        await this.tabNetwork(Network.Solana).click()
        await this.btnWallet(wallet).click()
        break
    }
  }
}

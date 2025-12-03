import { Page } from '@playwright/test'
import { Network } from '../fixtures/enums'

export default class Home {
  constructor(readonly page: Page) {}

  get btnConnect() {
    return this.page.getByRole('button', { name: /^Connect Wallet$/ })
  }
  get btnLogin() {
    return this.page.locator('button[data-test-id="wallet-connect-button"]')
  }
  get btnViewAllWallets() {
    return this.page.locator('button.list-item-button.list-tile', { hasText: 'View all wallets' })
  }

  btnWallet = (wallet: string) => this.page.getByTestId('wallet-icon-' + wallet)
  btnNetwork = (network: string) => this.page.getByTestId('iconic-' + network)

  async navHome() {
    await this.page.bringToFront()
    await this.page.goto('')
  }

  async connectWallet(wallet: string) {
    await this.page.waitForTimeout(3000)
    await this.btnLogin.click()
    await this.btnViewAllWallets.click()
    await this.btnWallet(wallet).click()
    await this.btnNetwork(Network.Ethereum).click()
  }
}

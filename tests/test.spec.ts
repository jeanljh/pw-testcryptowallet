import test, { expect } from '../fixtures/modules'

test.describe('Test Suite - Wallet Connection', async () => {
    test.afterEach(async ({page}) => {
        await page.close()
    })
    test('Test - Connect with Different Crypto Wallets', async ({wallet, walletExt, home}) => {
        await home.navHome()
        await home.connectWallet(wallet)
        await walletExt.confirm()
        await home.btnConnect().waitFor({state: 'detached', timeout: 10000})
    })
})
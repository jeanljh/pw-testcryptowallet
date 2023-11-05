import test from '../fixtures/modules'

test.describe('Crypto wallet connection', async () => {
	test.afterEach(async ({ page }) => {
		await page.close()
	})
	test('Connect with wallet', async ({ wallet, walletExt, home }) => {
		await home.navHome()
		await Promise.all([home.connectWallet(wallet), walletExt.confirm()])
		await home.btnConnect().waitFor({ state: 'detached', timeout: 10000 })
	})
})

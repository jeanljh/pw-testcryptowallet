import test from '../fixtures/base'

test.describe('Crypto wallet connection', async () => {
  test.afterEach(async ({ page }) => {
    await page.close()
  })
  test('Connect with wallet', async ({ wallet, walletExt, home }) => {
    await home.navHome()
    const empty = await home.btnClosePopup.waitFor({ timeout: 10000 }).catch(() => true)
    if (!empty) {
      await home.btnClosePopup.click()
    }
    await Promise.all([home.connectWallet(wallet), walletExt.confirm()])
    await home.btnConnect.waitFor({ state: 'detached', timeout: 10000 })
  })
})

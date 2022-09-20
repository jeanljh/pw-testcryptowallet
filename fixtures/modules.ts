import { test as base } from '../fixtures/init'
import Phantom from '../pages/phantom.page'
import Metamask from '../pages/metamask.page'
import Coinbase from '../pages/coinbase.page'
import Home from '../pages/home.page'

const test = base.extend<{
    home: Home
    walletExt: Phantom | Metamask | Coinbase
}>({
    walletExt: async ({wallet, browserContext, page}, use) => {
        switch (wallet) {
            case 'phantom':
                const phantom = new Phantom(browserContext, page)
                await phantom.login()
                await use(phantom)
                break;
            case 'metamask':
                const metamask = new Metamask(browserContext, page)
                await metamask.login()
                await use(metamask)
                break;
            case 'coinbase':
                const coinbase = new Coinbase(browserContext, page)
                await coinbase.login()
                await use(coinbase)
                break;
        }
    },
    home: async ({page}, use) => {
        await use(new Home(page))
    },
})

export default test
export const expect = test.expect
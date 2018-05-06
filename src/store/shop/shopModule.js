import mutations from './mutations.js'
import actions from './actions.js'

const shopModule = {
    state: {
        products: [],
        availableCurrencies: [
            'GBP',
            'USD'
        ]
    },
    mutations,
    actions
}

export default shopModule
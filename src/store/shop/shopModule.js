import mutations from './mutations.js'
import actions from './actions.js'

const shopModule = {
    state: {
        products: []
    },
    mutations,
    actions
}

export default shopModule
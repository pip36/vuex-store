import mutations from './mutations.js'
import actions from './actions.js'

const userModule = {
    state: {
        preferences: {
            currency: 'GBP'
        }
    },
    mutations,
    actions
}

export default userModule
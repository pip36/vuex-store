import mutations from './mutations.js'
import actions from './actions.js'

const cartModule = {
    state: {        
        items: []            
    },
    mutations,
    actions
}

export default cartModule
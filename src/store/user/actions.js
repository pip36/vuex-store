import * as types from '../store-actions.js'

export default {
    [types.SET_PREFERENCE] ({commit}, payload) {
        commit(types.SET_PREFERENCE, payload)
    }
}
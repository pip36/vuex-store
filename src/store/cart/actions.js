import * as types from '../store-actions.js'

export default {
    [types.ADD_ITEM_TO_CART] ({commit}, item) {
        commit(types.ADD_ITEM_TO_CART, item)
    },

    [types.REMOVE_ITEM_FROM_CART] ({commit}, index) {
        commit(types.REMOVE_ITEM_FROM_CART, index)
    }
}
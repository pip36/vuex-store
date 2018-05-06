import * as types from '../store-actions.js'

export default {
    [types.SET_ALL_PRODUCTS] (state, products) {
        state.products = products
    }  
}
import * as types from '../store-actions.js'
import * as api from '@/api.js'

export default {
    [types.SET_ALL_PRODUCTS] ({commit}) {
        api.fetchAllProducts().then((products) => {
            commit(types.SET_ALL_PRODUCTS, products)
        })  
    }
}
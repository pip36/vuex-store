import Vue from 'vue'
import * as types from '../store-actions.js'

export default {
    [types.ADD_ITEM_TO_CART] (state, item) {
        let duplicateItem = state.items.find((cartItem) => cartItem.id === item.id)
        if(duplicateItem){
            duplicateItem.quantity++
        } 
        else {
            Vue.set(item, 'quantity', 1)
            state.items.push(item)
        }
    },

    [types.REMOVE_ITEM_FROM_CART] (state, index) {
        state.items.splice(index,1)
    }
}
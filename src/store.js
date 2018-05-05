import Vue from 'vue'
import Vuex from 'vuex'
import * as api from './api.js'
import * as types from './store-actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      items: []       
    },
    products: []
  },
  mutations: {
      [types.SET_ALL_PRODUCTS] (state, products) {
        state.products = products
      },

      [types.ADD_ITEM_TO_CART] (state, item) {
        let duplicateItem = state.cart.items.find((cartItem) => cartItem.id === item.id)
        if(duplicateItem){
          duplicateItem.quantity++
        } else {
          Vue.set(item, 'quantity', 1)
          state.cart.items.push(item)
        }     
      },

      [types.REMOVE_ITEM_FROM_CART] (state, index) {
        state.cart.items.splice(index,1)
      }
  },
  actions: {
      [types.SET_ALL_PRODUCTS] ({commit}) {
        api.fetchAllProducts().then((products) => {
          commit(types.SET_ALL_PRODUCTS, products)
        })  
      },

      [types.ADD_ITEM_TO_CART] ({commit}, item) {
        commit(types.ADD_ITEM_TO_CART, item)
      },

      [types.REMOVE_ITEM_FROM_CART] ({commit}, index) {
        commit(types.REMOVE_ITEM_FROM_CART, index)
      }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './store-actions.js'

import CartModule from './cart/cartModule.js'
import ShopModule from './shop/shopModule.js'
import UserModule from './user/userModule.js'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart: CartModule,
    shop: ShopModule,
    user: UserModule
  }
})

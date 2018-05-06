import * as types from '../store-actions.js'
import Vue from 'vue'

export default {
    [types.SET_PREFERENCE] (state, payload) {
        Vue.set(state.preferences, payload.preference, payload.value)
    }
}
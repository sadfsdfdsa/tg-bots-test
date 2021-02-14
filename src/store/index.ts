import Vue from 'vue'
import Vuex from 'vuex'

import { Module, createStore } from 'vuex-smart-module'
import bots from './botsModule'

Vue.use(Vuex)

const root = new Module({
  modules: {
    bots,
  },
})

const store = createStore(root)

export default store

export const botsModule = bots.context(store)

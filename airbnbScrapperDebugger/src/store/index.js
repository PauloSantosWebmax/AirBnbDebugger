
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

// Modules
import AirBnb from './modules/AirBnb'

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  modules: {
    AirBnb
  },
  strict: true
})

export default store

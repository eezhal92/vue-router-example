import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  people: {
    all: []
  },
  person: {}
}

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  mutations
})

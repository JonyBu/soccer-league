import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: ''
  },
  mutations: {
    changeValue(state, newValue) {
      state.value = newValue
    },
  },
  getters: {
    getValue: state => {
      return state.value
    }
  },
  actions: {

  },
  modules: {

  }
})

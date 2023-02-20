import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: '覃凯'
  },
  mutations: {
    getUserName (state, data) {
      state.userName = data
    }
  },
  actions: {
  },
  modules: {
  }
})

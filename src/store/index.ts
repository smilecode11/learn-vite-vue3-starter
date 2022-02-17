import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

const store = createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    },
    decrement(state: typeof defaultState) {
      state.count--
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    doubleCount(state: typeof defaultState) {
      return state.count * 2
    }
  }
})

export default store

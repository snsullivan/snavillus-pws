import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      navActive: false
    },
    mutations: {
      toggleNav (state, bool=null) {
        bool === null
          ? state.navActive = !state.navActive
          : state.navActive = bool;
      }
    }
  })
}

export default createStore

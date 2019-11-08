import Vuex from 'vuex'

export default new Vuex.Store({
  getters: {
    loginTitle: state => state.globalState && state.globalState.loginTitle
  }
})

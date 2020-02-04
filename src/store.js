import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    me: null,
    user: null,
    setting: null
  },
  mutations: {
    set_me (state, me) {
      state.me = me
      localStorage.setItem('me', JSON.stringify(me))
    },
    set_user (state, user) {
      state.user = user
    },
    set_setting (state, setting) {
      state.setting = setting
    }
  }
})

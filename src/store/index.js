import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		lang: 'en'
	},
	mutations: {
		changeLang (state, lang) {
			state.lang = lang
		}
	},
  actions: {
  },
  modules: {
  }
})

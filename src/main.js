if (window.location) {
  if (window.location.protocol == 'http:') {
    var url = 'https://'+ window.location.host + window.location.pathname + window.location.hash;
    window.location.replace(url);
  }
}

import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
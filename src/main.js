// vue localhost 웹화면에서 https 문제시 아래 if문 주석처리 후 확인
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

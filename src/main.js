import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import Vuex from 'vuex'
import store from './store'

import './assets/theme.scss'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

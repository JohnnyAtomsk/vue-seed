import Vue from 'vue'
import Vuex from 'vuex'
import apiData from './modules/apiData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apiData
  }
})

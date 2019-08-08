import Vue from 'vue'
import axios from 'axios'
import VueLodash from 'vue-lodash'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(VueMaterial)
const EStore = require('electron-store')
const eStore = new EStore()

Vue.use(VueLodash, { name: 'lodash' }) // options is optional

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.prototype.$eStore = eStore
Vue.config.productionTip = false
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
/* eslint-disable no-new */
Vue.prototype.$eventBus = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

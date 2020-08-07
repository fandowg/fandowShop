import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VModal from 'vue-js-modal'
// import VeeValidate from 'vee-validate'
// import zhTWValidate from 'vee-validate/dist/locale/zh_TW'

import App from './App.vue'
import router from './router'
// import './bus'
// import currencyFilter from './filters/currency'
// import date from './filters/date'
Vue.use(VModal, {
  dialog: true,
  dynamicDefaults: {
    draggable: false,
  }
})
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
// Vue.use(VeeValidate);
// VeeValidate.Validator.localize('zh_TW', zhTWValidate)

Vue.component('Loading',Loading)
// Vue.filter('currency',currencyFilter)
// Vue.filter('date',date)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VModal from 'vue-js-modal'
import { ValidationProvider, extend } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';
import { localize } from 'vee-validate';
import TW from './assets/validate/zh_TW.json'
import { required, email, digits } from 'vee-validate/dist/rules';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import store from './store'

import Alert from './components/Alert.vue'
import './bus'
import date from './filters/date'
import categoryChangeCn from './filters/categoryChangeCn'
// import './bus'
// import currencyFilter from './filters/currency'
// import date from './filters/date'
extend('required',required)
extend('email',email)
extend('digits',digits)
// extend('email', {
// ...email,
// message: '叫你填資料'
// });
// extend('required', {
//   ...required,
//   message: '媽的你不填阿'
// });
Vue.use(VModal, {
  dialog: true,
  dynamicDefaults: {
    draggable: false,
  }
})
Vue.use(Vuex)
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
Vue.use(VueAwesomeSwiper)
swiper.use([Navigation, Pagination, Autoplay])
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

localize('zh_TW',TW)
// localize({
//   zh_TW: {
//     messages: {
//       required: 'gggg',
//       min: 'this field must have no less than {length} characters',
//       max: (_, { length }) => `this field must have no more than ${length} characters`
//     }
//   }
// });


Vue.component('Loading', Loading)
// Vue.filter('currency',currencyFilter)

Vue.component('Alert', Alert)
Vue.filter('date',date)
Vue.filter('categoryChangeCn',categoryChangeCn)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const url = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(url).then((response) => {
      if (response.data.success) {
        next();
      } else {
        Vue.prototype.$bus.$emit('message:push',response.data.message);  
        next({
          path: '/login',
        });

      }

    })

  } else {
    next();
  }

})

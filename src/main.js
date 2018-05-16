import Vue from 'vue'
import store from './store/index'
import router from './router/index'

// set up extend layout option for the vue
import { VueExtendLayout, layout } from 'vue-extend-layout'
// Import Vue Tastr plugin for notification
import Toastr from 'vue-toastr'
import VueContentPlaceholders from 'vue-content-placeholders'
import VueCarousel from 'vue-carousel'

// Expose all the resources/plugins
import './resources'

import 'bootstrap/scss/bootstrap.scss'
import 'vue-toastr/src/vue-toastr.scss'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

fontawesome.library.add(brands, solid)
Vue.config.productionTip = false
Vue.use(VueExtendLayout)
Vue.use(Toastr)
Vue.use(VueContentPlaceholders)
Vue.use(VueCarousel)

Vue.component('vue-toastr', Toastr)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  router,
  ...layout
}).$mount('#app')

import Vue from 'vue'
import store from './store/index'
import router from './router/index'

// set up extend layout option for the vue
import { VueExtendLayout, layout } from 'vue-extend-layout'
// Import Vue Tastr plugin for notification
import Toastr from 'vue-toastr'
import VueContentPlaceholders from 'vue-content-placeholders'

// Expose all the resources/plugins
import './resources'

import 'bootstrap/scss/bootstrap.scss'
import 'vue-toastr/src/vue-toastr.scss'

Vue.config.productionTip = false

Vue.use(VueExtendLayout)
Vue.use(Toastr)
Vue.use(VueContentPlaceholders)

Vue.component('vue-toastr', Toastr)

new Vue({
  store,
  router,
  ...layout
}).$mount('#app')

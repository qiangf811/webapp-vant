import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/stylus/index.styl'
import './plugins/vant.js'

import components from '@/components'

Object.keys(components).forEach(c => {
  Vue.component(c, components[c])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

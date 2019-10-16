import Vue from 'vue'
import App from './App.vue'
import '@/stylus/index.styl'

import components from '@/components'

Object.keys(components).forEach(c => {
  Vue.component(c, components[c])
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

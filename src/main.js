import Vue from 'vue'
import App from './App.vue'
import '@/stylus/index.styl'
import components from '@/components'
import filters from './filters'

Object.keys(components).forEach(c => {
  Vue.component(c, components[c])
})

Object.keys(filters).forEach(f => {
  Vue.filter(f, filters[f])
})

// if (process.env.NODE_ENV === 'development')
require('./mock')
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

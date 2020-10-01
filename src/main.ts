import Vue from 'vue'
import App from './App.vue'
import './assets/sass/index.sass'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

const VueTypedJs = require('vue-typed-js')

Vue.config.productionTip = false
Vue.use(VueTypedJs)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

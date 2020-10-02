import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import App from './App.vue'
import './assets/sass/index.sass'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueTypedJs)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

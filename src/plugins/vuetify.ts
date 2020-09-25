import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#d495ef',
        secondary: '#7336ba',
        accent: '#6ee6fa',
        anchor: '#2b3075'
      }
    }
  }
})

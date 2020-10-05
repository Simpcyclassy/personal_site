<template>
  <v-app>
    <v-main>
      <Header />
      <router-view/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
})
</script>

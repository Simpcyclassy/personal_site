<template>
  <v-row justify="space-around" class="header-container">
    <v-btn
      v-for="({ path, component }) in routes"
      :key="path"
      class="ma-2 button-color"
      color="secondary"
      :to="path"
    >
      {{ component }}
    </v-btn>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',

  data: () => ({
    activeTab: false,
    routes: [
      {
        path: '/',
        component: 'Home'
      },
      {
        path: '/blog',
        component: 'Blog'
      },
      {
        path: '/resume',
        component: 'Resume'
      },
      {
        path: '/projects',
        component: 'Projects'
      }
    ]
  })
})
</script>

<style scoped>
.header-container {
  margin-top: 50px;
}
</style>

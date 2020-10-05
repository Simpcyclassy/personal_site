<template>
  <v-row justify="space-around" class="header-container">
    <v-btn
      v-for="({ path, component }) in links"
      :key="path"
      class="ma-2"
      outlined
      rounded
      color="primary"
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
    links: [
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
  margin: 20px;
}
</style>

<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="primary lighten-1 white--text text-center mx-auto"
      width="100%"
    >
      <v-card-text class="white--text">
        <strong>Let us connect using any of my handles or send me a mail</strong>
      </v-card-text>
      <v-card-text>
        <v-btn
          v-for="({ icon, path }) in icons"
          :key="path"
          :href="path"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text>
        <v-btn
          v-for="({ path, component }) in links"
          :key="path"
          color="white"
          :to="path"
          text
          rounded
          class="my-2"
        >
          {{ component }}
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        This is a personal site of <strong>Chioma Onyekpere</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  data: () => ({
    icons: [
      {
        path: 'https://twitter.com/simpcyclassy',
        icon: 'mdi-twitter'
      },
      {
        path: 'https://www.linkedin.com/in/chioma-onyekpere',
        icon: 'mdi-linkedin'
      },
      {
        path: 'https://github.com/Simpcyclassy',
        icon: 'mdi-github'
      },
      {
        path: 'https://www.youtube.com/channel/UCJt6GiU5k_j64l9aLjUQiwQ',
        icon: 'mdi-youtube'
      },
      {
        path: 'https://web.facebook.com/onyekpere.chioma/',
        icon: 'mdi-facebook'
      },
      {
        path: 'mailto:chioma.onyekpere@gmail.com',
        icon: 'mdi-gmail'
      }
    ],
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
</style>

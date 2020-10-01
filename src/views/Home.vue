<template>
  <div>
    <v-parallax dark src="../assets/images/coding-chioma.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" sm="4">
          <vue-typed-js
            :strings="[
              'my name is Chioma Onyekpere',
              'I am a Software Engineer'
            ]"
          >
            <h1>Hello, <span class="typing"></span></h1>
          </vue-typed-js>
          <v-btn class="ma-2" rounded color="white" to="/resume">
            Hire me
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
     <v-container class="white">
      <v-row no-gutters align="center" justify="center" class="professional-bio">
        <v-col
          cols="12"
          sm="6"
          class="text-center"
        >
          <v-img
            src="../assets/images/professional-bio-chioma.jpg"
            class="grey lighten-2"
            max-height="600px"
            max-width="450px"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <h2>{{ myPassion }}</h2>
          <p> {{ professionalBio }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  data: () => ({
    myPassion: 'I love to make user experience easy and exciting',
    professionalBio: 'Excited about software development I build highly interactive viable products.  I am a JavaScript developer with 1.9 years of professional experience. I have an eye for good design. I thrive on building functioning and scalable systems that will work effectively for a long time.'
  })
})
</script>

<style scoped>
.professional-bio{
  margin-top: 10%;
  margin-bottom: 10%;
}
</style>

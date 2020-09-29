<template>
  <v-parallax dark src="../assets/images/coding-chioma.png" height="850">
    <Header />
    <div class="d-flex justify-center">
      <vue-typed-js :strings="['my name is Chioma', 'I am a Software Engineer']">
        <h1>Hello, <span class="typing"></span></h1>
      </vue-typed-js>
    </div>
    <div class="text-center hire-me">
      <v-btn
        class="ma-2"
        outlined
        color="accent"
        to="/resume"
      >
        Hire me
      </v-btn>
    </div>
  </v-parallax>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {}
</script>
<style scoped>
.hire-me {
  margin-bottom: 20%;
}
</style>

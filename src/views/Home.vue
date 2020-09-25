<template>
  <v-parallax dark src="../assets/images/coding-chioma.png" height="1000">
    <Header />
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
<style scoped></style>

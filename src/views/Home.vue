<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <Header msg="Chioma's personal blog"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue' // @ is an alias to /src

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {}
</script>

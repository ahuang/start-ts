<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <test1/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import test1 from '@/views/test1.vue';

@Component({
  components: {
    test1,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>

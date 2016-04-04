<template>
  <div class="container" id="some">
    <h1>Meh...</h1>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<style>
  .container {
    width: 960px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>

<script>
import Navigation from './components/Navigation'
import store from './vuex/store'

export default {
  components: {
    Navigation
  },
  store
}
</script>

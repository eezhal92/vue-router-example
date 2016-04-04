<template>
  <ul class="nav">
    <li><a v-link="{path:'/'}">Home</a></li>
    <li><a v-link="{path:'/about'}">About</a></li>
    <li><a v-link="{path:'/people'}">People</a></li>
  </ul>
</template>

<style>
ul.nav {
  padding: 0;
}

ul.nav li {
  display: inline-block;
}
</style>

<script>
export default {}
</script>

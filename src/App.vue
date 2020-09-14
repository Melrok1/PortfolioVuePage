<template>
  <div id="app">
    <mainNavbar/>
    <router-view/>
  </div>
</template>


<script>
import mainNavbar from '@/components/MainNavbar.vue'

export default {
  name: 'App',
  components: {
    mainNavbar
  },
  data() {
    return {

    }
  }
}
</script>


<style>
*, *::before, *::after {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

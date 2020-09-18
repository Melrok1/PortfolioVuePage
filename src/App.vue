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


/* Firefox scrollbar  */
* {
  scrollbar-width: thin;          /* "auto" or "thin"  */
  scrollbar-color: #167914 #3a3a3a;   /* scroll thumb & track */
}
/* Scrollbar */
/* width */
*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
/* track */
*::-webkit-scrollbar-track {
  background: #3a3a3a; 
}
/* handle */
*::-webkit-scrollbar-thumb {
  background: #167914; 
  box-shadow: inset 0 0 5px grey;
}
/* handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: #20b01e;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>

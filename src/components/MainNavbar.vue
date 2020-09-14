<template>
  <div class="mainNavbar">
    <router-link to="/">About</router-link> 
    <router-link to="/portfolio">Work</router-link> 
    <router-link to="/contact">Contact</router-link>
    <router-link to="#">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainNavbar',
  data() {
    return {

    }
  }
}
</script>


<style scoped>

.mainNavbar {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 2px 30px 30px 30px;
  background: #1f1f1f;
  border-bottom: 1px solid #20b01e;
  box-shadow: 2px 2px 2px black;
  z-index: 10;
}

.mainNavbar a {
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  color: #20b01e;
  transition: 0.3s;
  letter-spacing: 4px;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.mainNavbar a.router-link-exact-active {
  background-color: #20b01e;
  color: #3a3a3a;
  box-shadow: 0 0 5px #20b01e,
              0 0 25px #20b01e,
              0 0 50px #20b01e,
              0 0 200px #20b01e;
}

</style>
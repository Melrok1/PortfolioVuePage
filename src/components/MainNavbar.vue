<template>
  <div class="mainNavbar">
    <div class="navRouterWrap">
      <router-link to="/">About</router-link> 
      <router-link to="/work">Work</router-link> 
      <router-link to="/contact">Contact</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <menuBtn class="menuBtn" />
  </div>
</template>

<script>
import menuBtn from '@/components/MainNavbarMenuBtn'

export default {
  name: 'MainNavbar',
  components:{
    menuBtn
  },
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
  align-items: center;
  justify-content: flex-end;
  padding: 16px 16px 16px 30px;
  background: #1f1f1f;
  border-bottom: 1px solid #20b01e;
  box-shadow: 2px 2px 2px black;
  z-index: 10;
}

.mainNavbar a {
  display: inline-block;
  font-weight: 900;
  text-decoration: none;
  color: #20b01e;
  transition: 0.3s;
  letter-spacing: 3px;
  font-size: 0.6rem;
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

.menuBtn {
  display: none;
}


  /* media queries */


@media (max-width: 650px) {

    .menuBtn {
      display: inline-block;
    }
    .navRouterWrap {
      display: none;
    }
}

</style>
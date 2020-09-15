<template>
  <div class="home">
    <h1>Home page</h1>
    <skillBar />
  </div>
</template>

<script>
import skillBar from '@/components/AboutSkillsBar'

export default {
  name: 'Home',
  components: {
    skillBar
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

  .home {
    min-height: calc(100vh - 83px);
    background: #2b2b2b;
    color: #b7b7b7;
    padding: 2rem 1rem;
    z-index: 1;
  }
</style>

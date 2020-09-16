<template>
  <div class="home">

    <section>
      <nameSection />
    </section>

    <section>
      <skillBar />
    </section>

  </div>
</template>

<script>
import skillBar from '@/components/AboutSkillsBar'
import nameSection from '@/components/AboutName'

export default {
  name: 'Home',
  components: {
    skillBar,nameSection
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

.home {
  min-height: calc(100vh - 76px);
  background: #2b2b2b;
  color: #b7b7b7;
  padding: 2rem 1rem;
  z-index: 1;
}

.home section {
  width: 100%;
  height: 100vh;
}

.home section:first-of-type {
  height: calc(100vh - 76px);
}

.home section:nth-child(odd) {
  background: #2b2b2b;
}

.home section:nth-child(even) {
  background: #4b4b4b;
}

.home section:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

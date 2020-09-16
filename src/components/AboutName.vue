<template>
  <div class="nameSection">
    <h2 v-scrollAnimation>Hi my name is</h2>
    <h1 v-scrollAnimation>Martin Blaščák</h1>
    <h3 v-scrollAnimation>- front-end developer - </h3>
  </div>
</template>




<script>
export default {
  name: 'NameSection',
  data() {
    return {

    }
  }
}
</script>




<style scoped>
  .nameSection {
    display: inline-block;
    width: 50%;
    margin: 1rem 0rem 1rem 4rem;
    text-align: left;
    transition: 0.3s;
    letter-spacing: 3px;
  }

  .nameSection h3 {
    font-size: 1.5rem;
    color: #5f5f5f;
    font-weight: 400;
    transition-delay: 2s;
  }

  .nameSection h2 {
    font-size: 2rem;
    color: #5f5f5f;
    font-weight: 400;
    transition-delay: 0s;
  }

  .nameSection h1 {
    font-size: 3.2rem;
    color: #a9a9a9;
    transition-delay: 1s;
  }

  .before-enter {
  opacity: 0;
  transform:translateX(100px);
  transition: all 2s cubic-bezier(.77,.04,.53,1.65);
}

.enter {
  opacity: 1;
  transform:translateX(0px);
}
</style>
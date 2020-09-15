<template>
  <div class="portfolio">
    <h1>Portfolio page</h1>
  </div>
</template>



<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      
    }
  },
}
</script>





<style scoped>

  .portfolio {
    min-height: calc(100vh - 83px);
    /* background: #2b2b2b; */
    background: transparent;
    color: #b7b7b7;
    padding: 2rem 1rem;
    overflow-x: hidden;
    /* background: url('../assets/stripeBg-compress.jpg') no-repeat fixed center;
    background-size: cover; */
  }

  .portfolio::after {
  content: "";
  background: url('../assets/stripeBg-compress.jpg') no-repeat fixed center;
  background-size: cover;
  opacity: 0.95;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}

</style>

<template>
  <div class="contact">
    <contactInformation/>
    <!-- <h1>This is an contact page</h1> -->
    <contactForm/>
  </div>
</template>



<script>
import contactForm from '@/components/ContactForm.vue';
import contactInformation from '@/components/ContactInformation.vue';

export default {
  name: 'Contact',
  components: {
    contactForm,
    contactInformation
  },
  data() {
    return {

    }
  }
}
</script>



<style scoped>

  .contact {
    min-height: calc(100vh - 83px);
    background: transparent;
    color: #b7b7b7;
    padding: 2rem 1rem;
    /* background: url('../assets/stripeBg-compress.jpg') no-repeat fixed center;
    background-size: cover; */
  }

  .contact::after {
    content: "";
    background: #2b2b2b;
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
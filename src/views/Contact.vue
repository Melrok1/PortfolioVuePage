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
    background: #2b2b2b;
    color: #b7b7b7;
    padding: 2rem 1rem;
    background: url('../assets/stripeBg-compress.jpg') no-repeat fixed center;
    background-size: cover;
  }
</style>
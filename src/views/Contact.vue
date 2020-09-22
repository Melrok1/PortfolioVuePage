<template>
  <div class="contact">
    <section class="contactInformationSection">
      <contactInformation/> 
    </section>
    <section class="contactFormSection">
      <contactForm/>
    </section>
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
    min-height: calc(100vh - 76px);
    color: #b7b7b7;
    padding: 1rem;
    background-color: #2b2b2b;

    display: flex;
    flex-direction: row;

    overflow-x: hidden;
  }

  .contactInformationSection,
  .contactFormSection {
    width: 50%;
    /* border: 1px solid white; */
  }

  .contactInformationSection {
    padding-top: 2rem;
    /* background: red; */
  }

  /* .contactFormSection {
    background: rgb(244, 0, 252);
  } */


  /* .contactInformationSection::after {
    content: '';
    position: absolute;
    top: 0;
    left: -15%;
    width: 60%;
    height: 2000px;
    background: #383737;
    z-index: -1;
    transform: skewX(-15deg)
  }; */

  /* .contact .contactInformation {
    clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0 100%);
    background: #383737;
  }

  .contact .contactForm {
    clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0 100%);
    background: #383737;
  } */



    /* media queries */

@media (max-width: 400px) {

  .contactInformationSection {
    padding-top: 0px;
  }

}

@media (max-width: 870px) {

  .contact {
    display: flex;
    flex-direction: column;
  }

  .contactInformationSection,
  .contactFormSection {
    width: 100%;
  }

}


</style>
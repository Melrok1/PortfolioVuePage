<template>
  <div class="contactInformation">

    <!-- MAP TRANSITION -->
    <transition name="fade" appear>
      <div class="modaloverlay" v-if="showModal" @click="showModal = false">
      </div>
    </transition>


    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1>Lorem, ipsum.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio omnis magni 
          cumque expedita, error nemo laboriosam! Ducimus, consequuntur eos.
        </p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.1812891243185!2d21.147348715593814!3d49.
          045176495490814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ef35528dd2cbb%3A0x1b7c49ecd6ae3a2e!
          2sMedzany%2042%2C%20082%2021%20Medzany!5e0!3m2!1sen!2ssk!4v1599989682099!5m2!1sen!2ssk" 
          width="450" 
          height="450" 
          frameborder="0" 
          style="border:0;" 
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0">
        </iframe>
        <button class="modalBtn" @click="showModal = false">X</button>
      </div>
    </transition>

    <!-- ADRESS -->
    <section>
      <div class="iconWrap">
        <button class="faIconButton" @click="showModal = true">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
        </button>
      </div>
      <h4>Adress:</h4>
      <p>
        Medzany 42 <br>
        082 21 <br>
        Slovakia
      </p>
    </section>

    <!-- E MAIL -->
    <section>
      <div class="iconWrap">
        <button class="faIconButton">
          <font-awesome-icon :icon="['fas', 'at']" /> 
        </button>
      </div>
      <h4>E-mail:</h4>
      <p>martin.blascak86@gmail.com</p>
    </section>

    <!-- PHONE NUMBER -->
    <section>
      <div class="iconWrap">
        <button class="faIconButton">
          <font-awesome-icon :icon="['fas', 'phone']" />
        </button>
      </div>
      <h4>PhoneNumber:</h4>
      <p>+421 904 413 434</p>
    </section>

    <!-- MESSENER -->
    <section>
      <div class="iconWrap">
        <button class="faIconButton">
          <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
        </button>
      </div>
      <h4>Messenger:</h4>
      <p>???</p>
    </section>

  </div>
</template>












<script>

export default {
  name: 'ContactInformation',
  data() {
    return {
      showModal: false,
    }
  }
}
</script>














<style scoped>
  .contactInformation {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 0.25rem;
  }

  /* .contactInformation section {
    border: 2px solid pink;
  } */

.contactInformation section h4 {
  color: #fff;
  margin-bottom: 0.5rem;
}

.faIconButton {
  font-size: 1.4rem;
  color: #2b2b2b;
  display: block;
  margin: 0.25rem auto 0.5rem;
  padding: 0.5rem 0.61rem;
  background: #20b01e;

  appearance: none;
  outline: none;
  border: none;
  /* background: none; */
  cursor: pointer;
  opacity: 0.7;
}

section:nth-child(1) button{
  padding: 0.5rem 0.79rem !important;
}

/* modal background  */
  .modaloverlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;

    background-color: rgba(0,0,0,0.4);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  /* Modal */
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    padding: 25px;
    background-color: seashell;
    z-index: 99;
  }

  .modal .modalBtn {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 7px;
    color: rgb(87, 0, 0);
    font-size: 1.1rem;

    appearance: none;
    outline: none;
    border: 1px solid #8a8a8a;
    /* background: none; */
    cursor: pointer;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s;
    /* transition: opacity 0.5s; */
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateY(-200%) translateX(-100vw);
    /* opacity: 0; */
  }
</style>
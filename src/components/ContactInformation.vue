<template>
  <div class="contactInformation">

    <!-- MAP TRANSITION -->
    <transition name="fade" appear>
      <div class="modaloverlay" v-if="showModal" @click="showModal = false">
      </div>
    </transition>


    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1>Medzany 42</h1>
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
        <button class="modalBtn" @click="showModal = false">
          <font-awesome-icon :icon="['fas', 'times']" class="xSymbol"/> 
        </button>
      </div>
    </transition>


    <div class="contactSectionWraper">
      <!-- ADRESS -->
      <section>
        <div class="iconWrap">
          <button class="faIconButton" @click="showModal = true">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          </button>
        </div>
        <h4>Adress:</h4>
        <p>
          Medzany 42 - 082 21 - Slovakia
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
  width: 85%;
  margin: 0 auto;
  padding: 1rem;
}

.contactSectionWraper section {
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin: 1rem auto;
}

.contactSectionWraper section h4 {
  color: #fff;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
}

.contactSectionWraper section .iconWrap {
  margin-right: 1rem;
}

.faIconButton {
  width: 45px;
  height: 45px;
  font-size: 1.4rem;
  color: #20b01e;
  display: block;
  background: #2b2b2b;
  border: 1px solid #20b01e;

  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  opacity: 0.7;
}

.faIconButton:hover {
  background: #20b01e;
  color: #2b2b2b;
  border: 1px solid transparent;
}



/* modal background  */
.modaloverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.611);
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
  background: rgba(5, 41, 12, 0.357);
  z-index: 99;
}

.modal h1 {
  margin-bottom: 1rem;
}

.xSymbol {
  display: block;
}

.modal .modalBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 5px;
  color: #929292;
  background: #043304;
  font-size: 1.1rem;
  width: 30px;
  height: 30px;
  appearance: none;
  outline: none;
  border: 1px solid #8a8a8a;
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


@media (max-width: 400px) {

  .contactInformation {
    padding-left: 20px;
  }

  .contactSectionWraper section  {
    flex-direction: column;
  }

}


@media (max-width: 450px) {

  .faIconButton {
    display: none;
  }

}


@media (max-width: 1000px) {

  .contactInformation {
    width: 98%;
  }

}

</style>
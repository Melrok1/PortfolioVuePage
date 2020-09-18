<template>
  <div class="contactForm">

    <form @submit.prevent="addDataToFirestore">
      <!-- Full name -->
      <label for="InputName">Full Name (required)</label>
      <input type="text" name="InputName" v-model="name" required>
      <!-- Email -->
      <label for="inputEmail">E-mail (required)</label>
      <input type="email" name="InputName" v-model="email" required>
      <!-- Phone number -->
      <label for="InputPhone">Phone number (optional)</label>
      <input type="tel" name="InputPhone" v-model="phoneNumber">
      <!-- Text AREA -->
      <label for="InputTextarea">Message</label>
      <textarea name="InputTextarea" id="" cols="30" rows="8" v-model="message"></textarea>
      <!-- Submit BTN -->
      <div class="buttonWrap">
        <button type="submit" id="submitButton">Submit</button>
      </div>
    </form>

  </div>
</template>



<script>
import {db} from '@/firebase/init.js';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: null,
      email: null,
      phoneNumber: null,
      message: null
    }
  },
  methods: {
    addDataToFirestore() {
      console.log(this.computedData)
      db.collection('message')
        .doc(Number(this.computedData.date).toString())
        .set(this.computedData)
        .then(() => {
          console.log('ok')
          console.log(Number(this.computedData.date).toString())
        })
        .catch((err) => console.log('addDataToFirestore ERR' + err))
    },
  },
  computed: {
    computedData() {
      return {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        message: this.message,
        date: new Date()
      }
    }
  }
}
</script>



<style scoped>
  .contactForm {
    text-align: left;
    color: #b7b7b7;
    padding-top: 1rem;
  }

  .contactForm form {
    /* border: 1px solid #20b01e; */
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
  }

  .contactForm label {
    display: block;
    text-align: left;
    margin: 1rem 0rem 0.5rem 4rem;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .contactForm form input {
    width: 85%;
    height: 2rem;
    margin: 0 auto;
    padding: 0 0.75rem;
    background: #c4c4c4;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }

  .contactForm form input,
  .contactForm form textarea{
    display: block;
  }

  #app > div.contact > div > form > textarea {
    width: 85%;
    margin: 1rem auto;
    padding: 0.5rem;
    background: #c4c4c4;
    color: #3a3a3a;
    resize: none;
    outline: none;
    /* border: 1px solid #b7b7b7; */
  }

  /* width */
  #app > div.contact > div > form > textarea::-webkit-scrollbar {
    width: 12px;
  }
  
  /* track */
  #app > div.contact > div > form > textarea::-webkit-scrollbar-track {
    background: #3a3a3a; 
  }

  /* handle */
  #app > div.contact > div > form > textarea::-webkit-scrollbar-thumb {
    background: #167914; 
    /* border-radius: 6px; */
    box-shadow: inset 0 0 5px grey;
  }

  /* handle on hover */
  #app > div.contact > div > form > textarea::-webkit-scrollbar-thumb:hover {
    background: #20b01e;
    /* cursor: pointer; */
  }

  .buttonWrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #submitButton {
    display: block;
    width: 130px;
    font-weight: bold;
    color: #20b01e;
    transition: 0.3s;
    letter-spacing: 4px;
    font-size: 1.2rem;
    margin: 0.5rem;
    padding: 0.5rem 0.75rem;
    text-transform: uppercase;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    outline: none;
    border: none;
    cursor: pointer;
}

#submitButton:hover {
  background-color: #20b01e;
  color: #3a3a3a;
  box-shadow: 0 0 5px #20b01e,
              0 0 25px #20b01e,
              0 0 50px #20b01e,
              0 0 200px #20b01e;
}


</style>
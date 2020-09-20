<template>
  <div class="loginForm">
    <h1>LOGIIIIIIIIIIIIIN</h1>
    <!-- <p v-if="logedUser"> {{ logedUser.uid }} </p> -->
    <p> {{ email }} </p>
    <p>  {{ password }} </p>
    <form @submit.prevent="loginUser">
      <label for="inputEmail">E-mail</label>
      <input type="email" name="inputEmail" v-model="email" required>
      <label for="inputPassword">Password</label>
      <input type="password" name="inputPassword" v-model="password" required>
      <button type="submit">Enter</button>
    </form>
  </div>
</template>

<script>
import {auth} from '@/firebase/init.js';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      // logedUser: {}
    }
  },
  methods: {
    loginUser() {
      auth.signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + errorMessage);
          })
        .then(
          // () => {this.$router.replace('Login')},
          console.log('OK')
        )
    }
  }  
}
</script>


<style scoped>
  .loginForm {
    width: 30%;
    margin: 0 auto;
    border: 3px solid purple;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loginForm form input {
    display: block;
  }

</style>
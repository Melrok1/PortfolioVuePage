<template>
  <div class="loginForm">

    <h1>Sign In</h1>

    <p class="errMsg">{{ computedErr }}</p>
    <form @submit.prevent="loginUser">
      <label for="inputEmail">E-mail</label>
      <input type="email" name="inputEmail" v-model="email" required>
      <label for="inputPassword">Password</label>
      <input type="password" name="inputPassword" v-model="password" required>
      <button type="submit" class="btnLog">Enter</button>
    </form>

  </div>
</template>

<script>
import {auth} from '@/firebase/init.js';

export default {
  name: 'LoginForm',
  data() {
    return {
      errSignIn: null,
      email: '',
      password: '',
      // logedUser: {}
    }
  },
  methods: {
    loginUser() {
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then(
          // () => {this.$router.replace('Login')},
          console.log('OK')
        )
        // .catch(err => this.errSignIn = err.message)
        .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorMessage);
          this.errSignIn = errorCode;
        })
    }
  },
  computed: {
    computedErr() {
      if(this.errSignIn) {
        return this.errSignIn.replace(/-|\/|auth/g, ' ');
      }else {
        return null;
      }
    }
  }  
}
</script>


<style scoped>
  .loginForm {
    width: 300px;
    margin: 0 auto;
    padding-bottom: 1rem;
    background: #1f1f1f;
    border: 1px solid #20b01e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loginForm form input {
    border: none;
    outline: none;
    text-align: center;
    display: block;
    margin: 0 auto;
    padding: 0.25rem 0.5rem;
    background: rgb(182, 182, 182);
  }

  .loginForm form label {
    color: #f2f2f2;
    display: block;
    margin: 10px auto 0px;
  }

  .loginForm form button {
    margin: 15px auto;
  }

  .btnLog {
    display: block;
    width: 100px;
    font-weight: bold;
    color: #20b01e;
    transition: 0.3s;
    letter-spacing: 4px;
    font-size: 0.8rem;
    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    outline: none;
    border: none;
    cursor: pointer;
  }

  .btnLog:hover {
    background-color: #20b01e;
    color: #3a3a3a;
    box-shadow: 0 0 5px #20b01e,
                0 0 25px #20b01e;
  }

  .errMsg {
    color: #e41010;
    font-weight: 400;
    font-size: 0.9rem;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    outline: none;
    color: black;
    /* -webkit-text-fill-color: green; */
    background: rgb(136, 136, 136);
    /* -webkit-box-shadow: 0 0 0px 1000px rgb(136, 136, 136) inset; */
    transition: background-color 5000s ease-in-out 0s;
  }


</style>
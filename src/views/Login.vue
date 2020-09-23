<template>
  <div class="login">

<!-- Message section -->
    <div class="msgWraper" v-if="toggle">
      
      <header>
        <p>{{ user }}</p>
        <button class="btnLog" @click="logout()">Logout</button>
      </header>

      <div 
        v-for="(msg, index) in messageData.slice().reverse()"
        :key="index">
        <singleMsg :msg="msg" :index="index" :msgLength="sumAllMsg"/>
      </div>
    </div>

<!-- Login -->
    <div class="loginFormWraper" v-if="!toggle" v-scrollAnimation>
      <loginForm />
    </div>

  </div>
</template>

<script>
import loginForm from '@/components/LoginForm.vue';
import singleMsg from '@/components/LoginSingleMsg.vue';
import {db, auth} from '@/firebase/init.js';

export default {
  name: 'Login',
  components: {
    singleMsg, loginForm
  },
  data() {
    return {
      messageData: [],
      toggle: false,
      user: null,
    }
  },
  methods: {
    logout() {
        auth.signOut()
          .then(
            () => {console.log('user log out')}
          )
    }
  },
  computed: {
    // checkUser() {
    //   if(auth.currentUser) {
    //     return true
    //   }else {
    //     return false
    //   }
    // },
    sumAllMsg() {
      return this.messageData.length
    }
  },
  created() {
    db.collection('message').get()
      .then(snapShot => {
        snapShot.forEach(doc => {
          let singleMessage = doc.data();
          let timeStamp = doc.data().date.seconds * 1000;
          let date = new Date(timeStamp);
          let formatDate = `${date.getDate()}. 
          ${(date.getMonth()+1)}. | ${date.getHours()}:${date.getMinutes() < 10? "0" + date.getMinutes(): date.getMinutes()}`;
          singleMessage.id = doc.id;
          singleMessage.formatedDate = formatDate;
          return this.messageData.push(singleMessage);
        })
      }),
    auth.onAuthStateChanged(user => {
      this.toggle = !!user;
      this.user = user.email;
    })
  }
}
</script>

<style scoped>

  .login {
    min-height: calc(100vh - 76px);
    background: #2b2b2b;
    color: #b7b7b7;
    padding: 2rem 1rem;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    /* border: 1px solid white; */
    padding: 0rem 2rem 1.2rem 2rem;
  }

  header p {
    color: white;
  }

  /* p {
    margin: 2rem;
    border: 2px solid #fff;
    padding: 10px;
  } */

  .loginFormWraper {
    width: 100%;
    margin: 5rem auto;
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

/* Login form animation */
  .before-enter {
    opacity: 0;
    transition: all 2s ease-in-out;
  }
  
  .enter {
    opacity: 1;
  }
</style>
<template>
  <div class="login">
    <!-- <button @click="toggle = !toggle">Show</button> -->
    <div class="msgWraper" v-if="toggle">
      <button @click="logout()">Logout</button>
      <div 
        v-for="(msg, index) in messageData.slice().reverse()"
        :key="index">
        <singleMsg :msg="msg" :index="index" :msgLength="sumAllMsg"/>
      </div>
    </div>
    <div class="loginFormWraper" v-if="!toggle">
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
    }
  },
  methods: {
    logout() {
        auth.signOut()
          .then(
            // () => {this.$router.reload()},
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
    })
  }
}
</script>

<style scoped>

  .login {
    min-height: calc(100vh - 83px);
    background: #2b2b2b;
    color: #b7b7b7;
    padding: 2rem 1rem;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  }

  p {
    margin: 2rem;
    border: 2px solid #fff;
    padding: 10px;
  }

  .loginFormWraper {
    width: 100%;
    margin: 5rem auto;
  }
</style>
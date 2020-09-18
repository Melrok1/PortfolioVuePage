<template>
  <div class="login">
    <button @click="togle = !togle">Show</button>
    <div class="msgWraper" v-if="togle">
      <div 
        v-for="(msg, index) in messageData.slice().reverse()"
        :key="index">
        <singleMsg :msg="msg" :index="index" :msgLength="sumAllMsg"/>
      </div>
    </div>
  </div>
</template>

<script>
import singleMsg from '@/components/LoginSingleMsg.vue';
import {db} from '@/firebase/init.js';

export default {
  name: 'Login',
  components: {
    singleMsg
  },
  data() {
    return {
      messageData: [],
      togle: true
    }
  },
  computed: {
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
    z-index: 1;
  }

  p {
    margin: 2rem;
    border: 2px solid #fff;
    padding: 10px;
  }
</style>
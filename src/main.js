import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {auth} from '@/firebase/init.js'
import ScrollAnimation from './directives/scrollAnimations'
import './assets/icons'

Vue.directive('scrollAnimation', ScrollAnimation);
Vue.config.productionTip = false;

let app = '';

auth.onAuthStateChanged(
  () => {
    if(!app) {
      app = new Vue({
        router,
        render: h => h(App),
      }).$mount('#app')
    }
  }
);



















// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimation from './directives/scrollAnimations'
import './assets/icons'

Vue.directive('scrollAnimation', ScrollAnimation);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

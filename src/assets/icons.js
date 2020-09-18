import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faPhone, faAt, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faHtml5, faCss3Alt, faVuejs, faJs, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faMapMarkerAlt, faPhone, faAt, faTimes, 
  faFacebookMessenger, faHtml5, faCss3Alt, 
  faVuejs, faJs, faNodeJs, faGithub, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)
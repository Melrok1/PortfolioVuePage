import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faPhone, faAt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMapMarkerAlt, faPhone, faAt, faFacebookMessenger)

Vue.component('font-awesome-icon', FontAwesomeIcon)
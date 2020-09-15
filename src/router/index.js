import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Contact from '@/views/Contact.vue'
import Work from '@/views/Work.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
